import { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class TestConfig extends Component{
    constructor(props){
        super(props);
        this.state = {
            test: this.props.test
        };
    }

    render(){
        return(
            <Card style={{marginLeft: '1vw', width: '62vw', minHeight: '88vh', maxHeight: '88vh'}}>
                <Card.Header style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>{this.props.test.TestName}</span>
                </Card.Header>
            </Card>
        );
    }
}