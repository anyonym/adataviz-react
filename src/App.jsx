import Entete from './components/Entete/Entete.jsx'
import Nav from './components/Nav/Nav.jsx'
import Recherche from './components/Recherche/InputRecherche.jsx'
import Carte from './components/Carte/Carte.jsx'
import Pages from './components/Pages/Pages.jsx'
import Footer from './components/Footer/Footer.jsx'
import { stationnements } from '../donnees.js'


function App() {
  
  return (
    <>
      <Entete/>
      <Nav/>
      <Recherche/>
      <section className="results">
        {
          stationnements.map((stationnement) => {
            return(
              <Carte key={stationnement.id} stationnement={stationnement}/>
            )
          })
        }
      </section>
      <Pages/>
      <Footer/>
    </>
  )
}

export default App