import React, { Component } from 'react';
import '../Contracts/style.css'

export default class Contracts extends Component {
state = {
    contacts: [{
        firstName: "Барней",
        lastName: "Стинсовский",
        phone: "+380956319521",
        gender: "male"
    }, {
        firstName: "Робин",
        lastName: "Щербатская",
        phone: "+380931460123",
        gender: "female"
    }, {
        firstName: "Аномный",
        lastName: "",
        phone: "+380666666666"
    }, {
        firstName: "Лилия",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
    }, {
        firstName: "Маршэн",
        lastName: "Эриксонян",
        phone: "+380739432123",
        gender: "male"
    }, {
        firstName: "Теодор",
        lastName: "Мотсбэс",
        phone: "+380956319521",
        gender: "male"
    }],
    
    search: '',
}

searchHandler = (e) => {
    this.setState({
        search: e.target.value
    })
    console.log(this.state.search)
}
render() {
    let contact = null;
    const regex = new RegExp(this.state.search, 'g' )
    contact = this.state.contacts.map(i => 
        <div className="contactItem" key={i.firstName + 2}>
        <div className="contactIcon" key={i.firstName + 3}>{i.gender === "male" ? <i className="fas fa-mars"></i> : <i className="fas fa-venus"></i>}</div>
        <div className="contactInfo" key={i.firstName + 4}>
        <p className="contactText" key={i.firstName + 1}><span className="contactSpan">First Name:</span>{i.firstName}</p>
        <p className="contactText" key={i.lastName + 1}><span className="contactSpan">Last Name:</span>{i.lastName}</p>
        <p className="contactText" key={i.phone + 1}><span className="contactSpan">Phone:</span>{i.phone}</p>
        </div>
        </div>
    )
    let a = this.state.contacts.filter(item =>
        regex.test(item.firstName.toLowerCase()) || regex.test(item.lastName.toLowerCase()) || regex.test(item.phone)
    ) 
          
    if (this.state.search !== '') {
            contact = a.map(i => 
                <div className="contactItem" key={i.firstName + 2}>
                <div className="contactIcon" key={i.firstName + 3}>{i.gender === "male" ? <i className="fas fa-mars"></i> : <i className="fas fa-venus"></i>}</div>
                <div className="contactInfo" key={i.firstName + 4}>
                <p className="contactText" key={i.firstName + 1}><span className="contactSpan">First Name:</span>{i.firstName}</p>
                <p className="contactText" key={i.lastName + 1}><span className="contactSpan">Last Name:</span>{i.lastName}</p>
                <p className="contactText" key={i.phone + 1}><span className="contactSpan">Phone:</span>{i.phone}</p>
                </div>
                </div>)
    }

    if (a.length === 0) {
        contact = <div className="noAvailable">No available contacts</div>
    }
        return(
            <div className="contactWrapper">
                <div className="search">
                    <i className="fas fa-search icon"></i>
                    <input className="searchInput" onChange={this.searchHandler}/>
                </div>
                {contact}
           </div>
        )
    }
}