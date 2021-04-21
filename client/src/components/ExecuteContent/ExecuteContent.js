import axios from 'axios';
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import './ExecuteContent.css';

import TestList from './TestList/TestList';
import TestConfig from './TestConfig/TestConfig';

export default class ExecuteContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentTest: {}
        };
    }

    handleTestItemClick = (TestID) => {
        // Get Test and send it to <TestConfig />
        axios.get(`http://localhost:4000/test/${TestID}`)
            .then(results => {
                this.setState({currentTest: results.data});
            })
            .catch(err => {
                console.log(err);
            });
    }

    render(){
        return(
            <Row className="execute-content-row">
                <TestList currentTest={this.state.currentTest} handleTestItemClick={this.handleTestItemClick}/>
                <TestConfig test={this.state.currentTest}/>
            </Row>
        );
    }
}