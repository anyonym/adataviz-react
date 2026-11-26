import { useState } from 'react'
import useGetdatas from './components/Getdatas.jsx'
import Entete from './components/Entete/Entete.jsx'
import Nav from './components/Nav/Nav.jsx'
import InputRecherche from './components/Recherche/InputRecherche.jsx'
import Visibles from './components/Carte/Visibles.jsx'
import Pages from './components/Pages/Pages.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  const [recherche, setRecherche] = useState("");
  const {datas, chargement, messageErreur} = useGetdatas();

  return (
    <>
      <Entete/>

      <main>
        <Nav/>
        {chargement && (
          <p role="status">
            Chargement des résultats…
          </p>
        )}

        {messageErreur && (
          <p role="alert">
            Impossible de charger les données. (
            {messageErreur}).
          </p>
        )}

        {!chargement &&
          !messageErreur &&
          datas.length === 0 && (
            <p>
              Aucun résultat.
            </p>
          )}

        {!chargement &&
          !messageErreur &&
          datas.length > 0 && (
            <>
              <InputRecherche 
              recherche={recherche} 
              setRecherche={setRecherche}
              />
              
              <Visibles 
              recherche={recherche} 
              stationnements={datas}
              />
            <Pages/>
          </>
        )}
      </main>

      <Footer/>
    </>
  )
}

export default App