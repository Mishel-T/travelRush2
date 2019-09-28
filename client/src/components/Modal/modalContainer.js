import React, { Component } from "react";
import Modal from "../Modal/modal";
import { Redirect } from 'react-router-dom';

// class component created to handle click event of login form submit. Should redirect to My Account page by the /myaccount route
// /myaccount route still to be set up
class ModalContainer extends React.Component {
    state = {
        toMyAccount: false,
    }

    handleSubmit = event => {
        console.log('called');
        
        event.preventDefault();
        console.log("in login event handler")
        this.setState({ toMyAccount: true })
    }
 
    render() {
        if (this.state.toMyAccount === true) {
            console.log("login event updated state");
            
            // return <Redirect to='/myaccount' />
        }

        return (
            <div>
                <Modal onSubmit={this.handleSubmit} />
            </div>
        )
    }
}
export default ModalContainer;
