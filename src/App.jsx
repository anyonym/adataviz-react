import { useState } from "react";

import useGetdatas from "./components/Getdatas.jsx";
import Entete from "./components/Entete/Entete.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Visibles from "./components/Carte/Visibles.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  // Quartier sélectionné : null signifie qu'aucun filtre n'est actif.
  const [quartierActif, setQuartierActif] = useState(null);

  const { datas, chargement, messageErreur } = useGetdatas();

  // Active un quartier ou désactive le filtre s'il est déjà sélectionné.
  function gererFiltreQuartier(quartier) {
    setQuartierActif((precedent) =>
      precedent === quartier ? null : quartier
    );
  }

  return (
    <>
      <Entete />

      <main>
        <Nav
          quartierActif={quartierActif}
          onFiltreQuartier={gererFiltreQuartier}
        />

        {chargement && (
          <p role="status">Chargement des résultats…</p>
        )}

        {messageErreur && (
          <p role="alert">
            Impossible de charger les données : {messageErreur}
          </p>
        )}

        {!chargement && !messageErreur && (
          <Visibles
            stationnements={datas}
            quartierActif={quartierActif}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;