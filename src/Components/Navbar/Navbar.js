import React, {useState, useEffect} from 'react'
import './Navbar.css'

export default function Navbar() {
    
    const [toggleMenu, setToggleMenu] = useState(false);
    const [length, setLength] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setLength(window.innerWidth)
        } 
        window.addEventListener('resize', changeWidth)

        // cleanUp function 
        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        
        <nav>
        {(toggleMenu || length > 500) && (
            <ul className="list">
            <li className="items">Home</li>
            <li className="items">Services</li>
            <li className="items">Contact</li>
            </ul>
        )}
        <button onClick={toggleNav} className='btn'>BTN</button>
    </nav>
  )
}
