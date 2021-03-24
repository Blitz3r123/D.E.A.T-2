import react, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import './../../css/MainContent/ExecuteRow.css';

import TestCard from './../TestCard';
import EmptyTestMessage from './../MainContent/EmptyTestMessage';

import CogWheel from './../../assets/CogWheel.jpg';
import { CloudyNight } from 'react-ionicons';

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

    componentDidMount(){
        var renderTests = this.state.tests.map(test => {
            return <TestCard test={test} />
        })
    }

    render(){
        return(
        <Card className="main-content-card">
            <Card.Header style={{fontWeight: 'bold'}}>
                Execute
            </Card.Header>

            <div className="execute-buttons-container">

                {/* <EmptyTestMessage /> */}

                {
                    this.state.tests.map(test => {
                        return <TestCard test={test} />
                    })
                }

            </div>

        </Card>
        );
    }
}