import "./Nav.css";

function Nav({ quartierActif, onFiltreQuartier }) {
  // Les identifiants doivent correspondre à ceux utilisés dans App.jsx.
  const quartiers = [
    {
      id: "centre",
      nom: "Centre ville",
      icone: "🏰",
    },
    {
      id: "hauts-paves",
      nom: "Hauts Pavés - Saint Félix",
      icone: "🏢",
    },
    {
      id: "ile",
      nom: "Île de Nantes",
      icone: "🐘",
    },
  ];

  return (
    <nav className="nav" aria-label="Filtrer par quartier">
      {quartiers.map((quartier) => {
        const estActif = quartierActif === quartier.id;

        return (
          <button
            key={quartier.id}
            type="button"
            className={estActif ? "filtre actif" : "filtre"}
            aria-pressed={estActif}
            onClick={() => onFiltreQuartier(quartier.id)}
          >
            {quartier.icone} {quartier.nom}
          </button>
        );
      })}
    </nav>
  );
}

export default Nav;