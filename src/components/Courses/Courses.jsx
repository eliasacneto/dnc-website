import '../Courses/Courses.css'

export function Courses() {
  return (
    <div className="section-course">
      <div className='left-course-side'>
        <div className="free-course">
          <h2 className='course-title'>Cursos gratuitos<br></br> disponíveis</h2>
          <p className='course-desc'>Obtenha acesso ilimitado aos cursos gratuitos da<br></br> DNC, estruturados para você dar os primeiros<br></br> passos na sua carreira.</p>
          <button className="course-register">Crie sua conta gratuita</button>

        </div>

      </div>

      <div className='right-course-side'>

        <div className="card-carousel">
          <ul className='course-carousel'>
            <li className='course-carousel-item'>Carousel 1</li>
            <li className='course-carousel-item'>Carousel 2</li>
            <li className='course-carousel-item'>Carousel 3</li>

          </ul>

        </div>

      </div>

    </div>
  );
}