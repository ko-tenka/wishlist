import './App.css'
import Vid from './assets/vid8mb.mp4'
import List from './components/List/List'

function App() {
  const scrollToShop = () => {
    document.getElementById('shop-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <>
      <section className='hero-section'>
        <video className='vid'  autoPlay loop muted src={Vid}></video>
        <div className='overlay'></div>
        <h1 className='title title1'>WISH</h1>
        <h1 className='title title2'>LIST</h1>
        <button className='shop-button' onClick={scrollToShop}>
          Перейти
        </button>
      </section>
      
      <section id='shop-section'>
        <List />
      </section>
    </>
  )
}

export default App
