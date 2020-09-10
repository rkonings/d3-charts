import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'); */
    @font-face {
      font-family: 'Jost';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: local('Jost* Thin'),
      local('Jost-Thin'),
      url('./assets/fonts/jost-VF.woff') format("woff-variations"),
      url('./assets/fonts/jost-VF.woff2') format("woff2-variations"),
      url('./assets/fonts/Jost-200-Thin.woff') format('woff'),
      url('./assets/fonts/Jost-200-Thin.woff2') format('woff2');
    }


    @font-face {
      font-family: 'Jost';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Jost* Book'),
      local('Jost-Book'),
      url('./assets/fonts/jost-VF.woff') format("woff-variations"),
      url('./assets/fonts/jost-VF.woff2') format("woff2-variations"),
      url('./assets/fonts/Jost-400-Book.woff') format('woff'),
      url('./assets/fonts/Jost-400-Book.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Jost';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local('Jost* Semi'),
      local('Jost-Semi'),
      url('./assets/fonts/jost-VF.woff') format("woff-variations"),
      url('./assets/fonts/jost-VF.woff2') format("woff2-variations"),
      url('./assets/fonts/Jost-600-Semi.woff') format('woff'),
      url('./assets/fonts/Jost-600-Semi.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Jost';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: local('Jost* Heavy'),
      local('Jost-Heavy'),
      url('./assets/fonts/jost-VF.woff') format("woff-variations"),
      url('./assets/fonts/jost-VF.woff2') format("woff2-variations"),
      url('./assets/fonts/Jost-800-Heavy.woff') format('woff'),
      url('./assets/fonts/Jost-800-Heavy.woff2') format('woff2');
    }

    html, body {
       height: 100%;
       margin:0;
    }

    #root, #__next {
      height: 100%;
      width: 100%;
    }

    body {
      font-family: Jost,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        /* font-family: 'Roboto', sans-serif; */
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }


`;

export default GlobalStyle;
