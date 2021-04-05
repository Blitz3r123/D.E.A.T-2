import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CloudUploadOutline, CloudDownloadOutline, ConstructOutline } from 'react-ionicons';

export default class CreateRow extends Component{
    render(){
        return(
            <Card className="main-content-card">

                <Card.Header style={{fontWeight: 'bold'}}>
                    Create
                </Card.Header>

                <div className="create-buttons-container">

                    <Button variant="outline-primary" className="create-button" title="Create a new publisher template">
                        <CloudUploadOutline color="#007bff"/>
                        <Link to="/create/publisher">Publisher Template</Link>
                    </Button>

                    <Button variant="outline-primary" className="create-button" title="Create a new subscriber template">
                        <CloudDownloadOutline color="#007bff"/>
                        <Link to="/create/subscriber">Subscriber Template</Link>
                    </Button>

                    <Button variant="outline-primary" className="create-button" title="Create a new test">
                        <ConstructOutline color="#007bff"/>
                        <Link to="/create/test">Test</Link>
                    </Button>

                </div>

            </Card>
        );
    }
}