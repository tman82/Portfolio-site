import React, { Component } from 'react'
import Nav from '../components/Nav'
import mainLogo from '../img/logos/ml2.png'
import linkedInIcon from '../img/icons/linkedin2.png'
import githubIcon from '../img/icons/github2.png'
import './Intro.css'


export class Intro extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid main-intro">
                    <div className="row">
                        <div className="col">
                            <div>
                                <nav>
                                    <div>
                                        <div className="intro-logo">
                                            <a class="navbar-brand intro-brand" href="#">
                                                <ul>
                                                    <ol><img src={mainLogo} alt="logo"/></ol>
                                                    <ol className="name-logo"><span>Martrell Leonard</span></ol>
                                                </ul>
                                            </a>

                                            <div className="intro-nav">
                                            <ul>
                                                <ol>
                                                    <a href="https://github.com/tman82?tab=repositories">
                                                        <img src={githubIcon} alt="icon"/>
                                                    </a>
                                                </ol>
                                                <ol className="linkedin-item">
                                                    <a href="https://www.linkedin.com/in/martrell-leonard-30475bab/">
                                                        <img src={linkedInIcon} alt="icon"/>
                                                    </a>
                                                </ol>
                                            </ul>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </nav>
                            </div>
                            <div className="intro-block">
                                <h2>Hi I'm Martrell, <span id="frontend-span">Front-end</span> Engineer</h2>
                                <p>I'm a front-end developer with 3 years of experience in web / UI design
                                and research for optimizing websites. Proficient in market and
                                consumer research for professional projects. I create
                                <span className="blue clean">clean</span> and <span className="blue user">user friendly</span> applications.
                                </p>
                                <span className="underline2">ghost text</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro
