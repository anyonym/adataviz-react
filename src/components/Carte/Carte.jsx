import { useState } from 'react';
import './Carte.css'

function Carte({ commune, id, quartier, nombrePlaces, lon, lat }) {
    const [ouvert, setOuvert] = useState(false);
    return (
        <article className='carte'>
            <h3>{commune}</h3>
            <ul>
                <li>{id}</li>
                <li>{quartier}</li>
                <li>{nombrePlaces} places</li>
            </ul>
            <button type="button" onClick={() => {setOuvert(!ouvert)}}>
            {ouvert ? "Masquer les coordonnées" : "Coordonnées GPS"}
            </button>
            <ul>    
                {ouvert && <li>lon : {lon}</li>}
                {ouvert && <li>lat : {lat}</li>}
            </ul>
        </article>
    )
}

export default Carte