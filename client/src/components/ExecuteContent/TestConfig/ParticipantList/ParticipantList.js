import { Component } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';

import ParticipantListItem from './ParticipantListItem/ParticipantListItem';

import './ParticipantList.css';
import { AddOutline } from 'react-ionicons';

export default class ParticipantList extends Component{
    render(){
        return(
            <div>
                <Card.Header>
                    <span>Participants</span>
                </Card.Header>
                
                <ListGroup className="participant-list-container">
                    <ParticipantListItem />
                    <ParticipantListItem />
                    <ParticipantListItem />
                    <ParticipantListItem />
                    <ParticipantListItem />
                    <ParticipantListItem />
                    <ParticipantListItem />
                    <ParticipantListItem />
                    <ParticipantListItem />
                    <ParticipantListItem />
                    <ListGroup.Item className="add-participant-container">
                        <Button 
                            variant="outline-primary" 
                            style={{
                                width: '100%', 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center'
                            }}
                        >
                            <AddOutline color="#007bff" />
                            Add Participant
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}