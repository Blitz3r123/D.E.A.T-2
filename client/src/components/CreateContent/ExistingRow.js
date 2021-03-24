import react, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CogOutline, PlayOutline } from 'react-ionicons';

import './../../css/CreateContent/ExistingRow.css';
import emptyImage from './../../assets/EmptyExistingRowImage2.jpg';

export default class ExistingRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            tests: [
                {id: 1, title: 'test 1'},
                {id: 2, title: 'test 2'},
                {id: 3, title: 'test 3'},
                {id: 4, title: 'test 4'},
                {id: 5, title: 'test 5'}
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
                <Card.Header style={{fontWeight: 'bold'}}>Existing Participants/Tests</Card.Header>
                <Card.Body>

                    {/* <div className="existing-row-empty-message-container">
                        <div className="empty-message-container">
                            <img className="existing-row-empty-message-image" src={emptyImage}></img>
                            <p>
                                You don't seem to have any existing tests/participants...Why not create 
                                a <Link className="empty-link" to="/create/publisher">publisher</Link>, <Link className="empty-link" to="/create/subscriber">subscriber</Link>, or
                                a <Link className="empty-link" to="/create/test">test</Link>?
                            </p>
                        </div>
                    </div> */}

                    <div className="existing-row-container">

                        <Card className="test-card">
                            <Card.Body className="test-container">
                                <div className="test-title">
                                    test title
                                </div>
                                <div className="test-actions">

                                    <Link to={"create/test/" + 1}><CogOutline color="grey" title="Edit Test Settings"></CogOutline></Link>
                                    <Link to={"execute/test/" + 1}><PlayOutline color="green" title="Start Test"></PlayOutline></Link>

                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="test-card">
                            <Card.Body className="test-container">
                                <div className="test-title">
                                    test title
                                </div>
                                <div className="test-actions">

                                    <Link to={"create/test/" + 1}><CogOutline color="grey" title="Edit Test Settings"></CogOutline></Link>
                                    <Link to={"execute/test/" + 1}><PlayOutline color="green" title="Start Test"></PlayOutline></Link>

                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="test-card">
                            <Card.Body className="test-container">
                                <div className="test-title">
                                    test title
                                </div>
                                <div className="test-actions">

                                    <Link to={"create/test/" + 1}><CogOutline color="grey" title="Edit Test Settings"></CogOutline></Link>
                                    <Link to={"execute/test/" + 1}><PlayOutline color="green" title="Start Test"></PlayOutline></Link>

                                </div>
                            </Card.Body>
                        </Card>

                    </div>

                </Card.Body>
            </Card>
        );
    }
}