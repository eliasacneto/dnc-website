import Logo   from '../../assets/images/dnc-logo.png'
import '../Nav/Nav.css'

export function Nav(){
  return(
<nav> 
    <img src={Logo} alt='dnc-image'/>
    <ul>
      <li>Para alunos</li>
      <li>Para empresas</li>
      <li>Falar com a dnc</li>
      <li>Conteúdo</li>
    </ul>
    <div class='btn-group'>
      <a class='signin'href='#' target='_blank'>Entrar</a>
      <a class='signup' href='#' target='_blank'>Criar conta</a>
    </div>
</nav>
  );
}