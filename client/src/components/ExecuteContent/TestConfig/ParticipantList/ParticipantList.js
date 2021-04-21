import { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import ParticipantListItem from './ParticipantListItem/ParticipantListItem';

export default class ParticipantList extends Component{
    render(){
        return(
            <div>
                <Card.Header>
                    <span>Participants</span>
                </Card.Header>
                
                <ListGroup>
                    <ParticipantListItem />
                </ListGroup>
            </div>
        );
    }
}