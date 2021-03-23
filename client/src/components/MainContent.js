import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './../css/MainContent.css';

import CreateRow from './MainContent/CreateRow';
import ExecuteRow from './MainContent/ExecuteRow';

export default class MainContent extends Component{
    render(){
        return(
            <div style={{padding: 10, paddingRight: 0, maxWidth: '84vw'}}>

                {/* Create Row */}
                <CreateRow />

                {/* Execute Row */}
                <ExecuteRow />

                {/* Analyse Row */}
                <Card className="main-content-card">
                    <Card.Header>Analyse</Card.Header>

                </Card>
                

            </div>
        );
    }
}