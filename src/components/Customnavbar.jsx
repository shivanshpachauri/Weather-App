import React from 'react'
import { Outlet,Link, useLocation } from 'react-router-dom'

export default function customnavbar() {
  const location=useLocation();
  console.log(location.pathname);
  
  return (
    <>
    <nav
      className="navbar navbar-expand-sm navbar-light bg-light text-center"
    >
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
              <Link className="nav-link active" to="/" aria-current="page"
                >Home
                <span className="visually-hidden">(current)</span></Link>
              
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
    <Outlet/>
    </>
  )
}
