import styled from 'styled-components'

export const Container = styled.section `
    display: flex;
    width: 100%;
    min-height: 100vh;
    padding-bottom: 3rem;
    justify-content: center;
    #main{
        width: 60%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        @media (max-width: 500px){
            width: 90%;
        }
    }
    #titulo {
        color: #755AB3;
        font-size: 30pt;
        text-align: center;
    }
    .conteudo{
        margin: 0.5rem;
        text-indent: 3rem;
        text-align: justify;
        font-size: 1.5rem;
        height: 100%;
        width: 100%;
    }
    .apresentacao{
        margin: 0.5rem;
        text-align: center;
        font-size: 1.5rem;
        height: 100%;
        width: 100%;
    }
    #grupoMurais{
        margin-top: 3rem;
    }
`