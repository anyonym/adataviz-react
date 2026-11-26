import { useEffect, useState } from "react";
import Minicarte from "../Minicarte.jsx";

// Uniformise le texte pour faciliter les comparaisons.
function normaliserTexte(texte) {
  return String(texte ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// Vérifie si un stationnement appartient au quartier sélectionné.
function correspondAuQuartier(quartier, filtre) {
  const nomQuartier = normaliserTexte(quartier);

  switch (filtre) {
    case "centre":
      return nomQuartier.includes("centre");

    case "hauts-paves":
      return (
        nomQuartier.includes("hauts paves") ||
        nomQuartier.includes("saint felix")
      );

    case "ile":
      return nomQuartier.includes("ile de nantes");

    default:
      return true;
  }
}

function Visibles({ stationnements, quartierActif }) {
  const [recherche, setRecherche] = useState("");
  const [pageActuelle, setPageActuelle] = useState(1);

  const resultatsParPage = 12;

  // Prépare les résultats en appliquant les différents filtres.
  const stationnementsFiltres = stationnements.filter((stationnement) => {
    const nombrePlaces = Number(stationnement.nombrePlaces);

    // Ignore les valeurs invalides et les stationnements complets.
    if (!Number.isFinite(nombrePlaces) || nombrePlaces <= 0) {
      return false;
    }

    // Filtre par quartier.
    if (
      !correspondAuQuartier(stationnement.quartier, quartierActif)
    ) {
      return false;
    }

    // Filtre par nombre de places.
    const rechercheNormalisee = normaliserTexte(recherche);
    const placesNormalisees = normaliserTexte(stationnement.nombrePlaces);

    return placesNormalisees.includes(rechercheNormalisee);
  });

  // Calcul de la pagination.
  const nombrePages = Math.ceil(
    stationnementsFiltres.length / resultatsParPage
  );

  const indexDebut = (pageActuelle - 1) * resultatsParPage;

  const stationnementsPage = stationnementsFiltres.slice(
    indexDebut,
    indexDebut + resultatsParPage
  );

  // Repart à la première page dès qu'un filtre ou la recherche change.
  useEffect(() => {
    setPageActuelle(1);
  }, [recherche, quartierActif]);

  // Évite de rester sur une page qui n'existe plus après un filtrage.
  useEffect(() => {
    if (nombrePages > 0 && pageActuelle > nombrePages) {
      setPageActuelle(nombrePages);
    }
  }, [nombrePages, pageActuelle]);

  return (
    <section className="visibles">
      <label className="recherche-places" htmlFor="recherche-places">
        Rechercher par nombre de places
      </label>

      <input
        id="recherche-places"
        type="search"
        placeholder="Ex. : 5"
        value={recherche}
        onChange={(event) => setRecherche(event.target.value)}
      />

      <p aria-live="polite">
        {stationnementsFiltres.length} stationnement(s) disponible(s)
      </p>

      {stationnementsFiltres.length === 0 ? (
        <p>Aucun stationnement ne correspond à votre recherche.</p>
      ) : (
        <>
          <div className="liste-stationnements">
            {stationnementsPage.map((stationnement) => (
              <article
                className="carte-stationnement"
                key={stationnement.id}
              >
                <h2>{stationnement.commune}</h2>

                <p>Quartier : {stationnement.quartier}</p>

                <p>
                  Places disponibles : {stationnement.nombrePlaces}
                </p>

                <Minicarte
                  coordonnees={stationnement.geoPoint2d}
                />
              </article>
            ))}
          </div>

          {nombrePages > 1 && (
            <div className="pagination">
              <button
                type="button"
                onClick={() =>
                  setPageActuelle((page) => page - 1)
                }
                disabled={pageActuelle === 1}
              >
                Précédent
              </button>

              <span>
                Page {pageActuelle} / {nombrePages}
              </span>

              <button
                type="button"
                onClick={() =>
                  setPageActuelle((page) => page + 1)
                }
                disabled={pageActuelle === nombrePages}
              >
                Suivant
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Visibles;
