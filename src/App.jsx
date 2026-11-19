import s from './App.module.css'
import { Menu } from './components/menu'
import bannerImg from '/banerImg.jpg'
import GTAImage from '/gtaImage.jpg'
function App() {

  return (
    <>
      <Menu/>
        <div className={s.wrapHome}>
          <div className={s.section1}>
            <div className={s.wrapImage}>
              <img className={s.imgSection1} src={bannerImg} alt="banner"  />
            </div>
            <div className={s.wrapTexts}>
              <h1 className={s.tituloSection1}>TÍtulo</h1>
              <p className={s.textSection1}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam fugiat tempore sit ea temporibus alias earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe natus ipsa, illo odit ex blanditiis. Quidem laudantium placeat quibusdam quae, possimus recusandae dolor dolorum repudiandae optio consequatur et in? </p>
              <button className={s.bntSection1}>CLIQUE</button>

            </div>
          </div>

          <div className={s.section2}>
            <iframe className={s.vid} width="1337" height="752" src="https://www.youtube.com/embed/cxuF5siTUQw" title="GTA 6 O ÍNICIO! 🔴 Paulinho o LOKO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className={s.section3}>
            <div className={s.wrapTexts03}>
              <h1 className={s.tituloSection3}>GTA 6</h1>
              <p className={s.textoSection3}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, eos delectus quas perspiciatis in amet adipisci obcaecati quidem blanditiis placeat saepe magnam voluptatum optio atque libero earum excepturi tempora possimus.</p>
              <p className={s.textoSection3}s>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis dolore velit reprehenderit ea tenetur quam, facilis temporibus animi veniam! Eligendi corporis cupiditate deserunt voluptatibus nesciunt repellendus necessitatibus nulla molestiae recusandae!</p>
              <p className={s.textoSection3}s>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis dolore velit reprehenderit ea tenetur quam, facilis temporibus animi veniam! Eligendi corporis cupiditate deserunt voluptatibus nesciunt repellendus necessitatibus nulla molestiae recusandae!</p>
            </div>
            <div className={s.wrapImage03}>
              <img className={s.imgSection3} src={GTAImage} alt="GtaImage" />
            </div>

          </div>
          <div className={s.section4}>
            <div className={s.wrapCards}>
              <div className={s.card}>
                  <h1 className={s.tituloCard}>Missão</h1>
                  <p className={s.textoCard}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut perspiciatis architecto esse ex dolore eveniet debitis optio praesentium exercitationem explicabo, blanditiis dolorum voluptate iste ab numquam illo aperiam obcaecati commodi.</p>
              </div>
              <div className={s.card}>
                <h1 className={s.tituloCard}>Visão</h1>
                <p className={s.textoCard}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ab, in totam, ducimus itaque soluta dolores omnis adipisci porro laudantium expedita facilis, a velit reprehenderit alias doloremque quia distinctio vel.</p>
              </div>
              <div className={s.card}>
                <h1 className={s.tituloCard}>Valores</h1>
                <p className={s.textoCard}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum alias, distinctio tempore vero illo delectus doloremque dolor culpa eum? Aspernatur repellendus explicabo amet voluptatum culpa itaque, nulla exercitationem provident iusto!</p>
              </div>

            </div>  

          </div>
        </div>
    
    </>
  )
}

export default App

