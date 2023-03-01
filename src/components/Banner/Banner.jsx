import '../Banner/Banner.css'
import '../Nav/Nav.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GooglePlay from '../../assets/images/googleplay.png'
import AppleStore from '../../assets/images/applestore.png'
import AppMock from '../../assets/images/app-mock.png'
import Tower from '../../assets/images/element-tower.png'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export function Banner() {
  return (
    <main>
      <div className="side-text">
        <h1 className="title-text">O aplicativo da <br></br><span className="highlight">Escola DNC</span><br></br>chegou! </h1>

        <ul className='item-list'>
          <li className='item-list-check'><FontAwesomeIcon icon={faCircleCheck} /> Baixe suas aulas</li>
          <li className='item-list-check'><FontAwesomeIcon icon={faCircleCheck} /> Assista quando e onde quiser</li>
          <li className='item-list-check'><FontAwesomeIcon icon={faCircleCheck} /> Acesse rapidamente seus certificados</li>
        </ul>

        <p className="subtitle-text">Inscreva-se agora mesmo e comece a estudar através dos <br></br>nossos cursos gratuitos disponíveis!</p>

        <form className="form-banner">
          <input className="input-email" type="email" name="email" placeholder="Email" required />
          <button className="btn-register" type="submit"> Criar minha conta</button>
        </form>
      </div>


      <div className="side-image">
        <img className="image-tower" src={Tower} alt=""/>
        <img className="image-mock" src={AppMock} alt="" />
        <p className="download-text">Clique para baixar</p>

        <div className='stores'>
          <a href="#" target="_blank">
            <img src={GooglePlay} alt="google play icon"/>
          </a>
          <a href="#" target="_blank">
            <img src={AppleStore} alt="apple store icon"/>
          </a>
        </div>

      </div>


    </main>
  );
}