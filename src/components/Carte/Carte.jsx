import { useState } from 'react';
import './Carte.css'

function Carte({stationnement}) {
    const [ouvert, setOuvert] = useState(false);
    return (
            <article className='carte'>
                <h3>{stationnement.commune}</h3>
                <ul>
                    <li>{stationnement.quartier}</li>
                    <li>{stationnement.nombrePlaces} places</li>
                </ul>
                <button type="button" onClick={() => {setOuvert(!ouvert)}}>
                {ouvert ? "Masquer les coordonnées" : "Coordonnées GPS"}
                </button>
                <ul>    
                    {ouvert && <li>lon : {stationnement.geoPoint2d.lon}</li>}
                    {ouvert && <li>lat : {stationnement.geoPoint2d.lat}</li>}
                </ul>
            </article>
    )
}
export default Carte