import Logo from '../../images/Logo1.svg'

import './KellerTest.scss';

const KellerTest = () => {
    return (
        <>
            <div className="aboutMeTitle">
                <img src={Logo} alt={"Teste de Keller"} />
            </div>
            <p>
            O Teste de Keller (T.K.) trabalha com três elementos centrais: 
            </p>
            A observação da interação entre as mãos e os objetos, como na Ergonomia; 

            A percepção sensorial, as sensações e sentimentos envolvidos no uso; 

            A troca de experiências entre os participantes do Teste. 
            <p>
            Se você deseja que o seu produto seja eficiente, agradável de usar e inclusivo, o T.K. é a ferramenta que você precisa conhecer! Ele não requer conhecimentos de Design para ser utilizado e pode ser aplicado a uma ampla gama de produtos. Clique aqui para entrar em contato, saber mais e fazer um orçamento.
            </p>
            <p>
            Ao usarmos um produto com as mãos, nos atravessa um grande volume de pensamentos, sentimentos, lembranças e processos cognitivos muito internalizados, o que dificulta tanto a comunicação quanto a organização desses componentes da percepção. A descrição estática de um movimento tridimensional não dá conta da complexidade de elementos envolvidos no manuseio.
            </p>
            <p>
            Com isso em mente, o T.K. une características de outras ferramentas de pesquisa, como análise de protocolo, teste AB e grupo focal, além de perpassar diversos conceitos de Design, Usabilidade e Ergonomia. Assim, são abordadas diversas questões essenciais ao uso, sem se limitar apenas a elementos mecânicos. 
            </p>
            <p>
            Isso não significa que o T.K. seja exclusivo para designers. Desde sua concepção inicial, o objetivo era justamente que a ferramenta permitisse que qualquer um (interessado em estudar ou projetar um objeto) pudesse utilizá-la, trocando ideias com outras pessoas, com experiências distintas.
            </p>
            <p>
            Um dos pontos-chave do T.K. é o fato da análise ser sempre construída através do diálogo entre três participantes. O resultado <span style={{fontWeight: 600}}>não</span> é um meio termo entre perspectivas. Pelo contrário, a dinâmica guia os participantes a sentirem, refletirem e discutirem sobre o objeto analisado. 
            </p>
        </>
    )
}

export default KellerTest;