import { Component } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { AddOutline } from 'react-ionicons';

import TestListItem from './TestListItem/TestListItem';

export default class TestList extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <Card style={{width: '20vw', minHeight: '88vh', maxHeight: '88vh'}}>
                <Card.Header style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>Tests</span>
                    <AddOutline className="add-test-button"/>
                </Card.Header>
                <ListGroup variant="flush" className="test-list">
                    <TestListItem testname="test one" handleTestItemClick={this.props.handleTestItemClick} active={true}/>
                    <TestListItem testname="test two" handleTestItemClick={this.props.handleTestItemClick}/>
                    <TestListItem testname="test three" handleTestItemClick={this.props.handleTestItemClick}/>
                    <TestListItem testname="test four" handleTestItemClick={this.props.handleTestItemClick}/>
                    <TestListItem testname="test five" handleTestItemClick={this.props.handleTestItemClick}/>
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