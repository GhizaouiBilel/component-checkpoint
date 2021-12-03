import React, { Component } from 'react'
import './Main.css'


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#Projects">Projects</a> 
                <a href="#contact">Contact</a>
            </nav>
        )
    }
}

export default Navbar