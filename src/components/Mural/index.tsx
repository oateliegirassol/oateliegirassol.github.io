import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles'

interface MuralProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    img: any;
    alt?: string;
    alinhamento?: 'esq'|'dir'|'cen'
    children?:ReactNode
}

export function Mural({img, alt, alinhamento, children}:MuralProps){

    return(
        <Container>
            <div id={alinhamento? alinhamento : 'esq'}>
                <img src={img} alt={alt} />
                <span id="paragrafo">
                    {children}
                </span>
            </div>
            
        </Container>
    )
}