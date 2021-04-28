import { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ParticipantListItem from './ParticipantListItem/ParticipantListItem';

import './ParticipantList.css';
import { AddOutline } from 'react-ionicons';

export default class ParticipantList extends Component{
    constructor(props){
        super(props);
        this.state = {
            test: this.props.test,
            participants: [
                {
                    type: 'publisher',
                    name: 'pub one'
                },
                {
                    type: 'subsriber',
                    name: 'sub one'
                },
            ]
        };
    }
    
    render(){
        return(
            <Card>
                <Card.Header>
                    <span>Participants</span>
                </Card.Header>
                
                <ListGroup className="participant-list-container">
                    {
                        this.state.participants.map(p => {
                            return <ParticipantListItem key={p.ParticipantID} participant={p}/>
                        })
                    }
                    <ListGroup.Item className="add-participant-container">
                        <Link 
                            variant="outline-primary" 
                            style={{
                                width: '100%', 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center'
                            }}
                            className="add-participant-button"
                        >
                            <AddOutline color="#007bff" />
                            <Link to={"/add-participant/" + this.state.test.TestID}>Add Participant</Link>
                        </Link>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}