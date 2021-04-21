import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { TrashOutline } from 'react-ionicons';

import './ParticipantListItem.css';

export default class ParticipantListItem extends Component{
    render(){
        return(
            <ListGroup.Item className="participant-list-item">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>P</span>
                    <span>Pub One</span>
                    <TrashOutline className="delete-participant-button" />
                </div>
            </ListGroup.Item>
        );
    }
}