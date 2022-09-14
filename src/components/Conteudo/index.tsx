import { Container } from './styles'

interface ConteudoProps{
    pagina:string
}

export function Conteudo({pagina}:ConteudoProps){

    return(
        <Container>
            {
                pagina === 'nosso_trabalho'? 
                <div id='main'>
                    <h1 id="titulo">Nosso Trabalho</h1>
                    <p id="conteudo">O Ateliê Girassol tem como objetivo contribuir com a aprendizagem dos alunos, orientação e formação dos professores e funcionários das escola e enriquecimento da documentação pedagógica. As práticas pedagógicas e documentação inspiradas em Lóris Malaguzzi visa trazer a pesquisa e vivências que coloquem a criança como protagonista de sua aprendizagem e o adulto como seu mediador. Tendo o brincar e o lúdico como pontos principais para a aprendizagem e o desenvolvimento do aluno da educação infantil, pois contribuem para o desenvolvimento pessoal e social da criança de maneira significativa e prazerosa. Alguns dos recursos que utilizamos são: Fotos e vídeos, Mini história, O brincar heurístico, Argila, Exploração de recursos naturais como pedras, folhas, preparação de tintas naturais e outros. Estamos a disposição para marcar uma reunião e apresentar nossa proposta completa. Desde já agradecemos!</p>
                </div> 
                : 
                pagina === 'o_atelie'? 
                <div id='main'>
                    <h1 id="titulo">O Ateliê</h1>
                    <p id="conteudo">O que vem a sua cabeça quando pensa na palavra "Ateliê"??? A maioria das pessoas irá responder "Arte" ou algo relacionado. Porém quando usamos "Ateliê"  estamos indicando que este é um lugar de criação, de novo, único. Girassol a primeira vista parece ser uma flor, porém é uma inflorescência em que as flores estão muito próximas de si e inseridas em um eixo comum. O girassol tem uma lista grande de como pode ser utilizado, dele se extraí óleo, biocombustível, mel, adubo, entre outras coisas. Juntamos tudo isso por acreditar que cada indivíduo é único e especial, indiferente se é "neurotípico" ou "atípico" ,  cada um aprende de um um jeito e merece um Ateliê confeccionando um plano educacional  especial só pra ele! Acreditamos na inclusão verdadeira, assim quando todos nós ficamos bem juntinhos podemos aprender muito mais uns com os outros com nossa imensa diversidade de habilidades e competências, unidos no eixo comum chamado RESPEITO. Agora me conta o que você achou!</p>
                </div> 
                : 
                pagina === 'contato'? 
                <div id='main'>
                    <h1 id="titulo">Contato</h1>
                    <p id="conteudo">Tel: (11) 94125-5770</p>
                </div> 
                : 
                <div id='main'>
                    <h1 id="titulo">Seja bem-vindo!</h1>
                    <p id="conteudo">Nosso site ainda está em construção, mas fique à vontade para navegar!</p>
                </div>
            }
        </Container>
    )
}