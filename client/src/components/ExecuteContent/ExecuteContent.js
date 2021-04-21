import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

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

    handleTestItemClick = (testname) => {
        this.setState({ currentTest: testname });
    }

    render(){
        return(
            <Row className="execute-content-row">
                <TestList activeTest={this.state.currentTest} handleTestItemClick={this.handleTestItemClick}/>
                <TestConfig testname={this.state.currentTest}/>
            </Row>
        );
    }
}