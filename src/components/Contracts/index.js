import React, { Component } from 'react';
import '../Contracts/style.css';
import Contact from "../contact"

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
    
}
render() {
    let contact = this.state.contacts;
 
    const filteredContacts = this.state.contacts.filter(item => {
      const search = this.state.search.toLowerCase();
      return item.firstName.toLowerCase().includes(search) || 
      item.lastName.toLowerCase().includes(search) || 
      item.phone.includes(search)

    })
       
    console.log(filteredContacts)
    if (this.state.search !== '') {
            contact = filteredContacts;
    }

    contact = filteredContacts.map(i => 
        <Contact
        firstName={i.firstName}
        lastName={i.lastName}
        phone={i.phone}
        gender={i.gender}
        />
    )

    if (filteredContacts.length === 0) {
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



