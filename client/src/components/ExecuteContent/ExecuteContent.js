import React, { Component } from 'react';
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { AddOutline, TrashOutline } from 'react-ionicons';

import './ExecuteContent.css';

import TestList from './TestList/TestList';
import TestConfig from './TestConfig/TestConfig';

export default class ExecuteContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentTest: 'test one'
        };
    }

    handleTestItemClick = () => {
        console.log('testname');
    }

    render(){
        return(
            <Row className="execute-content-row">
                <TestList handleTestItemClick={this.handleTestItemClick}/>
                <TestConfig testname={this.state.currentTest}/>
            </Row>
        );
    }
}