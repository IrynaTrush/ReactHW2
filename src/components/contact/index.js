import React, { Component } from "react";

export default class Contact extends Component {
    render() {
        return(
            <div className="contactItem" key={this.props.firstName + 2}>
            <div className="contactIcon" key={this.props.firstName + 3}>{this.props.gender === "male" ? <i className="fas fa-mars"></i> : <i className="fas fa-venus"></i>}</div>
            <div className="contactInfo" key={this.props.firstName + 4}>
            <p className="contactText" key={this.props.firstName + 1}><span className="contactSpan">First Name:</span>{this.props.firstName}</p>
            <p className="contactText" key={this.props.lastName + 1}><span className="contactSpan">Last Name:</span>{this.props.lastName}</p>
            <p className="contactText" key={this.props.phone + 1}><span className="contactSpan">Phone:</span>{this.props.phone}</p>
            </div>
            </div>
        )
    }
}