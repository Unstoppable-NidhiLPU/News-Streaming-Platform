import React from "react";
import { Link } from "react-router-dom";
const NavBar= () =>{
    return (
      <div>
        <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{marginLeft: '50px'}}>
            News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li> 
   
              <li className="nav-item">
                <Link to="/business" className="nav-link active">Business</Link>
              </li>

              <li className="nav-item">
                <Link to="/entertainment" className="nav-link active">Entertainment</Link>
              </li>

              <li className="nav-item">
                <Link to="/health" className="nav-link active">Health</Link>
              </li>

              <li className="nav-item">
                <Link to="/science" className="nav-link active">Science</Link>
              </li>

              <li className="nav-item">
                <Link to="/sports" className="nav-link active">Sports</Link>
              </li>

              <li className="nav-item">
                <Link to="/technology" className="nav-link active">Technology</Link>
              </li>
            </ul>

            <div className='form-check form-switch text-dark'>
                <input className="mr-40 form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label style={
                  {
                    color: "white"
                  }
                } className='form-check-label' htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
              </div>
          </div>
        </div>
      </nav>
      </div>
    );
}

export default NavBar;