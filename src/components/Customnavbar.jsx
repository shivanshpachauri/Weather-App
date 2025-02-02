import React from 'react'
import { Outlet,Link, useLocation } from 'react-router-dom'
import Customheader from './Header';
import Jumbotron from './jumbotron';
import CustomAboutMe from './CustomAboutMe';
import CustomDashboard from './Weatherdashboard';
import Customhero from './Customhero';
export default function customnavbar({location,setlocation,weatherdata,setweatherdata}) {
  const navlocation=useLocation();
  console.log(navlocation.pathname);
  
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light text-center">
        <div className="container">
          <Link className="navbar-brand" to="/">Weatherapp</Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="text-center collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" aria-current="page">
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/table">Table</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hero">Hero</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutme">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {navlocation.pathname === "/" && (
        <>
          <Customheader />
          <Jumbotron />
          <CustomDashboard location={location} weatherdata={weatherdata} setlocation={setlocation} setweatherdata={setweatherdata} />
          <Customhero />
          <CustomAboutMe />
        </>
      )}
      <Outlet />
    </>
  );
}
