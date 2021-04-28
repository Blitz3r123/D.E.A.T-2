import { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class ParticipantSettings extends Component{
    render(){
        return(
            <Card style={{maxHeight: '76.5vh'}}>
                <Card.Header>Pub One</Card.Header>
                <div style={{overflowY: 'scroll'}}>
                    participant settings here
                </div>
            </Card>
        );
    }
}