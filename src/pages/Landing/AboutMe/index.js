import Linkedin from './images/linkedin.svg'
import Whatsapp from './images/whatsapp.svg'
import Gmail from './images/gmail.svg'

import Logo from '../../../images/Logo1.svg'

import './AboutMe.scss';

const AboutMe = () => {

    return (
        <div className='aboutMeContainer'>
            <div className='aboutMeContent'>
                <div className="aboutMeTitle">
                    <img src={Logo} alt={"Teste de Keller"} />
                </div>
                <p>
                    Atualmente, o Teste de Keller: uma ferramenta de projetar ferramentas é uma projeto pré-incubado na Incubadora de Empresas da ESDI (UERJ). Ainda em uma etapa inicial, o projeto tem o objetivo tirar do papel uma tecnologia desenvolvida dentro da universidade e oferecê-la ao mercado nacional. O Teste de Keller é uma ferramenta de análise, focada na interação e no manuseio de produtos físicos. Ou seja, seu propósito é ajudar quem produz a enxergar os defeitos e potencialidade do produto. 
                </p>
                <p>
                    Sua utilização vai muito além da usabilidade, mais do que garantir que o produto seja livre de falhas em seu manuseio, o Teste explora a sensorialidade do uso, as necessidades e desejos do usuário, bem como seu contexto de aplicação. Acima de tudo, o Teste foi desenvolvido para ser uma ferramenta de diálogo, permitindo que diferentes pontos de vista se encontrem na solução final do produto.
                </p>
                <p>
                    Ele trabalha com três elementos centrais: 
                </p>
                <ul>
                    <li>
                        A observação da interação das mãos com os objeto, como na Ergonomia; 
                    </li>
                    <li>
                        A percepção sensorial do uso, ou seja, quais as sensações e sentimentos envolvidos no uso e, mais importante     
                    </li>
                    <li>
                        A troca de experiências entre os participantes do Teste. 
                    </li>
                </ul>
                <p>
                    Se você deseja que o seu produto seja eficiente, agradável de usar e (o mais importante) inclusivo, o Teste de Keller é a ferramenta que você precisa conhecer!
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
                </div>
            </div>
        </div>
    )
}

export default AboutMe;