import React from 'react'
import {Link} from "react-router-dom";

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ps-5 pe-5">
    <Link className="navbar-brand ms-5" to="/">tdagci</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav"></div>
    <div  id="navbarNav">
      <ul className="navbar-nav me-5">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/about">About</Link>
        </li>     
      </ul>
    </div>
    
  </nav>
  )
}