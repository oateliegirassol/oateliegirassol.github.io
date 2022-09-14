import { Container } from './styles'
import instagram from '../../assets/icons/instagram.png'
import logotipo from '../../assets/icons/Logotipo-site.png'
import { opcoes } from '../../App'
import { Link } from 'react-router-dom'


export function Cabecalho(){

    return(
        <Container>
            <img src={logotipo} alt="logo" id="logo"/>
            {opcoes.map(op => <Link to={`/${op.rota}`}>{op.etiqueta}</Link>)}
            <a href="https://www.instagram.com/o.ateliegirassol/">
                <img src={instagram} alt="logo do instagram" id="instagram"/>
            </a>
        </Container>
    )
}