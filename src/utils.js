export function formaterDatas(stationnement) {
  return {
    id: stationnement.gid,
    commune: stationnement.commune,
    quartier: stationnement.quartier,
    nombrePlaces: stationnement.nombre_place,
    geoPoint2d: stationnement.geo_point_2d
  };
}
