import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CreateRow extends Component{
    render(){
        return(
            <Card className="main-content-card">

                <Card.Header style={{fontWeight: 'bold'}}>
                    Create
                </Card.Header>

                <div className="create-buttons-container">

                    <Button variant="outline-primary">
                        <Link to="/create/publisher">Publisher</Link>
                    </Button>

                    <Button variant="outline-primary">
                        <Link to="/create/subscriber">Subscriber</Link>
                    </Button>

                    <Button variant="outline-primary">
                        <Link to="/create/test">Test</Link>
                    </Button>

                </div>

            </Card>
        );
    }
}