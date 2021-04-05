import React, { Component } from 'react';
import { Row, Col, Card, Accordion, Button } from 'react-bootstrap';

import './AnalyseContent.css';
import './../../Global.css';

import TestCard from './TestCard/TestCard';

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

                            <TestCard added={false}/>
                            <TestCard added={false}/>
                            <TestCard added={false}/>
                            <TestCard added={false}/>
                            <TestCard added={false}/>
                            <TestCard added={false}/>

                        </Card.Body>

                    </Card>

                </Col>
                <Col className="analyse-added-tests-list-container" style={{marginRight: '2vw'}}>
                    <Card>

                        <Card.Header className="space-between">
                            <span style={{fontWeight: 'bold'}}>Tests for Analysis</span>
                            <input id="completed-test-search-input" type="text" placeholder="Search for a test"></input>
                        </Card.Header>

                        <Card.Body style={{maxHeight: '78vh', overflowY: 'scroll'}}>

                            <TestCard added={true} />
                            <TestCard added={true} />
                            <TestCard added={true} />
                            <TestCard added={true} />
                            <TestCard added={true} />
                            <TestCard added={true} />
                            <TestCard added={true} />

                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        );
    }
}