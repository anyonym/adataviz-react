import Entete from './components/Entete/Entete.jsx'
import Nav from './components/Nav/Nav.jsx'
import InputRecherche from './components/Recherche/InputRecherche.jsx'
import Visibles from './components/Carte/Visibles.jsx'
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
      <Visibles recherche={motifRecherche} stationnements={stationnements}/>
      <Pages/>
      <Footer/>
    </>
  )
}

export default App