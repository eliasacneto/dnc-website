import '../Methodology/Methodology.css'
import Skills from '../../assets/images/dnc-skills.png'

export function Methodology() {
  return (
    <>
      <section className='section-methodology'>
        <h1 className="methodology-title">Nossa metodologia</h1>
        <p className="methodology-subtitle">A DNC possui uma metodologia revolucionária para desenvolver o senso de resolução de problemas do aluno e seu trabalho em equipe.
          Durante nossas formações, o aluno passa por um ciclo de aprendizado que o permite aprender enquanto pratica seus conhecimentos no maior laboratório do mundo: o mercado de trabalho. Nossa metodologia é dividida nos quatro pilares abaixo:</p>

        <img className='image-skill' src={Skills} alt="skills"/>

          <div>
            <ul className='skills-list'>
              <li className='skills'>
                <div className='skills-list-item'>
                  <span className='circle-1'></span>
                  <h1 className='skills-list-title'>Aprender</h1>
                  <p className='skills-list-subtitle'>Conteúdo expositivo disponibilizado durante a semana</p>
                  </div>  
              </li>

              <li className='skills'>
                <div className='skills-list-item'>
                  <div className='circle-2'></div>
                  <h1 className='skills-list-title'>Treinar</h1>
                  <p className='skills-list-subtitle'>Encontros ao vivo com dinâmicas integradoras</p>
                </div>
              </li>

              <li className='skills'>
                <div className='skills-list-item'>
                  <span className='circle-3'></span>
                  <h1 className='skills-list-title'>Praticar</h1>
                  <p className='skills-list-subtitle'>Projeto prático em uma empresa parceira DNC</p>
                </div>  
              </li>

              <li className='skills'>
                <div className='skills-list-item'>
                  <span className='circle-4'></span>
                  <h1 className='skills-list-title'>Mentoria</h1>
                  <p className='skills-list-subtitle'>Direcionamento de carreira semanal</p>  
                </div>  
              </li>

            </ul>
          </div>
      </section>
    </>
  );
}