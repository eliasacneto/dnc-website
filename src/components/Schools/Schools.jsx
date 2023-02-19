import '../Schools/Schools.css';
import FormacaoMkt from '../../assets/images/formacao/formacao-mkt.svg'
import FormacaoDados from '../../assets/images/formacao/formacao-dados.svg'
import FormacaoProjetos from '../../assets/images/formacao/formacao-projetos.svg'
import FormacaoProduto from '../../assets/images/formacao/formacao-produto.webp'
import FormacaoTech from '../../assets/images/formacao/formacao-tech.webp'

export function Schools() {
  return (
    <div className='section-schools'>
      <div class='section-texts'>
        <h2 className='section-title'>Escolas</h2>
        <p className='section-desc'>Conheça as formações que mudam vidas, negócios e ajudam a economia do país por meio da<br></br> transformação de talentos.</p>
        <p className='section-desc'>Cobrimos a grande defasagem de profissionais de alta qualificação nas trilhas de marketing,<br></br> ciência de dados, gestão de projetos, produto e tecnologia.</p>

        <div className='formacao-cards'>

          <div className='card-item'>
            <img className='form-image' src={FormacaoMkt} alt='Formação Marketing' />
            <p className='form-desc'>Aprenda a desenvolver estratégias de ponta a ponta para alavancar o faturamento de um negócio com os melhores profissionais da área comercial.</p>
            <span className='work-time'>370h | 15 certificados</span>
            <button className='see-more'>Saiba mais</button>
          </div>

          <div className='card-item'>
            <img className='form-image' src={FormacaoDados} alt='Formação Dados' />
            <p className='form-desc'>Gere insights para o negócio ao construir modelos de Machine Learning que auxiliarão na tomada de decisão, sendo o Cientista de Dados mais completo do mercado.</p>
            <span className='work-time'>451h | 15 certificados</span>
            <button className='see-more'>Saiba mais</button>
          </div>

          <div className='card-item'>
            <img className='form-image' src={FormacaoProjetos} alt='Formação Projetos' />
            <p className='form-desc'>Gerencie projetos de melhoria contínua ao realizar análises estatísticas e otimizar processos com auxílio de ferramentas como o Lean Six Sigma e o Scrum.</p>
            <span className='work-time'>322h | 13 certificados</span>
            <button className='see-more'>Saiba mais</button>
          </div>

          <div className='card-item'>
            <img className='form-image' src={FormacaoProduto} alt='Formação Produto' />
            <p className='form-desc'>Construa um produto digital com alto potencial de escalabilidade, unindo conhecimentos de experiência do usuário, senso de negócios, marketing, análise de dados e tecnologia.</p>
            <span className='work-time'>385h | 13 certificados</span>
            <button className='see-more'>Saiba mais</button>
          </div>

          <div className='card-item'>
            <img className='form-image' src={FormacaoTech} alt='Formação Tech' />
            <p className='form-desc'>Construa sistemas completos com Javascript, dominando front e back end, modelagem de bancos de dados e testes unitários, se tornando um Desenvolvedor Full-Stack de alta performance</p>
            <span className='work-time'>520h | 13 certificados</span>
            <button className='see-more'>Saiba mais</button>
          </div>

        </div>
      </div>

    </div>
  );
}