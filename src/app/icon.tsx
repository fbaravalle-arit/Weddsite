import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
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
          fontSize: 36,
          fontFamily: 'serif',
          fontStyle: 'italic',
          letterSpacing: -1,
        }}
      >
        E&amp;F
      </div>
    ),
    size,
  );
}
