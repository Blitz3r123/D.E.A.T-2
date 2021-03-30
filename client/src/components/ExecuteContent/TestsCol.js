import react, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { ListOutline, GridOutline, Add, CaretDownOutline, DesktopOutline, FolderOpenOutline, SettingsOutline, PlayOutline, PencilOutline, Play, Settings } from 'react-ionicons';
import { Link } from 'react-router-dom';

import './../../css/ExecuteContent/TestsCol.css';

import TestCard from './TestCard';

export default class TestsCol extends Component{
    render(){
        return(
            <Card>
                
                <Card.Header className="tests-col-card-header">
                    
                    <p>Tests</p>
                    
                    <input type="text" placeholder="Search for a test"></input>

                </Card.Header>
                
                <Card.Body>
                    
                    <div className="add-test-button-container">
                        <Link className="add-test-button" to="/create/test">
                            <Add color="white" style={{marginRight: 2}}/>
                            Add Test
                        </Link>
                    </div>

                    <div className="test-col-accordion-list">

                        <TestCard />
                        <TestCard />
                        <TestCard />
                        <TestCard />
                        <TestCard />
                        <TestCard />

                    </div>

                </Card.Body>
            </Card>
        );
    }
}