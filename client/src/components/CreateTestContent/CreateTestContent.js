import react, { Component } from 'react';
import { ArrowForwardOutline } from 'react-ionicons';
import { Redirect } from 'react-router-dom';

import EmptyImage from './../../assets/EmptyExistingRowImage.jpg';

import './CreateTestContent.css';

export default class CreateTestContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            testname: ''
        };
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
                        onChange={e => {
                            this.setState({testname: e.target.value});
                        }}
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