import react, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Home, CogOutline, PlayOutline } from 'react-ionicons';

import './../../css/MainContent/ExecuteRow.css';

import TestCard from './../TestCard';

export default class ExecuteRow extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            tests: [
                {
                    id: 1,
                    title: 'test one',
                    status: 'standing by'
                },
                {
                    id: 1,
                    title: 'test two',
                    status: 'standing by'
                },
                {
                    id: 1,
                    title: 'test three',
                    status: 'standing by'
                },
                {
                    id: 1,
                    title: 'another test',
                    status: 'standing by'
                },
                {
                    id: 1,
                    title: 'and another one',
                    status: 'standing by'
                }
            ]
        };
    }

    render(){
        return(
        <Card className="main-content-card">
            <Card.Header style={{fontWeight: 'bold'}}>
                Execute
            </Card.Header>

            <div className="execute-buttons-container">

                {/* <Button variant="outline-primary">
                    <Link to="/create/test">Create a Test</Link>
                </Button> */}

                {this.state.tests.map(test => {
                    return <TestCard test={test} />
                })}

            </div>

        </Card>
        );
    }
}