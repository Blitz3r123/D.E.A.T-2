import React, { Component } from 'react';
import { Row, Col, Card, Accordion, Button } from 'react-bootstrap';
import { Add, CaretDownSharp } from 'react-ionicons';

import './../css/AnalyseContent.css';
import './../css/Global.css';

import TestCard from './AnalyseContent/TestCard';

export default class AnalyseContent extends Component{
    render(){
        return(
            <Row className="analyse-content-row">
                <Col className="analyse-tests-list-container">

                    <Card>

                        <Card.Header className="space-between">
                            <span style={{fontWeight: 'bold'}}>Completed Tests</span>
                            <input id="completed-test-search-input" type="text" placeholder="Search for a test"></input>
                        </Card.Header>

                        <Card.Body style={{maxHeight: '78vh', overflowY: 'scroll'}}>

                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />

                        </Card.Body>

                    </Card>

                </Col>
                <Col className="analyse-added-tests-list-container">
                    
                </Col>
            </Row>
        );
    }
}