import react, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Home, CogOutline, PlayOutline } from 'react-ionicons';

import './../../css/MainContent/ExecuteRow.css';

export default class ExecuteRow extends Component{
    render(){
        return(
        <Card className="main-content-card">
            <Card.Header>Execute</Card.Header>

            <div className="create-buttons-container">

                {/* <Button variant="outline-primary">
                    <Link to="/create/test">Create a Test</Link>
                </Button> */}

                <Card className="test-card">
                    <Card.Body className="test-container">
                        <div className="test-title">
                            test title that is so long we have to see what happens
                        </div>
                        <div className="test-actions">

                            <Link to="create/test/12"><CogOutline color="grey" title="Edit Test Settings"></CogOutline></Link>
                            <Link to="execute/test/12"><PlayOutline color="green" title="Start Test"></PlayOutline></Link>

                        </div>
                    </Card.Body>
                </Card>

                <Card className="test-card">
                    <Card.Body className="test-container">
                        <div className="test-title">
                            another test
                        </div>
                        <div className="test-actions">

                            <Link to="create/test/12"><CogOutline color="grey" title="Edit Test Settings"></CogOutline></Link>
                            <Link to="execute/test/12"><PlayOutline color="green" title="Start Test"></PlayOutline></Link>

                        </div>
                    </Card.Body>
                </Card>

            </div>

        </Card>
        );
    }
}