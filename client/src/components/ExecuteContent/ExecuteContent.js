import React, { Component } from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { AddOutline, TrashOutline } from 'react-ionicons';

import './ExecuteContent.css';

import TestListItem from './TestListItem/TestListItem';

export default class ExecuteContent extends Component{
    render(){
        return(
            <Row className="execute-content-row">
                <Card style={{width: '20vw', minHeight: '88vh', maxHeight: '88vh'}}>
                    <Card.Header style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span>Tests</span>
                        <AddOutline className="add-test-button"/>
                    </Card.Header>
                    <ListGroup variant="flush" className="test-list">
                        <TestListItem testname="test one" testid="" active={true}/>
                        <TestListItem testname="test one" />
                        <TestListItem testname="test one" />
                        <TestListItem testname="test one" />
                        <TestListItem testname="test one" />
                        <TestListItem testname="test one" />
                        <TestListItem testname="test one" />
                        <TestListItem testname="test one" />
                        <TestListItem testname="test one" />
                        <TestListItem testname="test one" />
                        <TestListItem testname="test one" />
                        <TestListItem testname="test one" />
                        <TestListItem testname="test one" />
                        <TestListItem testname="test one" />
                        <TestListItem testname="test one" />
                        <TestListItem testname="test one" />
                    </ListGroup>
                </Card>
            </Row>
        );
    }
}