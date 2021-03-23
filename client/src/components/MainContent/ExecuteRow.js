import react, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Home, CogOutline, PlayOutline } from 'react-ionicons';

import './../../css/MainContent/ExecuteRow.css';

export default class ExecuteRow extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            tests: [
                {
                    id: 1,
                    title: 'test one'
                },
                {
                    id: 1,
                    title: 'test two'
                },
                {
                    id: 1,
                    title: 'test three'
                },
                {
                    id: 1,
                    title: 'another test'
                },
                {
                    id: 1,
                    title: 'and another one'
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
                    return <Card className="test-card">
                                <Card.Body className="test-container">
                                    <div className="test-title">
                                        {test.title}
                                    </div>
                                    <div className="test-actions">

                                        <Link to={"create/test/" + test.id}><CogOutline color="grey" title="Edit Test Settings"></CogOutline></Link>
                                        <Link to={"execute/test/" + test.id}><PlayOutline color="green" title="Start Test"></PlayOutline></Link>

                                    </div>
                                </Card.Body>
                            </Card>
                })}


                <Card className="test-card">
                    <Card.Body className="test-container">
                        <div className="test-title">
                            another test
                        </div>
                        <div className="test-actions">

                            <Link to="create/test/12"><CogOutline color="grey" title="Edit Test Settings"></CogOutline></Link>
                            <Link to="execute/test/12"><PlayOutline color="green" title="Start Test"></PlayOutline></Link>

                        </div>
                    </Card.Body>
                </Card>

            </div>

        </Card>
        );
    }
}