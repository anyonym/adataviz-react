import Entete from './components/Entete/Entete.jsx'
import Nav from './components/Nav/Nav.jsx'
import InputRecherche from './components/Recherche/InputRecherche.jsx'
import Visibles from './components/Carte/Carte.jsx'
import Pages from './components/Pages/Pages.jsx'
import Footer from './components/Footer/Footer.jsx'
import { stationnements } from '../donnees.js'
import { useState } from 'react'


function App() {
  const [motifRecherche, setRecherche] = useState("");
  return (
    <>
      <Entete/>
      <Nav/>
      <InputRecherche recherche={motifRecherche} setRecherche={setRecherche}/>
      <section className="results">
      <Visibles recherche={motifRecherche} stationnements={stationnements}/>
      </section>
      <Pages/>
      <Footer/>
    </>
  )
}

export default App

//  {
//           stationnements.map((stationnement) => {
//             return(
//               <Carte key={stationnement.id} stationnement={stationnement}/>
//             )
//           })
//         }