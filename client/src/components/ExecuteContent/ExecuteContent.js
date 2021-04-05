import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import TestsCol from './TestsCol/TestsCol';
import ConnectionsCol from './ConnectionsCol/ConnectionsCol';

import './ExecuteContent.css';

export default class ExecuteContent extends Component{
    render(){
        return(
            <Row className="execute-content-row">
                <Col>
                    <TestsCol />
                </Col>
                <Col className="connections-col-container">
                    <ConnectionsCol />
                </Col>
            </Row>
        );
    }
}