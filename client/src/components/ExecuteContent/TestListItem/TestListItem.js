import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { TrashOutline } from 'react-ionicons';

export default class TestListItem extends Component{
    render(){
        return(
            <ListGroup.Item>
                <div className="test-list-item">
                    <span>{this.props.testname}</span>
                    <TrashOutline className="delete-test-button" />
                </div>
            </ListGroup.Item>
        );
    }
}