import styled from 'styled-components'

export const Container = styled.footer `
    img{
        max-width: 18rem;
        border-radius: 30px;
    }
    div{
        width: 100%;
        display: flex;
        align-items: center;
    }
    span{
        font-size: 1.25rem;
    }
    #esq{
        flex-direction: row;
        span{
            padding-left: 3rem;
        }
    }
    #dir{
        flex-direction: row-reverse;
        span{
            padding-right: 3rem;
        }
    }
    #cen{
        justify-content: center;
    }
`