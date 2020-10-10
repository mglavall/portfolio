import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
  tokens: {
    fonts: {
      $system: 'system-ui',
    },
    colors: {
      $hiContrast: 'hsl(206,10%,5%)',
      $loContrast: 'white',
    },
    fontSizes: {
      $1: '13px',
      $2: '15px',
      $3: '17px',
    },
  }
});