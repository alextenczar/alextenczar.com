import '../../scss/App.scss';
import '../../scss/contact.scss';
import React, { Component } from 'react';

class Contact extends Component {
    render () {
        return (
            <div id="Contact">
                    <div id="message">
                    <p>i would love to hear from you!</p>
                    <p><a href="https://www.linkedin.com/in/alexander-tenczar/">linkedin</a>, <a href="https://github.com/alextenczar">github</a></p>
                    
                </div>
            
                <form id="contact-form" action="https://formspree.io/f/mvovvlro" method="POST">
                    <div className="form-group">
                        <input type="text"  name="name" className="form-control" placeholder="name" required/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="_replyto" className="form-control" aria-describedby="emailHelp" placeholder="email" required/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" rows="10" placeholder="message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Contact;