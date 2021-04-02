import React, { Component } from 'react';
import { Row, Col, Card, Accordion, Button } from 'react-bootstrap';
import { Add, CaretDownSharp } from 'react-ionicons';

import './../css/AnalyseContent.css';
import './../css/Global.css';

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

                        <Card.Body>

                            <Accordion>
                                <Card style={{marginTop: '2vh'}}>
                                    <Card.Body>
                                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <span style={{fontSize: '1.2em'}}>TestName</span>
                                            <Add color='#28a745' />
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                <CaretDownSharp />
                                            </Accordion.Toggle>
                                        </div>

                                        <Accordion.Collapse eventKey="0">
                                            <div className="test-summary-container">

                                                <div 
                                                    className="pubsub-container" 
                                                    style={{
                                                        display: 'flex', 
                                                        justifyContent: 'space-evenly', 
                                                        color: 'grey'
                                                    }}
                                                >
                                                    <span>1 Publisher</span>
                                                    <span>1 Subscriber</span>
                                                </div>

                                                <p style={{display: 'flex', justifyContent: 'space-between', color: '#007bff', padding: '0vh 1vw'}}>
                                                    <span>Best Effort</span>
                                                    <span>True</span>
                                                </p>

                                                <p style={{display: 'flex', justifyContent: 'space-between', color: '#007bff', padding: '0vh 1vw'}}>
                                                    <span>Best Effort</span>
                                                    <span>True</span>
                                                </p>

                                                <p style={{display: 'flex', justifyContent: 'space-between', color: '#007bff', padding: '0vh 1vw'}}>
                                                    <span>Best Effort</span>
                                                    <span>True</span>
                                                </p>

                                            </div>
                                        </Accordion.Collapse>

                                    </Card.Body>
                                </Card>
                            </Accordion>

                            

                        </Card.Body>

                    </Card>

                </Col>
                <Col className="analyse-added-tests-list-container">
                    
                </Col>
            </Row>
        );
    }
}