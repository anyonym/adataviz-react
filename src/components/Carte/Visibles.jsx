import Carte from './Carte.jsx'

function Visibles({stationnments, recherche}) {
    const visibles = stationnments.filter((stationnement) =>
        stationnement.nom.toLowerCase().includes(recherche.toLowerCase()));

    return(
    <>
        <p>
          {visibles.length} {visibles.length > 1 ? "stationnements" : "stationnement"}
        </p>
        {visibles.length === 0 && <p>Aucun résultat</p>}
        <div className="carte">
          {visibles.map((stationnement) => (
            <Carte
              key={stationnement.id}
              commune={stationnement.commune}
              quartier={stationnement.quartier}
              lon={stationnement.geoPoint2d.lon}
              lat={stationnement.geoPoint2d.lat}
            />
          ))}
        </div>
    </>
    )
}

export default Visibles