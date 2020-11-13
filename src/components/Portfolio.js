import React, { Component } from 'react'
import githubIcon from '../img/icons/github3.png'
import websiteIcon from '../img/icons/global.png'
import './Portfolio.css'

export class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid portfolio-block">
                    <div className="row">
                        <div className="col">
                            <div className="container-fluid inner">
                                <div className="portfolio-div">
                                        <h3>Portf<span className="blue">o</span>lio</h3>
                                        <span className="underline">ghost text</span>
                                </div>
                                <ul className="list1">
                                    <li className="shadow block fadeIn" id="block1">
                                        <div class="box-content">
                                            <h3 class="title z-one">Foto</h3>
                                            <ul class="icon z-one">
                                                <ol><a className="left" href="https://foto-image-app.herokuapp.com/"><img src={websiteIcon} alt="icon"/></a></ol>
                                                <ol><a className="right" href="https://github.com/tman82/Image-app"><img src={githubIcon} alt="icon"/></a></ol>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="block" id="block2">
                                        <div class="box-content">
                                            <h3 class="title">Comfort Shoes</h3>
                                            <ul class="icon z-one">
                                                <ol><a className="left" href="#"><img src={websiteIcon} alt="icon"/></a></ol>
                                                <ol><a className="right" href="https://github.com/tman82/Comfort-Shoe-Store"><img src={githubIcon} alt="icon"/></a></ol>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="list2">
                                    <li className="block" id="block3">
                                        <div class="box-content">
                                            <h3 class="title">Chores</h3>
                                            <ul class="icon z-one">
                                                <ol><a className="left" href="#"><img src={websiteIcon} alt="icon"/></a></ol>
                                                <ol><a className="right" href="https://github.com/tman82/Chore-App"><img src={githubIcon} alt="icon"/></a></ol>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="block" id="block4">
                                        <div class="box-content">
                                            <h3 class="title">Poetic Moor</h3>
                                            <ul class="icon z-one">
                                                <ol><a className="left" href="http://poeticmoor.com/index.html"><img src={websiteIcon} alt="icon"/></a></ol>
                                                <ol><a className="right" href="#"><img src={githubIcon} alt="icon"/></a></ol>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio
