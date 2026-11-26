import Carte from "./Carte.jsx";

function Visibles({ stationnements = [], recherche = "" }) {
  // Normalisation de la recherche
  const termeRecherche = String(recherche ?? "")
    .trim()
    .toLowerCase();

  // Filtrage des stationnements
  const visibles = stationnements.filter((stationnement) => {
    const nombrePlaces = String(
      stationnement.nombrePlaces ?? ""
    ).toLowerCase();

    return nombrePlaces.includes(termeRecherche);
  });

  return (
    <>
      <div id="total-results">
        <p>
          {visibles.length}{" "}
          {visibles.length > 1
            ? "zones de stationnement"
            : "zone de stationnement"}
        </p>

        {visibles.length === 0 && (
          <p>Aucun résultat</p>
        )}
      </div>

      <div className="results">
        {visibles.map((stationnement) => (
          <Carte
            key={stationnement.id}
            commune={stationnement.commune}
            quartier={stationnement.quartier}
            nombrePlaces={stationnement.nombrePlaces}
            lon={stationnement.geoPoint2d?.lon}
            lat={stationnement.geoPoint2d?.lat}
          />
        ))}
      </div>
    </>
  );
}

export default Visibles;
