import Carte from './Carte.jsx'

function Visibles({stationnements, recherche}) {
    const visibles = stationnements.filter((stationnement) =>
        stationnement.nombrePlaces.toLowerCase().includes(recherche.toLowerCase()));

    return(
    <>
        <div id="total-results">
        <p>
          {visibles.length} {visibles.length > 1 ? "zones de stationnement" : "zone de stationnement"}
        </p>
        {visibles.length === 0 && <p>Aucun résultat</p>}
        </div>
        <div className="results">
          {visibles.map((stationnement) => (
            <Carte
              commune={stationnement.commune}
              key={stationnement.id}
              quartier={stationnement.quartier}
              nombrePlaces={stationnement.nombrePlaces}
              lon={stationnement.geoPoint2d.lon}
              lat={stationnement.geoPoint2d.lat}
            />
          ))}
        </div>
    </>
    )
}

export default Visibles