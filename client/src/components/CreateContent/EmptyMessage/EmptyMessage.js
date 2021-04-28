import { Component } from 'react';
import { Link } from 'react-router-dom';

import emptyImage from './../../../assets/EmptyExistingRowImage2.jpg';

export default class EmptyMessage extends Component{
    render(){
        return(
            <div className="existing-row-empty-message-container">
                <div className="empty-message-container">
                    <img alt="" className="existing-row-empty-message-image" src={emptyImage}></img>
                    <p>
                        You don't seem to have any existing tests... Why not <Link className="empty-link" to="/create/test">create one</Link>?
                    </p>
                </div>
            </div>
        );
    }
}