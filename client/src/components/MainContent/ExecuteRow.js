import react, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

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

                <Card>
                    <Card.Body className="test-container">
                        <div className="test-title">

                        </div>
                        <div className="test-actions">

                        </div>
                    </Card.Body>
                </Card>

            </div>

        </Card>
        );
    }
}