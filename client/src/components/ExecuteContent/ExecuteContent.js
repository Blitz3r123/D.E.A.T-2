import React, { Component } from 'react';
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { AddOutline, TrashOutline } from 'react-ionicons';

import './ExecuteContent.css';

import TestList from './TestList/TestList';

export default class ExecuteContent extends Component{
    render(){
        return(
            <Row className="execute-content-row">
                <TestList />
                
            </Row>
        );
    }
}