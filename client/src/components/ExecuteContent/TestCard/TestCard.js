import react, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { ListOutline, GridOutline, CaretDownOutline, DesktopOutline, FolderOpenOutline, SettingsOutline, PlayOutline, PencilOutline, Play, Settings } from 'react-ionicons';
import { Link } from 'react-router-dom';

export default class TestCard extends Component{
    render(){
        return(
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
        );
    }
}