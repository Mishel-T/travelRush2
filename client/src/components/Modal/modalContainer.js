import React, { Component } from "react";
import Modal from "../Modal/modal";
import { Redirect } from 'react-router-dom';
// import history from "../../utils/history";


// class component created to handle click event of login form submit. Should redirect to My Account page by the /myaccount route
class ModalContainer extends React.Component {

//event handler functionn on login, need to add in authentication verification (accept token) in handleLogin (need Dupe, holding for now)
    // handleLogin = event => {        
    //     event.preventDefault();
    //     //code to render My Account page using Redirect react router method. Scrapping for now and using history
    //     // console.log("in login event handler")
    //     // this.setState({ toMyAccount: true })
    //     history.push("/myaccount");
    // }
 
    render() {
        //code to render My Account page using Redirect react router method. Scrapping for now and using history
        // if (this.state.toMyAccount === true) {
        //     console.log("login event updated state");
            // return <Redirect to='/myaccount' />
       // }

        return (
            <div>
                <Modal onSubmit={this.handleLogin} />
            </div>
        )
    }
}
export default ModalContainer;
