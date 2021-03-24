import react, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './../../css/CreateContent/ExistingRow.css';
import emptyImage from './../../assets/EmptyExistingRowImage2.jpg';

export default class ExistingRow extends Component{
    render(){
        return(
            <Card>
                <Card.Header style={{fontWeight: 'bold'}}>Existing Participants/Tests</Card.Header>
                <Card.Body>

                    <div className="existing-row-empty-message-container">
                        <div className="empty-message-container">
                            <img className="existing-row-empty-message-image" src={emptyImage}></img>
                            <p>
                                You don't seem to have any existing tests/participants...Why not create 
                                a <Link className="empty-link" to="/create/publisher">publisher</Link>, <Link className="empty-link" to="/create/subscriber">subscriber</Link>, or
                                a <Link className="empty-link" to="/create/test">test</Link>?
                            </p>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        );
    }
}