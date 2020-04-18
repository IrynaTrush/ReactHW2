import React, { Component } from "react";
import './style.css';

export default class Contact extends Component {
    render() {
        return(
            <div className="contactItem">
            <div className="contactIcon">{this.props.gender === "male" ? <i className="fas fa-mars"></i> : <i className="fas fa-venus"></i>}</div>
            <div className="contactInfo">
            <p className="contactText"><span className="contactSpan">First Name:</span>{this.props.firstName}</p>
            <p className="contactText"><span className="contactSpan">Last Name:</span>{this.props.lastName}</p>
            <p className="contactText"><span className="contactSpan">Phone:</span>{this.props.phone}</p>
            </div>
            </div>
        )
    }
}