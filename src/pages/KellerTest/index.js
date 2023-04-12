import Logo from '../../images/Logo12.svg'
import { useNavigate } from 'react-router-dom'

import Imagem3 from './images/Imagem3.png'
import Imagem4 from './images/Imagem4.png'
import Imagem6 from './images/Imagem6.png'
import Imagem7 from './images/Imagem7.png'

import Instigador from './images/Instigador.svg'
import Usuario from './images/Usuario.svg'
import Observador from './images/Observador.svg'

import './KellerTest.scss';

const KellerTest = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="aboutMeTitle">
                <img src={Logo} alt={"Teste de Keller"} className="logo"/>
            </div>
            {/* <p style={{textAlign: "center"}}>
                O Teste de Keller (<span className="kellerTest">T.K.</span>) trabalha com três elementos centrais: 
            </p> */}
            <p>
                Se você deseja que o seu produto seja eficiente, agradável de usar e inclusivo, o <span className="kellerTest">T.K.</span> é a ferramenta que você precisa conhecer! Ele não requer conhecimentos de Design para ser utilizado e pode ser aplicado a uma ampla gama de produtos.
            </p>
            <img src={Imagem7} alt="" />
            <p>
                Ao usarmos um produto com as mãos, nos atravessa um grande volume de pensamentos, sentimentos, lembranças e processos cognitivos muito internalizados, o que dificulta tanto a comunicação quanto a organização desses componentes da percepção. A descrição estática de um movimento tridimensional não dá conta da complexidade de elementos envolvidos no manuseio.
            </p>
            <img src={Imagem3} alt="" />
            <p>
                Com isso em mente, o <span className="kellerTest">T.K.</span> une características de outras ferramentas de pesquisa, como análise de protocolo, teste AB e grupo focal, além de perpassar diversos conceitos de Design, Usabilidade e Ergonomia. Assim, são abordadas diversas questões essenciais ao uso, sem se limitar apenas a elementos mecânicos. 
            </p>
            <img src={Imagem4} alt="" />
            <p>
                Isso não significa que o <span className="kellerTest">T.K.</span> seja exclusivo para designers. Desde sua concepção inicial, o objetivo era justamente que a ferramenta permitisse que qualquer um (interessado em estudar ou projetar um objeto) pudesse utilizá-la, trocando ideias com outras pessoas, com experiências distintas.
            </p>
            <img src={Imagem6} alt="" />
            <p>
                Um dos pontos-chave do <span className="kellerTest">T.K.</span> é o fato da análise ser sempre construída através do diálogo entre três participantes. O resultado <span style={{fontWeight: 600}}>não</span> é um meio termo entre perspectivas. Pelo contrário, a dinâmica guia os participantes a sentirem, refletirem e discutirem sobre o objeto analisado.
            </p>
            <p>
                O Teste de Keller (T.K.) funciona com três participantes, que assumem cada um uma função, ou papel. São eles:
            </p>

            <div className="roleContainer">
                <div className="role">
                    <div className="icon">
                        <img src={Usuario} alt={"Usuário"} />
                    </div>
                    <div className="title">
                    Usuário
                    </div>
                    <div className="subText">
                    Focado nas sensações e impressões do uso, tem por objetivo interagir com os objetos e expor seus pensamentos em voz alta.
                    </div>
                </div>
                <div className="role">
                    <div className="icon">
                        <img src={Instigador} alt={"Instigador"} />
                    </div>
                    <div className="title">
                    Instigador
                    </div>
                    <div className="subText">
                    Tem a função de não deixar o Usuário se perder. Seu objetivo é instigar o Usuário a manter a fala constante, ficando atento às impressões gerais sobre os objetos.
                    </div>
                </div>
                <div className="role">
                    <div className="icon">
                        <img src={Observador} alt={"Observador"} />
                    </div>
                    <div className="title">
                    Observador
                    </div>
                    <div className="subText">
                    Como o nome sugere, seu objetivo é observar atentamente a interação entre as mãos e o objeto, buscando por falhas na sua funcionalidade.
                    </div>
                </div>
            </div>
            
            <div className="buttonContainer">
                <div className="button" onClick={() => navigate("/")}>
                    <div className="text">
                        Voltar
                    </div>
                </div>
                <div className="button" onClick={() => navigate("/sobreMim")}>
                    <div className="icon" ariahidden={true}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m21.5,4h-6.5v-1c0-1.654-1.346-3-3-3s-3,1.346-3,3v1H2.5c-1.378,0-2.5,1.121-2.5,2.5v17.5h24V6.5c0-1.379-1.122-2.5-2.5-2.5Zm-11.5-1c0-1.103.897-2,2-2s2,.897,2,2v4h-4V3Zm13,20H1V6.5c0-.827.673-1.5,1.5-1.5h6.5v3h6v-3h6.5c.827,0,1.5.673,1.5,1.5v16.5Zm-6-3.5v1.5h-1v-1.5c0-.827-.673-1.5-1.5-1.5h-5c-.827,0-1.5.673-1.5,1.5v1.5h-1v-1.5c0-1.379,1.122-2.5,2.5-2.5h5c1.378,0,2.5,1.121,2.5,2.5Zm-5-3.5c1.654,0,3-1.346,3-3s-1.346-3-3-3-3,1.346-3,3,1.346,3,3,3Zm0-5c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2Z"/></svg>
                    </div>
                    <div className="text">
                        Sobre Mim
                    </div>
                </div>
            </div>
        </>
    )
}

export default KellerTest;