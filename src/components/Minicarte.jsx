function Minicarte({ coordonnees }) {
  // Accepte les coordonnées sous forme de tableau [lat, lon]
  // ou sous forme d'objet { lat, lon }.
  const latitude = Array.isArray(coordonnees)
    ? coordonnees[0]
    : coordonnees?.lat;

  const longitude = Array.isArray(coordonnees)
    ? coordonnees[1]
    : coordonnees?.lon;

  const lat = Number(latitude);
  const lon = Number(longitude);

  // Vérifie que les coordonnées sont présentes et valides.
  const coordonneesValides =
    latitude != null &&
    longitude != null &&
    Number.isFinite(lat) &&
    Number.isFinite(lon) &&
    lat >= -90 &&
    lat <= 90 &&
    lon >= -180 &&
    lon <= 180;

  if (!coordonneesValides) {
    return <p>Coordonnées indisponibles</p>;
  }

  // Définit une petite zone autour du point à afficher.
  const marge = 0.002;

  const bbox = [
    lon - marge,
    lat - marge,
    lon + marge,
    lat + marge,
  ].join(",");

  const urlCarte =
    `https://www.openstreetmap.org/export/embed.html` +
    `?bbox=${bbox}` +
    `&layer=mapnik` +
    `&marker=${lat},${lon}`;

  const urlCarteComplete =
    `https://www.openstreetmap.org/?mlat=${lat}` +
    `&mlon=${lon}#map=17/${lat}/${lon}`;

  return (
    <div className="mini-carte">
      <iframe
        title="Carte de localisation du stationnement"
        src={urlCarte}
        loading="lazy"
        referrerPolicy="no-referrer"
      />

      <a
        href={urlCarteComplete}
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir la carte en grand
      </a>
    </div>
  );
}

export default Minicarte;