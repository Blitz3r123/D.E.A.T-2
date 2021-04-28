import { Component } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AddOutline } from 'react-ionicons';
import axios from 'axios';

import './ExistingRow.css';

import TestCard from './../../TestCard/TestCard';
import EmptyMessage from './../EmptyMessage/EmptyMessage';

export default class ExistingRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            tests: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:4000/tests')
            .then(results => {
                this.setState({tests: results.data});
            })
            .catch(err => {
                console.log(err);
            });
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
                            return <TestCard key={test.TestID} test={test} />
                        })}

                        <Card className="test-card" bg="light" text="white">
                            <Card.Body style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Link to="/create/test">Create a New Test</Link>
                            </Card.Body>
                        </Card>

                    </div>

                </Card.Body>
            </Card>
        );
    }
}