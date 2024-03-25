import { Container } from "./styles"

import logoGoverno from "../../assets/img/governo_pr.png"
import logoPrefeitura from "../../assets/img/prefeitura.png"
import logoSenac from "../../assets/img/senac.png"
import logoSecultur from "../../assets/img/secultur.png"
import { FaFacebook, FaInstagram } from "react-icons/fa"

export function Footer() {
  return (
    <Container>
      <div className="parceiros">
        <a href="https://www.parana.pr.gov.br/">
          <img src={logoGoverno} alt="" />
        </a>

        <a href="https://www.paranagua.pr.gov.br/">
          <img src={logoPrefeitura} alt="" />
        </a>

        <a href="https://www.pr.senac.br/principal/index.asp">
          <img src={logoSenac} alt="" />
        </a>

        <a href="https://secultur.paranagua.pr.gov.br/">
          <img src={logoSecultur} alt="" />
        </a>
      </div>

      <div className="text-container">
        <div className="atendimento">
          <p>Para mais informações Secultur</p>
          <p>Secretaria Municipal de Cultura e Turismo</p>
          <h3>Horário de Atendimento:</h3>
          <p>Segunda-feira a Sexta-feira</p>
          <p>08:00 às 18:00</p>
        </div>

        <div className="local">
          <h3>Localização:</h3>
          <p>Av. Arthur de Abreu, 44 - Costeira,</p>
          <p>CEP: 83203-210 Paranaguá - PR,</p>
        </div>
      </div>

      <div className="social">
        <a href="https://www.instagram.com">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
      </div>
    </Container>
  )
}
