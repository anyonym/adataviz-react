import { useEffect, useState } from "react";
import { formaterDatas } from "../utils.js";

const url =
  "https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_stationnement-deux-roues-motorises-ville-nantes/records?where=%22Centre%20Ville%22%20OR%20%22Hauts%22%20OR%20%22Ile%22&limit=100";

export default function useGetdatas() {
  const [datas, setDatas] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [messageErreur, setMessageErreur] = useState("");

  useEffect(() => {
    const charger = async () => {
      try {
        const reponse = await fetch(url);

        if (!reponse.ok) {
          throw new Error("Erreur HTTP " + reponse.status);
        }

        const donnees = await reponse.json();

        const resultats = donnees.results ?? [];

        setDatas(resultats.map(formaterDatas));
      } catch (erreur) {
        setMessageErreur(erreur.message);
      } finally {
        setChargement(false);
      }
    };

    charger();
  }, []);

  return {
    datas,
    chargement,
    messageErreur
  };
}