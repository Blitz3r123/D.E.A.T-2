import { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import CompletedRunItem from './CompletedRunItem/CompletedRunItem';

export default class CompletedRunsList extends Component{
    render(){
        return(
            <Card style={{marginTop: '1vh', minHeight: '39vh', maxHeight: '39vh'}}>
                <Card.Header>
                    <span>Completed Runs</span>
                </Card.Header>
                
                <ListGroup className="completed-runs-list-container" style={{overflowY: 'scroll'}}>
                    <CompletedRunItem />
                    <CompletedRunItem />
                    <CompletedRunItem />
                    <CompletedRunItem />
                    <CompletedRunItem />
                    <CompletedRunItem />
                    <CompletedRunItem />
                </ListGroup>
            </Card>
        );
    }
}