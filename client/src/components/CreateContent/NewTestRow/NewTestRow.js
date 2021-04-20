import axios from 'axios';

import react, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { ArrowForward } from 'react-ionicons';

import './NewTestRow.css';

import NewTestImage from './../../../assets/EmptyExistingRowImage.jpg';

class NewTestRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            testname: ""
        };
    }

    handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    handleClick = () => {
        if(this.state.testname.length == 0){
            alert("Test name can't be empty.");
        }else{
            /*
                1. Create test in database
                2. Get key of recently created test
                3. Redirec to /test/settings/:testid
            */

            axios.post('http://localhost:4000/create/test', { testname: this.state.testname })
                .then(response => {
                    if(response.data.type == 'error'){
                        alert(response.data.message);
                    }else{
                        // 2. Get key of last test insert
                        let TestID = response.data.TestID;
                        // 3. Redirect to /test/settings/:testid
                        this.props.history.push('/test/settings/' + TestID);
                    }
                });
        }
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
                                onKeyDown={this.handleKeyDown}
                                onChange={e => {this.setState({ testname: e.target.value })}}
                            ></input>
                            <ArrowForward onClick={this.handleClick} color='#28a745'/>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default withRouter(NewTestRow);