import { Container } from './styles'
import logotipo from '../../assets/icons/Logotipo-site.png'
import { opcoes } from '../../App'
import { Link } from 'react-router-dom'

export function Rodape(){

    return(
        <Container>
            <div id='main'>
                <img src={logotipo} alt="logo atelie girassol"/>
                <div id='navegue'>
                    <span>Navegue</span>
                    {opcoes.map((opt, key) => <Link to={`/${opt.rota}`} key={key.toString()}>{opt.etiqueta}</Link>)}
                </div>
            </div>
            <p>Feito com carinho pela <a href="https://www.empirestarltda.com">Empire Star</a></p>
        </Container>
    )
}