import Logo from '../../assets/images/dnc-logo.png'
import '../Footer/Footer.css'

export function Footer() {
  return (
    <footer>

      <div className='footer-menu'>
      <div className='first-section'>
        <img className='footer-img' src={Logo} alt='logo dnc' />
        <p className='footer-text-copy'>© 2023 DTC Treinamentos & Consultoria LTDA | CNPJ: 27.995.577/0001-37 | R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>


      <div className='footer-text-copy'>
        Contato Suporte: (12) 99600-6645 <br></br>
        E-mail: <a href='#' className='send-email'>suporte@escoladnc.com.br</a>
      </div>

      </div>

      <div className='second-section'>
        <h2 className='footer-title'>Escolas</h2>
        <ul>
          <li className='footer-text'>Formação em Marketing</li>
          <li className='footer-text'>Formação em Dados</li>
          <li className='footer-text'>Formação em Projetos</li>
          <li className='footer-text'>Formação em Produto</li>
          <li className='footer-text'>Formação em TecnologiaMarketing</li>

        </ul>
      </div>

      <div className='third-section'>
        <h2 className='footer-title'>Sobre a DNC</h2>
        <ul>
          <li className='footer-text'>História</li>
          <li className='footer-text'>Missão e Valores</li>
          <li className='footer-text'>Trabalhe Conosco</li>
          <li className='footer-text'>Conteúdo Gratuito</li>
          <li className='footer-text'>Assine Nossa Newsletter</li>
          <li className='footer-text'>Relatório de Empregabilidade</li>

        </ul>
      </div>

      <div className='fourth-section'>
        <div>
          <h2 className='footer-title'>Para Empresas</h2>
          <ul>
            <li className='footer-text'>Jumpy</li>
          </ul>
        </div>
        <br></br>
        <div>
          <h2 className='footer-title'>Para Parceiro</h2>
          <ul>
            <li className='footer-text'>Torne-se um Parceiro</li>
          </ul>
        </div>
      </div>

      </div>

      
      <hr></hr>

      <div >
        <ul className='footer-submenu'>
          <li className='footer-text-submenu'>Termos de uso</li>
          <li className='footer-text-submenu'>|</li>
          <li className='footer-text-submenu'>Política de Privacidade</li>
        </ul>
      </div>


    </footer>
  );
}