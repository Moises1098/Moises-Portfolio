import React from "react";
import { Link } from "react-router-dom";
import './navBar.css';


export default function NavBar() {
  return <nav className="nav">
    <link to="/" className="nav-name">Moises Gonzalez</link>
    <ul>
      <CustomLink to="/home">Home</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/contact">Contact</CustomLink>
      <CustomLink to="/work">Work</CustomLink>
      <CustomLink to="/resume">Resume</CustomLink>
    </ul>
  </nav>
}

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname
  
  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
        </Link>
    </li>
  )
}


