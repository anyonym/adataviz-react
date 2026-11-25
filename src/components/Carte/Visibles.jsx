import Carte from './Carte.jsx'

function Visibles({stationnements, recherche}) {
    const visibles = stationnements.filter((stationnement) =>
        stationnement.nombrePlaces.toLowerCase().includes(recherche.toLowerCase()));

    return(
    <>
        <p>
          {visibles.length} {visibles.length > 1 ? "zones de stationnement" : "zone de stationnement"}
        </p>
        {visibles.length === 0 && <p>Aucun résultat</p>}
        <div className="carte">
          {visibles.map((stationnement) => (
            <Carte
              key={stationnement.id}
              commune={stationnement.commune}
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