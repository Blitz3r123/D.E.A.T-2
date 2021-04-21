import axios from 'axios';

import { Component } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { AddOutline } from 'react-ionicons';

import TestListItem from './TestListItem/TestListItem';

export default class TestList extends Component{

    constructor(props){
        super(props);
        this.state = {
            tests: []
        };
    }    

    componentDidMount(){
        axios.get('http://localhost:4000/tests')
            .then(response => {
                this.setState({tests: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        return(
            <Card style={{width: '20vw', minHeight: '88vh', maxHeight: '88vh'}}>
                <Card.Header style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>Tests</span>
                    <AddOutline className="add-test-button"/>
                </Card.Header>
                <ListGroup variant="flush" className="test-list">
                    {
                        this.state.tests.map(test => {
                            if(test.TestName === this.props.currentTest.TestName){
                                return <TestListItem key={test.TestID} test={test} handleTestItemClick={this.props.handleTestItemClick} active={true} />
                            }else{
                                return <TestListItem key={test.TestID} test={test} handleTestItemClick={this.props.handleTestItemClick} active={false} />
                            }
                        })
                    }
                    <ListGroup.Item>
                        <Button style={{width: '110%', marginLeft: '-1.5vw'}}>
                            <AddOutline color="white" />Add Test
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}