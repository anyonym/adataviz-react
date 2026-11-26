import { useEffect, useState } from "react";
import { formaterDatas } from "../utils.js";

const URL_API =
  "https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_stationnement-deux-roues-motorises-ville-nantes/records?where=%22Centre%20Ville%22%20OR%20%22Hauts%22%20OR%20%22Ile%22&limit=100";

export default function useGetdatas() {
  const [datas, setDatas] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [messageErreur, setMessageErreur] = useState("");

  useEffect(() => {
    const controleur = new AbortController();

    async function chargerDonnees() {
      try {
        setChargement(true);
        setMessageErreur("");

        const reponse = await fetch(URL_API, {
          signal: controleur.signal,
        });

        if (!reponse.ok) {
          throw new Error(`Erreur HTTP ${reponse.status}`);
        }

        const donnees = await reponse.json();

        // L'API renvoie les enregistrements dans la propriété results.
        const resultats = donnees.results ?? [];

        // Transforme les données brutes avec le formateur du projet.
        const donneesFormatees = resultats.map(formaterDatas);

        setDatas(donneesFormatees);
      } catch (erreur) {
        // Une requête annulée n'est pas une erreur à afficher.
        if (erreur.name !== "AbortError") {
          setMessageErreur(erreur.message);
        }
      } finally {
        if (!controleur.signal.aborted) {
          setChargement(false);
        }
      }
    }

    chargerDonnees();

    // Annule la requête si le composant est démonté.
    return () => controleur.abort();
  }, []);

  return {
    datas,
    chargement,
    messageErreur,
  };
}
