import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { colorMode } from '../../utils/'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  html {
    background: ${p => p.theme.color[1]};
    color: ${p => p.theme.color[0]};
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[1]};
  }
`;

export default GlobalStyle;
