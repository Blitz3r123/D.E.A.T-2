import { Component } from 'react';
import { Card } from 'react-bootstrap';

import './ExecuteRow.css';

import TestCard from './../../TestCard/TestCard';
import EmptyTestMessage from './../EmptyTestMessage/EmptyTestMessage';

export default class ExecuteRow extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            tests: [
                // {
                //     id: 1,
                //     title: 'test one',
                //     status: 'standing by'
                // },
                // {
                //     id: 1,
                //     title: 'test two',
                //     status: 'standing by'
                // },
                // {
                //     id: 1,
                //     title: 'test three',
                //     status: 'standing by'
                // },
                // {
                //     id: 1,
                //     title: 'another test',
                //     status: 'standing by'
                // },
                // {
                //     id: 1,
                //     title: 'and another one',
                //     status: 'standing by'
                // }
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

                {
                    this.state.tests.length === 0 ? <EmptyTestMessage /> : null
                }

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