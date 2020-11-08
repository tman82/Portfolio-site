import React, { Component } from 'react'
import js from '../img/icons/javascript.png'
import node from '../img/icons/nodejs.png'
import react from '../img/icons/react.png'
import mongodb from '../img/icons/mongodb.png'
import uidesign from  '../img/icons/uidesign3.png'
import './Skills.css'

export class Skills extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col skills-div">
                            <h3>My S<span className="blue">k</span>ills</h3>
                            <span className="underline" id="skill-line">ghost text</span>
                            <div className="skill-stack">
                                <div className="cell">
                                    <img src={js} alt="icon"/>
                                </div>
                                <div className="cell">
                                    <img src={node} alt="icon"/>
                                </div>
                                <div className="cell">
                                    <img src={react} alt="icon"/>
                                </div>
                            </div>
                            <div className="skill-stack2">
                                <div className="cell">
                                    <p className="express"><span className="e-span">E</span>xpress</p>
                                </div>
                                <div className="cell" id="mongo">
                                    <img src={mongodb} alt="icon"/>
                                </div>
                                <div className="cell ui-cell">
                                    <img src={uidesign} alt="icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills
