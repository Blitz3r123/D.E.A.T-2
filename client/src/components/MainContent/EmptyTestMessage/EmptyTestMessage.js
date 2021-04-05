import react, { Component } from 'react';
import { Link } from 'react-router-dom';

import CogWheel from './../../../assets/CogWheel.jpg';

export default class EmptyTestMessage extends Component{
    render(){
        return(
            <div className="empty-tests-container">
                <img src={CogWheel}></img>
                <p>Looks like you don't have any tests....Why not <Link style={{textDecoration: 'underline'}} to="/create/test">create</Link> one?</p>
            </div>
        );
    }
}