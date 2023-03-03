import { Outlet, Link } from "react-router-dom";
import './navbar.scss';
import icon from "./icon.png";
import { useState } from 'react';

export default function Navbar() {
    const [collapsed, setCollapsed] = useState(false);

    const hideNavbar = () => setCollapsed(!collapsed)
    
    function changeClass(name){
        this.className = collapsed ?  `${name}__hidden` : name
    }
    return (
//         <header>
//   <h1 class="logo">Logo</h1>
//   <input type="checkbox" id="nav-toggle" class="nav-toggle"/>
//   <nav>
//     <ul>
//       <li><a href="#">Home</a></li>
//       <li><a href="#">About</a></li>
//       <li><a href="#">Blog</a></li>
//       <li><a href="#">Contact</a></li>
//     </ul>
//   </nav>
//   <label for="nav-toggle" class="nav-toggle-label">
//     <span></span>
//   </label>
// </header>
        <div>
            <nav className={collapsed ? 'nav--hidden' : 'nav'}>
                <img className='nav--icon' onClick={hideNavbar} src={icon}/>
                <Link to="/" className={collapsed ? 'nav__link--hidden' : 'nav__link'}>Home</Link>
                {/* <Link to="/invoices" className={collapsed ? 'nav__link--hidden' : 'nav__link'}>Invoices</Link> */}
                {/* <Link to="/modal" className={collapsed ? 'nav__link--hidden' : 'nav__link'}>Modal</Link> */}
                {/* <Link to="/pokedex" className={collapsed ? 'nav__link--hidden' : 'nav__link'}>Pokedex</Link> */}
                {/* <Link to="/example" className={collapsed ? 'nav__link--hidden' : 'nav__link'}>Example</Link> */}
                {/* <Link to="/form" className={collapsed ? 'nav__link--hidden' : 'nav__link'}>Form</Link> */}
                <Link to="/app" className={collapsed ? 'nav__link--hidden' : 'nav__link'}>App</Link>
                {/* <Link to="/pokemonId" className={collapsed ? 'nav__link--hidden' : 'nav__link'}>Example</Link> */}
            </nav>
            <Outlet />
        </div>
    );
}