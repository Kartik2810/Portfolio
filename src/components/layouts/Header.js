import React from 'react'
import {Link} from "react-router-dom"

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="link navbar-brand" to="/"><h1>My Portfolio</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="link nav-link active" aria-current="page" to="/"><h5>Home</h5></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="link nav-link active " to="/project"><h5>Project</h5></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="link nav-link active" to="/resume"><h5>Resume</h5></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="link nav-link active" to="/contect"><h5>Contect</h5></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="link nav-link active " to="/testimonial"><h5>Testimonial</h5></Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
