import s from './App.module.css'
import { Menu } from './components/menu'
import bannerImg from '/banerImg.jpg'
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
        </div>
    
    </>
  )
}

export default App

