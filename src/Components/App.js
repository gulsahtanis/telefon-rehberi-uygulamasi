import React, { Component } from 'react';
import '../App.css';
import Contacts from './Contacts';

class App extends Component {
  constructor(props){
    super(props);
    this.addContact=this.addContact.bind(this);
  }
  state={
    contacts:[  
      {
        name:'Mehmet',
        phone:'05511234567'
    },
    {
        name:'Mesut',
        phone:'05314568974'
    },
    {
      name:'Ayşe',
      phone:'05318658974'
  }
  ]
};
addContact(contact){
const {contacts}=this.state;
contacts.push(contact);
this.setState({
  contacts
})
}
  render(){
  return (
    <div className="App">
      <h2>Telefon Rehberi Uygulaması</h2>
      <Contacts 
      addContact={this.addContact}
      contacts={this.state.contacts}></Contacts>  
    </div>
  )
}
}

export default App;
