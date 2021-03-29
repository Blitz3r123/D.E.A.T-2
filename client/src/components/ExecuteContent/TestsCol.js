import react, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { ListOutline, GridOutline, CaretDownOutline, DesktopOutline, FolderOpenOutline, SettingsOutline, PlayOutline, PencilOutline, Play, Settings } from 'react-ionicons';
import { Link } from 'react-router-dom';

import './../../css/ExecuteContent/TestsCol.css';

export default class TestsCol extends Component{
    render(){
        return(
            <Card>
                
                <Card.Header className="tests-col-card-header">
                    
                    <p>Tests</p>
                    
                    <input type="text" placeholder="Search for a test"></input>
                    
                    <div className="tests-icon-group">
                        <ListOutline color={"grey"}/>
                        <GridOutline color={"grey"} />
                    </div>

                </Card.Header>
                
                <Card.Body>
                    
                    <div className="add-test-button-container">
                        <Link className="add-test-button" to="/create/test">Add Test</Link>
                    </div>

                    <div className="test-col-accordion-list">

                        <Accordion>
                            <Card>
                                <Card.Body>

                                    <div className="test-accordion-shown">
                                        <div className="test-details">
                                            <p>TestName</p>
                                            <p>Pending</p>
                                        </div>

                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            <CaretDownOutline className="test-accordion-show-button" />
                                        </Accordion.Toggle>
                                    </div>

                                    <Accordion.Collapse eventKey="0">
                                        <div className="test-accordion-hidden-container">
                                            <div className="test-actions-container">
                                                <Settings color="grey" title="Edit Test"/>
                                                <Play title="Start Test" color="#28a745"/>
                                            </div>
                                            <div className="test-accordion-hidden">
                                                <div className="test-connection-container">
                                                    <DesktopOutline className="test-connection-icon" />
                                                    <div className="test-connection-details">
                                                        <p>MachineName</p>
                                                        <p>hostname.city.ac.uk</p>
                                                    </div>
                                                </div>
                                                <div className="test-connection-actions-container">
                                                    <PencilOutline title="Edit Connection" style={{marginRight: "1vw"}}/>
                                                    <FolderOpenOutline className="test-connection-folder-icon" title="View Files" />
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Collapse>

                                </Card.Body>
                            </Card>
                        </Accordion>

                    </div>

                </Card.Body>
            </Card>
        );
    }
}