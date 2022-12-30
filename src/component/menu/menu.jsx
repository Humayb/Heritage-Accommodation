import {Outlet, Link } from 'react-router-dom'
import './menu.css'
import logo from '../../img/logo.svg'


const Menu = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link  to='/' className="navbar-brand" href="#">
                        <img src={logo} alt='لوگو اقامتگاه' width="60" className="d-inline-block" />
                        <span>اقامتگاه بوم گردی</span>
                    </Link>
                    
                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>

                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link active" to='/'  target="_blank" aria-current="page" href="#">صفحه اصلی</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='rooms' target="_blank"  className="nav-link" href="#">اقامتگاه ها</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet/>
    </div>


    )
}

export default Menu;