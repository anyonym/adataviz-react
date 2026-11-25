import { useState } from 'react';
import './Pages.css'

function Pages() {
    const [skip, setSkip] = useState(false);
    return (
        <nav className='pages'>
            <button type="button" onClick={() => {setSkip(!skip)}}>⬅️ Précédente</button>
            <button type="button" onClick={() => {setSkip(!skip)}}>Suivante ➡️</button>
        </nav>
    )
}

export default Pages