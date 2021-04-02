import React, { Component } from 'react';
import { Row, Col, Card, Accordion, Button } from 'react-bootstrap';
import { Add, CaretDownSharp, Remove } from 'react-ionicons';

import './../../css/AnalyseContent.css';
import './../../css/Global.css';

export default class TestCard extends Component{
    render(){
        return(
            <Accordion>
                <Card style={{marginTop: '2vh'}}>
                    <Card.Body>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <span style={{fontSize: '1.2em'}}>TestName</span>
                            {!this.props.added ? <Add color='#28a745' /> : <Remove color='#dc3545'/>}
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
        );
    }
}