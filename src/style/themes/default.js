/* eslint-disable */
import { colorMode, cursorMode } from '../../utils/'

const px = d => {
  return `${d}px`;
};

const s = d => {
  return `${d}s`;
};

const defaultTheme = {
  colors: {
    text: '#000',
    grey: '#E7E7E7',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f9',
    gray: '#dddddf',
    highlight: 'hsla(205, 100%, 40%, 0.125)',
  },
  color: colorMode(['#000', '#E7E7E7']),
  fonts: {
    body: 'Mier A Regular, sans-serif',
    headline: 'Mier A Bold, sans-serif',
  },
  cursor: {
    back: cursorMode(["public/img/ui/btn-back-white.png", "public/img/ui/btn-back.png"]),
    next: cursorMode(["public/img/ui/btn-next-white.png", "public/img/ui/btn-next.png"]),
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96].map(px),
  letterSpacing: [.125,.25,.5,1,2,3].map(px),
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map(px),
  sizes: {
    mobile: "580px",
    tablet: "768px",
    desktop: "1080px",
    hd: "1920",
  },
  times: [.128, .256, .512].map(s),
  radii: {
    default: 4,
    circle: 99999,
  },
  transition: {
    s: 'all .125s ease-in-out'
  }
};

export default defaultTheme;
