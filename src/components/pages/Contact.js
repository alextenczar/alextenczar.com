import '../../scss/App.scss';
import '../../scss/contact.scss';
import React, { Component } from 'react';

class Contact extends Component {
    render () {
        return (
            <div id="Contact">
                    <div id="message">
                    <p>i would love to hear from you!</p>
                    <p><a href="mailto: alextenczar@gmail.com">email</a>, <a href="https://www.linkedin.com/in/alexander-tenczar/">linkedin</a>, <a href="https://github.com/alextenczar">github</a></p>
                    
                </div>
            
                <form id="contact-form"  method="POST">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="name"/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="10" placeholder="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

}

export default Contact;