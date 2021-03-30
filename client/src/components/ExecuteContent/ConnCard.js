import react, { Component } from 'react';
import { Accordion, Card, Button, Badge } from 'react-bootstrap';
import { CaretDownOutline, DesktopOutline, Add, PersonOutline, KeyOutline, WifiOutline, SettingsOutline, SpeedometerOutline, FolderOpenOutline } from 'react-ionicons';
import { Link } from 'react-router-dom';

import './../../css/ExecuteContent/ConnectionsCol.css';

export default class ConnCard extends Component{
    render(){
        return(
            <Accordion>
                <Card>
                    <Card.Body>

                        <div className="test-accordion-shown">
                            <div className="conn-details">
                                <WifiOutline />
                                <p>ConnectionName</p>
                            </div>

                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <CaretDownOutline className="conn-accordion-show-button" />
                            </Accordion.Toggle>
                        </div>

                        <Accordion.Collapse eventKey="0">
                            <div className="conn-accordion-hidden-container">
                                <div className="conn-details-container">

                                    <div className="conn-detail-container">
                                        <DesktopOutline />
                                        <span>hostname.city.ac.uk</span>
                                    </div>

                                    <div className="conn-detail-container">
                                        <PersonOutline />
                                        <span>bobismyusername</span>
                                    </div>

                                    <div className="conn-detail-container">
                                        <KeyOutline />
                                        <span>bobisnotmypassword</span>
                                    </div>

                                </div>
                                <div className="conn-actions-container">
                                    <Link to="/create/connection/1" className="conn-action-link">
                                        <SettingsOutline color="grey" title="Edit Connection Details"/>
                                    </Link>
                                    <Link to="/test-connection/1" className="conn-action-link">
                                        <SpeedometerOutline color="#28a745" title="Test Connection"/>
                                    </Link>
                                    <Link to="/view-files/1" className="conn-action-link">
                                        <FolderOpenOutline color="#007bff" title="View Files"/>
                                    </Link>
                                </div>
                            </div>
                        </Accordion.Collapse>

                    </Card.Body>
                </Card>
            </Accordion>
        );
    }
}