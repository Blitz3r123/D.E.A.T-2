import { Component } from 'react';
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { AddOutline, TrashOutline } from 'react-ionicons';

import TestListItem from './TestListItem/TestListItem';

export default class TestList extends Component{
    render(){
        return(
            <Card style={{width: '20vw', minHeight: '88vh', maxHeight: '88vh'}}>
                <Card.Header style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>Tests</span>
                    <AddOutline className="add-test-button"/>
                </Card.Header>
                <ListGroup variant="flush" className="test-list">
                    <TestListItem testname="test one" active={true}/>
                    <TestListItem testname="test one" />
                    <TestListItem testname="test one" />
                    <TestListItem testname="test one" />
                    <TestListItem testname="test one" />
                    <ListGroup.Item>
                        <Button style={{width: '110%', marginLeft: '-1.5vw'}}>
                            <AddOutline color="white" />Add Test
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}