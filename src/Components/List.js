import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './List.css' 
class List extends Component{
   static propTypes={
    contacts:PropTypes.array.isRequired,
   };
   state={
       filterText:''
   };
   onChangeFilterText=(e)=>{
this.setState({
    filterText:e.target.value
})
   };
    render(){
        const filteredContacts=this.props.contacts.filter(
            contact=>{
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                )!==-1
            }
        );
        return(
            <div className={"listArea"}>
            <input 
            value={this.state.filterText}
            onChange={this.onChangeFilterText}
            name={"filter"} 
            id={"filter"} 
            placeholder={"Filter by name or phone"}></input>
            <ul className={"list"}>
                <li>
                    <span  className={"name name1"}>Name</span>
                    <span  className={"phone phone1"}>Phone</span>
                    <span className={"clearfix"}></span>
                </li>
            </ul>
            <ul className={"list"}>
                {

                    filteredContacts.map(contact=>{
                        return(
                            <li key={contact.phone}>
                            <span className={"name"}>{contact.name}</span>
                            <span className={"phone"}>{contact.phone}</span>
                            <span className={"clearfix"}></span>
                            </li>
                        )
                    })
                }
                
            </ul>

            </div>
        );
    }
}
export default List;