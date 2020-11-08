import React, { Component } from 'react'
import mainLogo from '../img/logos/ml2.png'
import linkedInIcon from '../img/icons/linkedin2.png'
import githubIcon from '../img/icons/github2.png'
import './Nav.css'

export class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-light">
                    <div className="logo-div">
                        <a class="navbar-brand" href="#">
                            <ul>
                                <li><img src={mainLogo} alt="logo"/></li>
                                <li className="name-logo"><span>Martrell Leonard</span></li>
                            </ul>
                        </a>
                    </div>
                    <div className="social-nav">
                        <ul>
                            <li>
                                <a href="https://github.com/tman82?tab=repositories">
                                    <img src={githubIcon} alt="icon"/>
                                </a>
                            </li>
                            <li className="in-logo">
                                <a href="https://www.linkedin.com/in/martrell-leonard-30475bab/">
                                    <img src={linkedInIcon} alt="icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav
