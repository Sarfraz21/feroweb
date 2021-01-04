import React from 'react'
import './Header.css'


const Header = () => {
    return (
        <>
        <header className="contain">
            <nav className="menu">
               <ul>
                   <li><a href="./">HOME</a></li>
                   <li><a href="./">ABOUT</a></li>
                   <li><a href="./">ROOMS</a></li>
                   <li><a href="./">SERVICE</a></li>
                   <li><a href="./">GALLERY</a></li>
                   <li><a href="./">SEE&DO</a></li>
                   <li><a href="./">CONTACT</a></li>
                   <li className="call-to-action"><a href="">BooK A Room</a></li>
               </ul>
            </nav>
            </header>  

        </>
    )
}

export default Header
