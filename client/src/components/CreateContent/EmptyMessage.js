import react, { Component } from 'react';
import { Link } from 'react-router-dom';

import emptyImage from './../../assets/EmptyExistingRowImage2.jpg';

export default class EmptyMessage extends Component{
    render(){
        return(
            <div className="existing-row-empty-message-container">
                <div className="empty-message-container">
                    <img className="existing-row-empty-message-image" src={emptyImage}></img>
                    <p>
                        You don't seem to have any existing tests/participants...Why not create 
                        a <Link className="empty-link" to="/create/publisher">publisher template</Link>, <Link className="empty-link" to="/create/subscriber">subscriber template</Link>, or
                        a <Link className="empty-link" to="/create/test">test</Link>?
                    </p>
                </div>
            </div>
        );
    }
}