import react, { Component } from 'react';
import { Accordion, Card, Button, Badge } from 'react-bootstrap';
import { CaretDownOutline, DesktopOutline, Add, PersonOutline, KeyOutline, WifiOutline, SettingsOutline, SpeedometerOutline, FolderOpenOutline } from 'react-ionicons';
import { Link } from 'react-router-dom';

import './../../css/ExecuteContent/ConnectionsCol.css';
import ConnCard from './ConnCard';

export default class ConnectionsCol extends Component{
    render(){
        return(
            <Card>
                
                <Card.Header className="tests-col-card-header">
                    
                    <p>Connections</p>
                    
                    <input type="text" placeholder="Search for a connection"></input>

                </Card.Header>
                
                <Card.Body>
                    
                    <div className="add-test-button-container">
                        <Link className="add-test-button" to="/create/connection">
                            <Add color="white" style={{marginRight: 2}}/>
                            Add Connection
                        </Link>
                    </div>

                    <div className="test-col-accordion-list">

                        <ConnCard />
                        <ConnCard />
                        <ConnCard />
                        <ConnCard />
                        <ConnCard />
                        <ConnCard />

                    </div>

                </Card.Body>
            </Card>
        );
    }
}