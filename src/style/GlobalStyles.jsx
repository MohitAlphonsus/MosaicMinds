import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary-1:#556652;
    --color-primary-2:#F68129;

    --color-secondary-dark:#2D322B;
    --color-secondary-dark-2:#494F46;

    --color-neutral-white : #FFFFFF;
    --color-neutral-black : #242424;
    --color-neutral-gray : #F1F1F1;

    --gradient-opaque-bg:linear-gradient(to bottom, rgb(0,0,0), rgba(19,19,19,0)  )
    
  }

  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  img {
    display:block;
    width:100%;
    }
`;

export default GlobalStyles;
