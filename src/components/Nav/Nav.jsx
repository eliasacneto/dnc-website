import Logo   from '../../assets/images/dnc-logo.png'
import '../Nav/Nav.css'

export function Nav(){
  return(
    <header>
      <nav> 
          <img src={Logo} alt='dnc-image'/>
          <div className='menu-links'>
            <ul className='menu-links-list'>
              <li className='menu-links-list-item'>Para alunos</li>
              <li className='menu-links-list-item'>Para empresas</li>
              <li className='menu-links-list-item'>Falar com a dnc</li>
              <li className='menu-links-list-item'>Conteúdo</li>
          </ul>
          </div>
          <div className='btn-group'>
            <a className='signin'href='#' target='_blank'>Entrar</a>
            <a className='signup' href='#' target='_blank'>Criar conta</a>
          </div>
      </nav>
    </header>
  );
}