import Cards from '../components/cards/Cards'
import Constelar from "../components/texts/Constelar"

import './Home.css'

export const Home = () => {
  return (
    <>
      <main className='main-container'>
        <section className="hero-container">
          <h1 className="hero-title"><span className='first'>Nuevas </span><span className='second'>Constelaciones </span><span className='third'>Familiares</span></h1>
          <h2 className="hero-caption">Mariel Hilgert</h2>
        </section>
        <Constelar/>
        <Cards />
      </main>
        
    </>
  )
}
