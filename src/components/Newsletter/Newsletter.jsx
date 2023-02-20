import '../Newsletter/Newsletter.css'
import Element from '../../assets/images/element.png'

export function Newsletter(){
  return(<div className='newsletter'>
    <h2 className='newsletter-title'>Seja um aluno DNC</h2>
    <p className='newsletter-description'>Comece a estudar gratuitamente na DNC. Cursos como Excel intermediário, Introdução a Gerenciamento de Projetos, Python e Inside Sales. Deixe seu e-mail abaixo e acesse conteúdos gratuitos exclusivos!</p>
    <form className='newsletter-form'>
      <input className='input-email-form' type="email" name='email' placeholder='Email' required />
      <button className='button-register'>Criar minha conta</button>
    </form>
    <div className='element'>
    <img className='element-img' src={Element} alt='element' />
    </div>

  </div>)
}