import react, { Component } from 'react';
import { ArrowForwardOutline } from 'react-ionicons';

import EmptyImage from './../../assets/EmptyExistingRowImage.jpg';

export default class CreateTestContent extends Component {
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
                        placeholder="Enter a test name"
                        style={{
                            outline: 'none',
                            border: '1px solid #eee',
                            padding: '1vh 1vw',
                            marginRight: '1vw'
                        }}/>
                    <ArrowForwardOutline color="#28a745"/>
                </div>

            </div>
        );
    }
}