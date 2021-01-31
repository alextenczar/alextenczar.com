import '../../scss/App.scss';
import '../../scss/contact.scss';
import React, { Component } from 'react';

class Contact extends Component {
    render () {
        return (
            <div id="Contact">
                    <div id="message">
                    <p><a href="https://www.linkedin.com/in/alexander-tenczar/" target="_blank" rel="noopener noreferrer">linkedin</a>, <a href="https://github.com/alextenczar" target="_blank" rel="noopener noreferrer">github</a></p>
                    <p>i would love to hear from you!</p>
                </div>
            
                <form id="contact-form" action="https://formspree.io/f/mvovvlro" target="_blank" rel="noopener noreferrer" method="POST">
                    <div className="form-group">
                        <input type="text"  name="name" className="form-control" placeholder="name" required/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="_replyto" className="form-control" aria-describedby="emailHelp" placeholder="email" required/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" rows="10" placeholder="message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
            </div>
        );
    }
}

export default Contact;