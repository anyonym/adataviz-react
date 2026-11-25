import { useState } from 'react';
import './Nav.css'

function Nav() {
    const [filtre, setFiltre] = useState(false);
    return (
        <nav className='nav'>
            <button type="button" onClick={() => {setFiltre(!filtre)}}>🏰 Centre ville</button>
            <button type="button" onClick={() => {setFiltre(!filtre)}}>🏢 Hauts Pavés - Saint Félix</button>
            <button type="button" onClick={() => {setFiltre(!filtre)}}>🐘 Île de Nantes</button>
        </nav>
    )
}
export default Nav