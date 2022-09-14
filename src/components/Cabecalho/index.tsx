import instagram from '../../assets/icons/instagram.png'
import logotipo from '../../assets/icons/Logotipo-site.png'
import menu from '../../assets/icons/menu.svg'

import { Container } from './styles'
import { opcoes } from '../../App'
import { Link } from 'react-router-dom'

interface CabecalhoProps{
    funcaoCabecalho: () => void,
    estadoCabecalho: boolean,
}

export function Cabecalho({funcaoCabecalho, estadoCabecalho}:CabecalhoProps){
    
    var largura = window.screen.width

    return(
        <Container>
            
            {largura > 501? 
            <>
                <img src={logotipo} alt="logo" id="logo"/>
                {opcoes.map(op => <Link to={`/${op.rota}`}>{op.etiqueta}</Link>)}
                <a href="https://www.instagram.com/o.ateliegirassol/">
                    <img src={instagram} alt="logo do instagram" id="instagram"/>
                </a>
            </> 
            :
            <div id='menu_container'>
                <div id='grupo_logo' >
                    <div id='menu_icon' onClick={()=>funcaoCabecalho()}><img  src={menu} alt="ícone de menu"/></div>
                    <img src={logotipo} alt="logo" id="logo"/>
                </div>
                <div id="menu">
                    
                    {estadoCabecalho === true?

                        <div id='barra_lateral'>
                            
                            {opcoes.map((option, key) => <Link to={`/${option.rota}`} onClick={() => funcaoCabecalho()} key={key.toString()}>{option.etiqueta}</Link>)}
                            <a href="https://www.instagram.com/o.ateliegirassol/">
                                <img src={instagram} alt="logo do instagram" id="instagram"/>
                            </a>
                        </div> 
                    : 
                        <>
                        
                        </>
                    }
                </div>
                
            </div>
            }
        </Container>
    )
}