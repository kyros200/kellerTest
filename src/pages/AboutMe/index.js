import Linkedin from './images/linkedin.svg'
import Whatsapp from './images/whatsapp.svg'
import Gmail from './images/gmail.svg'
import Lattes from './images/lattes.svg'

import Lu from './images/lu.jpg'

import { useNavigate } from 'react-router-dom'
import './AboutMe.scss';

const AboutMe = () => {
    const navigate = useNavigate()
    return (
        <div className="aboutMeContainer">
            <div className="left">
                <img src={Lu} alt="Luciana Keller" />
            </div>
            <div className="right">
                <p>
                Doutora e mestra em Design pela ESDI/UERJ, graduada em Desenho Industrial/Projeto de Produto, Luciana Keller é designer, pesquisadora e empreendedora. Estuda desde 2014 o uso das mãos, instrumentos manuais e a percepção somatossensorial aplicada ao desenvolvimento de projeto de produto.
                </p>
                <div className="channels">
                    <a href="https://wa.me/5521991498210" target="_blank" rel="noreferrer" >
                        <img src={Whatsapp} alt="Whatsapp" />
                    </a>
                    <a href="mailto:keller.luciana@gmail.com" target="_blank" rel="noreferrer" >
                        <img src={Gmail} alt="Gmail" />
                    </a>
                    <a href="https://www.linkedin.com/in/luciana-keller-910abb71/" target="_blank" rel="noreferrer" >
                        <img src={Linkedin} alt="Linkedin" />
                    </a>
                    <a href="http://lattes.cnpq.br/7812208570148467" target="_blank" rel="noreferrer" >
                        <img src={Lattes} alt="Lattes" />
                    </a>
                </div>
                <div className="buttonContainer">
                    <div className="button" onClick={() => navigate("/")}>
                        <div className="text">
                            Voltar
                        </div>
                    </div>
                    <div className="button" onClick={() => navigate("/comoFunciona")}>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/></svg>
                        </div>
                        <div className="text">
                            Sobre o Teste
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;