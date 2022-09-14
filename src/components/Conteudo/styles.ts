import styled from 'styled-components'

export const Container = styled.section `
    display: flex;
    width: 100%;
    justify-content: center;
    #main{
        width: 70%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    #titulo {
        color: #755AB3;
        font-size: 30pt;
        text-align: center;
    }
    #conteudo{
    text-indent: 3rem;
    text-align: justify;
    height: 100%;
    width: 100%;
}
`