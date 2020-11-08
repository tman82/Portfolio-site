import React, { Component, useState } from 'react'
import github from '../img/icons/github2.png'
import linkedin from '../img/icons/linkedin2.png'
import './Footer.css'

export class Footer extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    render() {

        return (
            <div>
                <div className="container-fluid">
                    <div className="row footer-section">
                        <div className="col">
                            <div className="footer-holder">
                                <div className="footer-top">
                                    <button onClick={() =>{this.setState({show: !this.state.show})}} id="contact-button">Contact Me</button>
                                    <div className="upper-list">
                                        <ul>
                                            <ol className="github-item">
                                                <a href="https://github.com/tman82?tab=repositories">
                                                    <img src={github} alt="icon"/>
                                                </a>
                                            </ol>
                                            <ol className="linked-item">
                                                <a href="https://www.linkedin.com/in/martrell-leonard-30475bab/">
                                                    <img src={linkedin} alt="icon"/>
                                                </a>
                                            </ol>
                                        </ul>
                                    </div>
                                </div>
                                {
                                    this.state.show?
                                    <div className="pop-up fade-in">
                                        <div className="email-div">martrell3030@gmail.com</div>
                                        <form>
                                            <input id="info-button" type="submit" value="Send"/>
                                            <input id="name-input" className="input-box" type="text" placeholder="Name"/>
                                            <input className="input-box" type="text" placeholder="Email"/>
                                        </form>
                                    </div> : null
                                }
                                <hr id="footer-rule"/>
                                <div className="footer-bottom">
                                    <p>&copy; 2020 <span id="my-name">Martrell Leonard</span>. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
