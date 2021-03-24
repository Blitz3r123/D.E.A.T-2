import react, { Component } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AddOutline } from 'react-ionicons';

import './../../css/CreateContent/ExistingRow.css';

import TestCard from './../TestCard';
import EmptyMessage from './EmptyMessage';

export default class ExistingRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            tests: [
                {id: 1, title: 'test 1', status: 'standing by'},
                {id: 2, title: 'test 2', status: 'running'},
                {id: 3, title: 'test 3', status: 'complete'},
                {id: 4, title: 'test 4', status: 'standing by'},
                {id: 5, title: 'test 5', status: 'standing by'}
            ],
            publishers: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
                {id: 5}
            ],
            subscribers: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
                {id: 5}
            ]
        };
    }

    render(){
        return(
            <Card>
                <Card.Header style={{fontWeight: 'bold'}} className="existing-row-header">
                    <span>Existing Participants/Tests</span>
                    <Dropdown className="create-dropdown-container">
                        <Dropdown.Toggle variant="primary" className="create-button-dropdown">
                            <AddOutline color="white"/>Create
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className="create-dropdown-item"><Link to="/create/publisher">Publisher</Link></Dropdown.Item>
                            <Dropdown.Item className="create-dropdown-item"><Link to="/create/subscriber">Subscriber</Link></Dropdown.Item>
                            <Dropdown.Item className="create-dropdown-item"><Link to="/create/test">Test</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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