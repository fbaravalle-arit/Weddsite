import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#F5F1E8',
          color: '#8B3A1E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 96,
          fontFamily: 'serif',
          fontStyle: 'italic',
          letterSpacing: -2,
        }}
      >
        E&amp;F
      </div>
    ),
    size,
  );
}
