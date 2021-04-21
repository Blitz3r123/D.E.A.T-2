import { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import CogWheel from './../../../assets/CogWheel.jpg';
import ParticipantList from './ParticipantList/ParticipantList';

export default class TestConfig extends Component{
    constructor(props){
        super(props);
        this.state = {
            test: this.props.test
        };
    }

    componentDidUpdate(){
        if(this.state.test !== this.props.test){
            this.setState({test: this.props.test});
        }
    }

    render(){
        if(this.state.test.TestName === undefined){
            return(
                <Card style={{marginLeft: '1vw', width: '62vw', minHeight: '88vh', maxHeight: '88vh', overflowY: 'scroll'}}>

                    <Card.Header style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span>{this.props.test.TestName}</span>
                    </Card.Header>
                    <div 
                        style={{
                            display: 'flex', 
                            justifyContent: 'space-evenly', 
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <img style={{width: '50%', marginTop: '10vh'}} alt="" src={CogWheel}/>
                        <p style={{color: 'grey'}}>Select a test from the left to view it's settings.</p>
                    </div>
                </Card>
            );                        
        }else{
            return(
                <Card style={{marginLeft: '1vw', width: '62vw', minHeight: '88vh', maxHeight: '88vh', overflowY: 'scroll'}}>

                    <Card.Header style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span style={{fontSize: '1.1em', fontWeight: 'bold'}}>{this.state.test.TestName}</span>
                    </Card.Header>

                    <Row style={{padding: '2vh 1vw'}}>
                        <Col xs={4}>
                            <Card>

                                <ParticipantList />

                            </Card>
                        </Col>

                        <Col>
                            <span>col 2</span>
                        </Col>
                    </Row>

                </Card>
            );
        }

    }
}