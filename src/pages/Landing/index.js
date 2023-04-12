import Logo from '../../images/Logo12.svg'
import Incubadora from '../../images/incubadora.png'
import { useNavigate } from 'react-router-dom'

import './Landing.scss';

const Landing = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="aboutMeTitle">
                <img src={Logo} alt={"Teste de Keller"} className="logo"/>
                {window.innerWidth > 450 ? <img src={Incubadora} alt={"Incubadora"} width="auto" height="100px"/> : <></>}
            </div>
            <p>    
                Atualmente, o <span className="kellerTest">Teste de Keller: uma ferramenta de projetar ferramentas (T.K.)</span> é um projeto incubado na <a href="https://www.esdi.uerj.br/design/incubadora/apresentacao" target="_blank" rel="noreferrer">Incubadora de Empresas da ESDI (UERJ)</a>. Ainda em uma etapa inicial, o projeto tem o objetivo tirar do papel um tecnologia desenvolvida por 7 anos dentro da universidade e oferecê-la ao mercado nacional. 
            </p>
            <p>    
                O <span className="kellerTest">T.K.</span> é uma ferramenta de análise, focada na interação e no manuseio de produtos físicos. Ou seja, seu propósito é ajudar quem produz a enxergar os defeitos e potencialidade do produto. Sua utilização vai muito além da usabilidade. 
            </p>
            <p>
                Mais do que garantir que o produto seja livre de falhas em seu manuseio, o <span className="kellerTest">T.K.</span> explora a sensorialidade do uso, as necessidades e desejos do usuário, bem como seu contexto de aplicação. Acima de tudo, o <span className="kellerTest">T.K.</span> foi desenvolvido para ser uma ferramenta de diálogo, permitindo que diferentes pontos de vista se encontrem na solução final do produto. 
            </p>
            <div className="buttonContainer">
                <div className="button" onClick={() => navigate("/sobreMim")}>
                    <div className="icon" ariahidden={true}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m21.5,4h-6.5v-1c0-1.654-1.346-3-3-3s-3,1.346-3,3v1H2.5c-1.378,0-2.5,1.121-2.5,2.5v17.5h24V6.5c0-1.379-1.122-2.5-2.5-2.5Zm-11.5-1c0-1.103.897-2,2-2s2,.897,2,2v4h-4V3Zm13,20H1V6.5c0-.827.673-1.5,1.5-1.5h6.5v3h6v-3h6.5c.827,0,1.5.673,1.5,1.5v16.5Zm-6-3.5v1.5h-1v-1.5c0-.827-.673-1.5-1.5-1.5h-5c-.827,0-1.5.673-1.5,1.5v1.5h-1v-1.5c0-1.379,1.122-2.5,2.5-2.5h5c1.378,0,2.5,1.121,2.5,2.5Zm-5-3.5c1.654,0,3-1.346,3-3s-1.346-3-3-3-3,1.346-3,3,1.346,3,3,3Zm0-5c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2Z"/></svg>
                    </div>
                    <div className="text">
                        Sobre Mim
                    </div>
                </div>
                <div className="button" onClick={() => navigate("/comoFunciona")}>
                    <div className="icon" ariahidden={true}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/></svg>
                    </div>
                    <div className="text">
                        Sobre o Teste
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;