import react, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { ArrowForward } from 'react-ionicons';
import { Link } from 'react-router-dom';

import './NewTestRow.css';

import NewTestImage from './../../../assets/EmptyExistingRowImage.jpg';

export default class NewTestRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            testname: ""
        };
    }

    handleChange = event => {
        this.setState({ testname: event.target.value });
    }

    render(){
        return(
            <Card style={{marginTop: '2vh'}}>
                <Card.Header style={{fontWeight: 'bold'}}>New Test</Card.Header>
                <Card.Body className="new-test-container">
                    <div className="new-test-form-container">
                        <img src={NewTestImage}></img>
                        <p>Create a new test by giving it a name...</p>
                        <div className="new-test-form">
                            <input 
                                type="text" 
                                placeholder="Test Name Here" 
                                value={this.state.testname}
                                onChange={this.handleChange}
                            ></input>
                            <Link to={"/create/test/" + this.state.testname}>
                                <ArrowForward color='#28a745'/>
                            </Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}