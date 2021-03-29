import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TestsCol from './ExecuteContent/TestsCol';

import './../css/ExecuteContent.css';

export default class ExecuteContent extends Component{
    render(){
        return(
            <Row className="execute-content-row">
                <Col>
                    <TestsCol />
                </Col>
                <Col>
                    <p>connections</p>
                </Col>
            </Row>
        );
    }
}