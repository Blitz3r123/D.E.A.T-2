import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './../css/MainContent.css';

import CreateRow from './MainContent/CreateRow';

export default class MainContent extends Component{
    render(){
        return(
            <div style={{padding: 10}}>

                {/* Create Row */}
                <CreateRow />

                {/* Execute Row */}
                <Card className="main-content-card">
                    <Card.Header>Execute</Card.Header>

                    <div className="create-buttons-container">

                        <Button variant="outline-primary">
                            <Link to="/create/test">Create a Test</Link>
                        </Button>

                    </div>

                </Card>

                {/* Analyse Row */}
                <Card className="main-content-card">
                    <Card.Header>Analyse</Card.Header>

                </Card>
                

            </div>
        );
    }
}