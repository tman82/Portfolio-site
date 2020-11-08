import React, { Component } from 'react'
import downArrow from '../img/icons/down-arrow3.png'
import './WorkTitle.css'

export class WorkTitle extends Component {
    render() {
        return (
            <div className="work-div">
                <div className="work">My Work</div>
                <div className="arrow"><img src={downArrow} alt="icon"/></div>
            </div>
        )
    }
}

export default WorkTitle
