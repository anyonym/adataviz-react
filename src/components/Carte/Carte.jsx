import { useState } from 'react';
import './Carte.css'

function Carte({ id, commune, quartier, nombrePlaces, lon, lat }) {
    const [ouvert, setOuvert] = useState(false);
    return (
        <>
            <article className='carte' key={id}>
                <h3>{commune}</h3>
                <ul>
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
        </>    
    )
}

export default Carte