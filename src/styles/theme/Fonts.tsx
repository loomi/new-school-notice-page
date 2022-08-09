import { css, Global } from '@emotion/react';

const globalFonts = css`
  @import url('https://fonts.googleapis.com/css2?family=MuseoModerno&display=swap');

  @font-face {
    font-family: 'MuseoModerno', cursive;
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url(/fonts/inter-var-latin.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

export const Fonts = () => <Global styles={globalFonts} />;
