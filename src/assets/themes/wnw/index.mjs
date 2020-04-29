const tags = `html,
h1, h2, h3,
div, p, span,
img,
ul,
li,
.article,
.section,
.header,
.footer,
.main`

const blocks = `.article,
.header,
.footer,
.section`

export const vars = {
  black: '#010101',
  white: '#FEFEFE',
  textColor: '#4527A0',
  backgroundColor: '#010101',
  maxWidth: '1200px',
  fill_1: '#4527A0',
  fill_2: '#8F7DC6',
  subtleColor: '#9c9788',
  lessSubtleColor: '#666666',

  link: {
    dark: '#4527A0',
    light: '#4527A0',
  },
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    '::selection': {
      backgroundColor: v.textColor,
      color: v.backgroundColor,
      textShadow: 'none',
    },

    body: {
      color: v.textColor,
      fontFamily: [
        '"Ubuntu Condensed"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Oxygen-Sans',
        'Ubuntu',
        'Cantarell',
        '"Helvetica Neue"',
        'sans-serif',
      ].join(','),
      fontSize: '19px',
      lineHeight: '1.2',
    },
    'h1, h2': {
      margin: '0 0 0.5em',
    },
    [tags]: {
      background: 'transparent',
      border: 0,
      boxSizing: 'border-box',
      fontWeight: 400,
      margin: 0,
      outline: 0,
      padding: 0,
      verticalAlign: 'baseline',
    },

    [blocks]: {
      display: 'block',
    },

    a: {
      color: v.subtleColor,
    },
    ul: {
      listStyle: 'none',
    },
    '*': {
      boxSizing: 'border-box',
    },

    '.Wrapper': {
      margin: '1em auto 0',
      width: '90%',
    },

    '.Page': {
      header: {
        margin: '0 0 .5em',
      },

      h1: {
        margin: '1em 0 .2em',
      },
    },

    // html header tags
    'h1, h2, h3, h4, h5': {
      margin: '1em 0 .2em',
    },
    h1: {
      fontSize: '1.2em',
      fontWeight: 600,
    },
    'h2, h3': {
      fontSize: '1em',
    },

    img: {
      maxHeight: '100%',
      maxWidth: '100%',
    },
    '#Magic': {
      lineHeight: '1.2',
    },
    '.Wrapper': {
      maxWidth: v.maxWidth,
    },
    '.animated': {
      animationDelay: '300ms',
      animationDuration: '400ms',
      animationName: 'fade-out',
      animationTimingFunction: 'linear',
    },
    a: {
      color: v.textColor,
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
        color: v.subtleColor,
      },

      '&.button': {
        backgroundColor: v.textColor,
        color: v.white,
        display: 'block',
        padding: '.5em',
        margin: '.5em',
      },
    },
    p: {
      margin: '1em 0',
    },

    '.annotated p': {
      margin: 0,
    },

    'ul.nav': {
      li: {
        display: 'block',
      },
    },

    '.Footer': {
      padding: '0 0 1em',
      color: v.subtleColor,
      textAlign: 'center',
      margin: '2em 0 0',
    },

    '.Credits': {
      a: {
        color: v.link.dark,

        '&:hover': {
          color: v.subtleColor,
        },
      },
    },

    // utilities
    '.block': {
      margin: '2em 0',
    },

    '.hex__container': {
      position: 'relative',
    },

    '.hex': {
      display: 'block',
      margin: '0 auto',
      position: 'relative',
      minHeight: '250px',
      minWidth: '250px',
      maxWidth: '400px',
      maxHeight: '400px',
      width: '90vw',
      height: '90vw',

      '&.big': {
        maxHeight: '500px',
        maxWidth: '500px',
      },

      '.hex__content': {
        position: 'relative',
        textAlign: 'center',
        width: '60%',
        height: '60%',
        top: '20%',
        margin: '0 auto',

        '&.WNWLogo': {
          top: '10%',
        },

        '&.annotated': {
          color: v.subtleColor,

          p: {
            margin: '.2em 0',
          },
          h2: {
            margin: '.3em 0',
            fontWeight: 600,
          },
        },
      },
    },

    '.anim': {
      animationDuration: '700ms',
      animationFillMode: 'forwards',
      animationIterationCount: 1,
      animationTimingFunction: 'ease-out',
    },

    '.add': {
      display: 'none',
    },

    '@media screen and (min-width: 600px)': {
      '.hex': {
        '.hex__content': {
          top: '20%',
        },
      },
    },
  }
}
