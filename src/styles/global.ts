import { createGlobalStyle } from 'styled-components'

interface GlobalStyleProps{
    tema: 'claro'|'escuro'
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    :root{
        --primary-color: #FFDE00;
        --primary-color-hover: #FFF194;
        --secundary-color: #000000;
        --secundary-color-hover: #353b48;

        --color-white-primary: #FFFFFF;
        --color-white-secondary: #F4F4F5;
        --color-grey-primary: #D4D4D8;
        --color-grey-secondary: #F5F5F5;
        --color-black-primary: #353b48;
    }
    html{
        margin: 0;
        padding: 0;
    }
    body{
        background: ${props => props.tema === 'claro'? "var(--color-white-primary)" : "var(--color-black-primary)"};
        max-width: 100vw;
        overflow-x: hidden;
    }
    /* ===== Scrollbar CSS ===== */
  

`
export default GlobalStyle