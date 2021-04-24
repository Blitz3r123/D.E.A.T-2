import { Component } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AddOutline } from 'react-ionicons';

import './ExistingRow.css';

import TestCard from './../../TestCard/TestCard';
import EmptyMessage from './../EmptyMessage/EmptyMessage';

export default class ExistingRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            tests: [
                // {id: 1, title: 'test 1', status: 'standing by'},
                // {id: 2, title: 'test 2', status: 'running'},
                // {id: 3, title: 'test 3', status: 'complete'},
                // {id: 4, title: 'test 4', status: 'standing by'},
                // {id: 5, title: 'test 5', status: 'standing by'}
            ]
        };
    }

    render(){
        return(
            <Card>
                <Card.Header style={{fontWeight: 'bold'}} className="existing-row-header">
                    <span>Existing Tests</span>
                    <Link to="/create/test">Create a Test</Link>
                </Card.Header>
                <Card.Body>

                    {this.state.tests.length === 0 ? <EmptyMessage /> : null}

                    <div className="existing-row-container">

                        {this.state.tests.map(test => {
                            return <TestCard test={test} />
                        })}

                    </div>

                </Card.Body>
            </Card>
        );
    }
}