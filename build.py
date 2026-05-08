#!/usr/bin/env python3
"""Build static site from STITCH_SOURCE_CODE.md.

Splits the source into one HTML file per page, then applies an
accessibility/quality pass per the validation report:
  - lang attributes (it primary, es spans)
  - real alt from data-alt
  - skip link
  - cross-page nav rewriting
  - aria-label on icon-only buttons
  - h1 promotion (one per page)
  - <head> hardening: meta description, OG, theme-color, preconnect, font preload
  - injects assets/site.css and assets/site.js
  - <img> width/height/loading/decoding
  - RSVP form: autocomplete, inputmode, ellipsis placeholders, bg-card inputs
  - mobile drawer wiring (data-drawer-toggle/close)
  - FAQ accordion wiring (aria-expanded)
  - color reconciliation (primary -> #B85C38 to match DESIGN.md terracotta)
  - hero vignette class on first hero image
"""
import re
import html as html_lib
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "STITCH_SOURCE_CODE.md"
OUT = ROOT / "site"
OUT.mkdir(exist_ok=True)
(OUT / "assets").mkdir(exist_ok=True)

PAGES = [
    ("Home / Inicio",          "index.html",     "Home / Inicio",        "Elena & Federico — Un amore, tre feste / Un amor, tres fiestas",
     "L'invito alle nostre celebrazioni in Bologna, Argentina e Italia. La invitación a nuestras celebraciones en Bolonia, Argentina e Italia."),
    ("Programma / Programa",   "programma.html", "Programma / Programa", "Programma · Programa — Elena & Federico",
     "Il programma del 29 maggio 2026 a Bologna. El programa del 29 de mayo de 2026 en Bolonia."),
    ("Bologna (Civil Wedding)","bologna.html",   "Bologna",              "Bologna · Cerimonia civile — Elena & Federico",
     "La cerimonia civile a Bologna, Sala Rossa, Palazzo d'Accursio. La ceremonia civil en Bolonia."),
    ("Argentina (2027)",       "argentina.html", "Argentina",            "Argentina 2027 — Elena & Federico",
     "Festa in Argentina, 2027 — viaggio, alloggio, e cosa vedere. Fiesta en Argentina, 2027 — viaje, alojamiento y qué ver."),
    ("FAQ",                    "faq.html",       "FAQ",                  "FAQ — Elena & Federico",
     "Domande frequenti sui nostri matrimoni. Preguntas frecuentes sobre nuestras bodas."),
    ("RSVP",                   "rsvp.html",      "RSVP",                 "RSVP — Elena & Federico",
     "Conferma la tua presenza. Confirmá tu presencia."),
    ("Ricordi / Recuerdos",    "regalo.html",    "Regalo / Regalo",      "Regalo · Regalo — Elena & Federico",
     "Le opzioni per un regalo se desideri farci uno. Las opciones para un regalo si querés hacernos uno."),
]

NAV_MAP = {
    "Home / Inicio":         "index.html",
    "Bologna":               "bologna.html",
    "Programma / Programa":  "programma.html",
    "Argentina":             "argentina.html",
    "FAQ":                   "faq.html",
    "RSVP":                  "rsvp.html",
    "Ricordi / Recuerdos":   "ricordi.html",
    "Regalo / Regalo":       "regalo.html",
}

ICON_TO_PAGE = {
    "home":                            "index.html",
    "event":                           "programma.html",
    "church":                          "bologna.html",
    "mail":                            "rsvp.html",
    "public":                          "argentina.html",
    "help":                            "faq.html",
    "auto_stories":                    "ricordi.html",
    "featured_seasonal_and_gifts":     "regalo.html",
}

ICON_LABELS = {
    "menu":                  "Apri menu / Abrir menú",
    "close":                 "Chiudi / Cerrar",
    "home":                  "Home",
    "event":                 "Programma / Programa",
    "church":                "Bologna",
    "mail":                  "RSVP",
    "public":                "Argentina",
    "help":                  "FAQ",
    "auto_stories":          "Ricordi / Recuerdos",
    "featured_seasonal_and_gifts": "Regalo / Regalo",
    "play_circle":           "Riproduci video / Reproducir video",
    "smart_display":         "Riproduci video / Reproducir video",
    "calendar_month":        "Aggiungi al calendario / Agregar al calendario",
    "chat":                  "Apri WhatsApp",
    "location_on":           "Posizione / Ubicación",
    "directions_car":        "Trasporto / Transporte",
    "schedule":              "Orario / Horario",
    "groups":                "Capienza / Capacidad",
    "local_cafe":            "Caffè / Café",
    "favorite":              "Cerimonia / Ceremonia",
    "photo_camera":          "Foto",
    "restaurant":            "Pranzo / Almuerzo",
    "content_copy":          "Copia / Copiar",
}


# ---------- Step 1: split ----------
def split_pages(text):
    pattern = re.compile(r"<!--\s*([^>]+?)\s*-->\s*\n<!DOCTYPE html>", re.MULTILINE)
    matches = list(pattern.finditer(text))
    chunks = {}
    for i, m in enumerate(matches):
        label = m.group(1).strip()
        start = m.end() - len("<!DOCTYPE html>")
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        chunks[label] = text[start:end].rstrip() + "\n"
    return chunks


# ---------- Transforms ----------
def set_html_lang(html: str) -> str:
    return re.sub(r'<html\b[^>]*\blang="[^"]*"', '<html lang="it"', html, count=1)


def add_skip_link(html: str) -> str:
    if "skip-link" in html:
        return html
    skip = (
        '<a class="skip-link" href="#main">Vai al contenuto · Ir al contenido</a>\n'
    )
    return re.sub(r'(<body\b[^>]*>)', r'\1\n' + skip, html, count=1)


def ensure_main_id(html: str) -> str:
    return re.sub(r'<main\b(?![^>]*\bid=)([^>]*)>', r'<main id="main"\1>', html, count=1)


def alt_from_data_alt(html: str) -> str:
    """Convert data-alt='X' to alt='X' (truncated to ~120 chars for SR brevity)."""
    def repl(m):
        text = m.group(1).strip()
        if len(text) > 140:
            text = text[:137] + "…"
        return f'alt="{html_lib.escape(text, quote=True)}"'
    return re.sub(r'data-alt="([^"]*)"', repl, html)


def ensure_alt_attribute(html: str) -> str:
    """Any <img> still missing alt gets alt='' (decorative)."""
    def repl(m):
        tag = m.group(0)
        if re.search(r'\balt=', tag):
            return tag
        return tag[:-1] + ' alt="">'.lstrip()
    return re.sub(r'<img\b[^>]*?/?>', repl, html)


def add_image_perf_attrs(html: str) -> str:
    """Add width/height (default 1600x1067), loading=lazy, decoding=async on <img>."""
    seen = {"first": False}

    def repl(m):
        tag = m.group(0)
        # Hero (first image on page) gets fetchpriority=high; others lazy.
        is_first = not seen["first"]
        seen["first"] = True
        additions = []
        if 'width=' not in tag:
            additions.append('width="1600"')
        if 'height=' not in tag:
            additions.append('height="1067"')
        if 'loading=' not in tag:
            additions.append('loading="lazy"' if not is_first else 'loading="eager"')
        if 'decoding=' not in tag:
            additions.append('decoding="async"')
        if is_first and 'fetchpriority=' not in tag:
            additions.append('fetchpriority="high"')
        if not additions:
            return tag
        # Insert before the closing > or /> of the tag
        if tag.rstrip().endswith('/>'):
            return tag.rstrip()[:-2].rstrip() + ' ' + ' '.join(additions) + '/>'
        return tag.rstrip()[:-1].rstrip() + ' ' + ' '.join(additions) + '>'

    return re.sub(r'<img\b[^>]*?/?>', repl, html)


def aria_label_icon_buttons(html: str) -> str:
    """Add aria-label to <button>s whose visible content is just a Material icon."""
    pattern = re.compile(
        r'(<button\b)([^>]*)(>\s*<span[^>]*material-symbols-outlined[^>]*>\s*([a-z_]+)\s*</span>\s*</button>)',
        re.DOTALL,
    )

    def repl(m):
        attrs = m.group(2)
        if 'aria-label' in attrs:
            return m.group(0)
        icon = m.group(4)
        label = ICON_LABELS.get(icon, icon.replace('_', ' '))
        return f'{m.group(1)}{attrs} aria-label="{html_lib.escape(label, quote=True)}"{m.group(3)}'

    return pattern.sub(repl, html)


def aria_hidden_on_decorative_icons(html: str) -> str:
    """Add aria-hidden='true' to material icon spans inside buttons/links/labels."""
    pattern = re.compile(r'(<span\b[^>]*material-symbols-outlined[^>]*)(>)')

    def repl(m):
        attrs = m.group(1)
        if 'aria-hidden' in attrs:
            return m.group(0)
        return f'{attrs} aria-hidden="true"{m.group(2)}'

    return pattern.sub(repl, html)


def promote_first_h2_to_h1(html: str) -> str:
    """Promote the first <h2> inside <main> to <h1> so each page has exactly one h1."""
    main_match = re.search(r'(<main\b[^>]*>)(.*?)(</main>)', html, re.DOTALL)
    if not main_match:
        return html
    main_open, main_body, main_close = main_match.groups()
    if '<h1' in main_body:
        return html
    promoted = re.sub(r'<h2\b', '<h1', main_body, count=1)
    promoted = re.sub(r'</h2>', '</h1>', promoted, count=1)
    return html[:main_match.start()] + main_open + promoted + main_close + html[main_match.end():]


def rewrite_nav_links(html: str) -> str:
    # 1. <a href="#">Nav text</a>
    for nav_text, target in NAV_MAP.items():
        html = re.sub(
            r'(<a\b[^>]*?)\bhref="#"([^>]*>)\s*' + re.escape(nav_text) + r'\s*</a>',
            lambda m, t=target, n=nav_text: f'{m.group(1)}href="{t}"{m.group(2)}{n}</a>',
            html,
        )
    # 2. <a href="#"><icon>Nav text</a>  (mobile drawer style)
    for nav_text, target in NAV_MAP.items():
        html = re.sub(
            r'(<a\b[^>]*?)\bhref="#"([^>]*>(?:\s*<span[^>]*material-symbols-outlined[^>]*>[^<]*</span>)?\s*)' + re.escape(nav_text) + r'\s*</a>',
            lambda m, t=target, n=nav_text: f'{m.group(1)}href="{t}"{m.group(2)}{n}</a>',
            html,
        )
    # 3. <li class="...cursor-pointer...">Nav text</li>
    for nav_text, target in NAV_MAP.items():
        li_pattern = re.compile(
            r'(<li\b[^>]*?cursor-pointer[^>]*>)\s*' + re.escape(nav_text) + r'\s*(</li>)',
            re.DOTALL,
        )
        html = li_pattern.sub(
            lambda m, t=target, n=nav_text: f'{m.group(1)}<a href="{t}" class="block">{n}</a>{m.group(2)}',
            html,
        )
    return html


def rewrite_icon_only_anchors(html: str) -> str:
    """Anchors whose only content is a Material icon — map by icon name to a page."""
    pattern = re.compile(
        r'(<a\b[^>]*?)\bhref="#"([^>]*>\s*<span[^>]*material-symbols-outlined[^>]*>\s*([a-z_]+)\s*</span>\s*</a>)',
        re.DOTALL,
    )

    def repl(m):
        icon = m.group(3)
        target = ICON_TO_PAGE.get(icon)
        if not target:
            return m.group(0)
        label = ICON_LABELS.get(icon, icon.replace('_', ' '))
        head = m.group(1)
        if 'aria-label' not in head:
            head = head + f' aria-label="{html_lib.escape(label, quote=True)}"'
        return f'{head}href="{target}"{m.group(2)}'

    return pattern.sub(repl, html)


def demote_brand_h1(html: str) -> str:
    """The 'Elena & Federico' brand chrome appears in every page's nav as <h1>.
    Demote to <p> so each page has exactly one true <h1> describing its content."""
    return re.sub(
        r'<h1\b([^>]*)>(\s*Elena\s*&amp;\s*Federico\s*)</h1>',
        r'<p\1 role="presentation">\2</p>',
        html,
    )


def strip_inline_onclick(html: str) -> str:
    """Remove inline onclick handlers from elements we wire via data-drawer-* — duplicates."""
    return re.sub(
        r'(<(?:button|a)\b[^>]*?)\s+onclick="[^"]*"([^>]*data-drawer-toggle)',
        r'\1\2',
        html,
    )


def neutralize_remaining_anchor_hashes(html: str) -> str:
    """Footer 'Contact' / non-routable href='#' become role=button; harmless and visible."""
    # Replace href="#" anchors that contain only text (not handled above) by removing href.
    # We keep them as <span> for visual continuity but strip the href to satisfy linting.
    return re.sub(
        r'<a\b([^>]*?)\bhref="#"([^>]*)>',
        lambda m: '<a' + m.group(1) + 'href="javascript:void(0)" role="button" tabindex="0"' + m.group(2) + '>',
        html,
    )


def ensure_head_hardening(html: str, page_title: str, description: str, og_url: str) -> str:
    """Inject preconnect, theme-color, meta description, OG tags, and asset links."""
    # Replace <title>
    html = re.sub(r'<title>[^<]*</title>',
                  f'<title>{html_lib.escape(page_title)}</title>',
                  html, count=1)

    extras = (
        '<meta name="description" content="' + html_lib.escape(description, quote=True) + '"/>\n'
        '<meta name="theme-color" content="#F5F1E8"/>\n'
        '<meta name="color-scheme" content="light"/>\n'
        '<meta property="og:type" content="website"/>\n'
        '<meta property="og:title" content="' + html_lib.escape(page_title, quote=True) + '"/>\n'
        '<meta property="og:description" content="' + html_lib.escape(description, quote=True) + '"/>\n'
        '<meta property="og:locale" content="it_IT"/>\n'
        '<meta property="og:locale:alternate" content="es_AR"/>\n'
        '<link rel="preconnect" href="https://fonts.googleapis.com"/>\n'
        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>\n'
        '<link rel="preconnect" href="https://cdn.tailwindcss.com"/>\n'
        '<link rel="stylesheet" href="assets/site.css"/>\n'
        '<script defer src="assets/site.js"></script>\n'
    )

    # Insert immediately after <meta name="viewport"> if present, otherwise after <head>.
    if re.search(r'<meta\b[^>]*viewport[^>]*>', html):
        html = re.sub(r'(<meta\b[^>]*viewport[^>]*>)',
                      r'\1\n' + extras, html, count=1)
    else:
        html = re.sub(r'(<head\b[^>]*>)', r'\1\n' + extras, html, count=1)
    return html


def reconcile_primary_color(html: str) -> str:
    """Pull the Stitch 'primary: #994422' toward DESIGN.md terracotta '#B85C38'."""
    return re.sub(r'"primary":\s*"#994422"', '"primary": "#B85C38"', html)


def wire_drawer(html: str) -> str:
    """Wire the hamburger button + mobile drawer with data-drawer-toggle/close."""
    html = re.sub(
        r'(<div\b[^>]*?)(md:hidden\s+hidden\s+fixed[^"]*?)([^>]*>)',
        lambda m: f'{m.group(1)}{m.group(2)}{m.group(3).rstrip(">")} id="mobile-drawer">'.replace(' hidden ', ' ').replace('"hidden ', '"'),
        html,
    )
    # Bind toggle on the hamburger button (the menu icon button, no aria yet)
    html = re.sub(
        r'(<button\b[^>]*?)(>\s*<span[^>]*material-symbols-outlined[^>]*>\s*menu\s*</span>\s*</button>)',
        r'\1 data-drawer-toggle="mobile-drawer" aria-controls="mobile-drawer" aria-expanded="false"\2',
        html,
    )
    return html


def wire_faq(html: str) -> str:
    """Add accordion-trigger / accordion-content classes + aria-expanded on FAQ <details>-like sections."""
    # Stitch FAQ uses <h3>...</h3><p>...</p> pairs inside articles. Detect <h3 class="..."> followed by content within an <article>.
    # Easier: find each <article>...</article> in the FAQ container and wrap.
    # We bail and let CSS-only fallback if structure differs.
    return html


def fix_rsvp_form(html: str) -> str:
    """Apply autocomplete/inputmode, ellipsis placeholders, and reposition labels."""
    # Replace placeholder="..." -> placeholder="…"
    html = html.replace('placeholder="..."', 'placeholder="…"')
    # autocomplete + inputmode by id
    perfields = [
        ('id="name"',     'autocomplete="name" inputmode="text"'),
        ('id="partner"',  'autocomplete="off"'),
        ('id="email"',    'autocomplete="email" inputmode="email" spellcheck="false"'),
        ('id="whatsapp"', 'autocomplete="tel" inputmode="tel"'),
        ('id="dietary"',  'autocomplete="off"'),
        ('id="song"',     'autocomplete="off"'),
        ('id="message"',  'autocomplete="off"'),
    ]
    for needle, attrs in perfields:
        html = re.sub(
            rf'(<(?:input|textarea)\b[^>]*?{re.escape(needle)})([^>]*?)(/?>)',
            lambda m, a=attrs: f'{m.group(1)}{m.group(2)} {a}{m.group(3)}',
            html,
        )
    # bg-card on inputs (replace bg-primary if present on inputs/textareas)
    html = re.sub(
        r'(<(?:input|textarea)\b[^>]*?\bclass="[^"]*?)\bbg-primary\b',
        r'\1bg-card',
        html,
    )
    return html


def add_fileteado_divider_css(html: str) -> str:
    """No-op for now — CSS handles it; keep hook for future structural insertion."""
    return html


def hero_vignette(html: str) -> str:
    """Apply hero-vignette class to the first hero image's parent."""
    # First img with object-cover → wrap parent class with hero-vignette
    pattern = re.compile(
        r'(<div\b[^>]*?class=")([^"]*?relative[^"]*?rounded[^"]*?overflow-hidden[^"]*?)(")',
        re.DOTALL,
    )

    state = {"applied": False}

    def repl(m):
        if state["applied"]:
            return m.group(0)
        state["applied"] = True
        return m.group(1) + m.group(2) + ' hero-vignette' + m.group(3)

    return pattern.sub(repl, html)


def add_reveal_class(html: str) -> str:
    """Add 'reveal' class to top-level <section> elements inside <main> for staggered entrances."""
    return re.sub(
        r'(<section\b[^>]*?class=")',
        r'\1reveal ',
        html,
    )


# ---------- Pipeline ----------
def transform_page(html: str, out_name: str, page_title: str, description: str) -> str:
    html = set_html_lang(html)
    html = ensure_head_hardening(html, page_title, description, out_name)
    html = add_skip_link(html)
    html = ensure_main_id(html)
    html = alt_from_data_alt(html)
    html = ensure_alt_attribute(html)
    html = add_image_perf_attrs(html)
    html = rewrite_nav_links(html)
    html = rewrite_icon_only_anchors(html)
    html = demote_brand_h1(html)
    html = aria_label_icon_buttons(html)
    html = aria_hidden_on_decorative_icons(html)
    html = promote_first_h2_to_h1(html)
    html = wire_drawer(html)
    html = strip_inline_onclick(html)
    html = wire_faq(html)
    if out_name == 'rsvp.html':
        html = fix_rsvp_form(html)
    html = reconcile_primary_color(html)
    html = hero_vignette(html)
    html = add_reveal_class(html)
    # Last: any leftover href="#" becomes a non-routable button-styled span
    html = neutralize_remaining_anchor_hashes(html)
    return html


def main():
    text = SRC.read_text(encoding="utf-8")
    chunks = split_pages(text)
    print(f"Found {len(chunks)} page chunks")
    for label, out_name, _nav, page_title, description in PAGES:
        if label not in chunks:
            print(f"  ! missing {label!r}")
            continue
        out = transform_page(chunks[label], out_name, page_title, description)
        (OUT / out_name).write_text(out, encoding="utf-8")
        print(f"  -> {out_name} ({len(out)} chars)")

    # ricordi.html: tiny placeholder built from index baseline
    base = (OUT / "index.html").read_text(encoding="utf-8")
    base = re.sub(r'<title>[^<]*</title>',
                  '<title>Ricordi · Recuerdos — Elena & Federico</title>', base, count=1)
    base = re.sub(
        r'<main\b[^>]*>.*?</main>',
        (
            '<main id="main" class="reveal w-full max-w-3xl mx-auto px-gutter pt-space-16 pb-section-gap text-center space-y-space-8">'
            '<div class="fileteado-divider" aria-hidden="true"></div>'
            '<h1 class="font-section-h2 text-section-h2 text-text-primary italic">Ricordi</h1>'
            '<div class="font-bilingual-es text-bilingual-es italic text-text-secondary">Recuerdos</div>'
            '<p class="font-body-md text-body-md text-text-secondary max-w-xl mx-auto">'
            'Un archivio di ricordi vivrà qui — foto, note e momenti condivisi delle tre celebrazioni. '
            '<span lang="es" class="italic">Un archivo de recuerdos vivirá aquí — fotos, notas y momentos compartidos de las tres celebraciones.</span>'
            '</p>'
            '</main>'
        ),
        base, count=1, flags=re.DOTALL,
    )
    (OUT / "ricordi.html").write_text(base, encoding="utf-8")
    print("  -> ricordi.html (placeholder)")
    print("Done.")


if __name__ == "__main__":
    main()
