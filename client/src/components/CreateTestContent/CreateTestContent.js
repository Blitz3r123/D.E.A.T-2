import axios from 'axios';

import react, { Component } from 'react';
import { ArrowForwardOutline } from 'react-ionicons';

import EmptyImage from './../../assets/EmptyExistingRowImage.jpg';

import './CreateTestContent.css';

export default class CreateTestContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            testname: ''
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
            <div 
                style={{
                    width: '83vw', 
                    marginTop: '1vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '10vh',
                    paddingBottom: '15vh'
                }}
            >
                
                <img src={EmptyImage} style={{width: '70vh', marginBottom: '5vh'}}/>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <input 
                        type="text"
                        onKeyDown={this.handleKeyDown}
                        onChange={e => {this.setState({ testname: e.target.value })}}
                        placeholder="Enter a test name"
                        style={{
                            outline: 'none',
                            border: '1px solid #eee',
                            padding: '1vh 1vw',
                            marginRight: '1vw'
                        }}/>
                    <ArrowForwardOutline className="submit-button" onClick={this.handleClick} color="#28a745"/>
                </div>

            </div>
        );
    }
}