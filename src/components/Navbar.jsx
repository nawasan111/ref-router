import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="text-center p-3 bg-secondary">
      <NavLink
        className="link"
        style={({ isActive }) => {
          return { textDecoration: isActive ? "none" : "underline" };
        }}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className="link"
        style={({ isActive }) => {
          return { textDecoration: isActive ? "none" : "underline" };
        }}
        to={"/product"}
      >
        Product
      </NavLink>
      <NavLink
        className="link"
        style={({ isActive }) => {
          return { textDecoration: isActive ? "none" : "underline" };
        }}
        to={"/contact"}
      >
        Contact Us
      </NavLink>
    </nav>
  );
}
