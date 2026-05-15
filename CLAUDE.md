You're a web developer tasked with building a website following thhe html files already created. Also follow this specification:


### Design System

Infer the DEsign system from the actual html files. Once detected , update this part of the file.



### Repo Architecture
Please follow this structure, but feel free to change it if you have a better alternative:

landing-page/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── sections/
│   ├── styles/
│   ├── lib/
│   └── content/
│
├── tests/
│
├── .github/
│   └── workflows/
│
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── eslint.config.js
├── prettier.config.js
├── .env.example
├── README.md
└── Dockerfile

### Scripting Style Guide
When  writing in the following programming languges, follow these guidelines:
- Python: guidelines found in https://google.github.io/styleguide/pyguide.html
- JavaScript: guidelines found in https://google.github.io/styleguide/jsguide.html
- HTML/CSS: guidelines found in https://google.github.io/styleguide/htmlcssguide.html
- C++: guidelines found in https://google.github.io/styleguide/cppguide.html
- Markdown: guidelines found in https://google.github.io/styleguide/docguide/style.html
- JSON: guidelines found in https://google.github.io/styleguide/jsoncstyleguide.xml


### CHECKS:
- Run a check with this claude skill : npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
- Run a check with this claude skill : https://www.skills.sh/anthropics/skills/frontend-design