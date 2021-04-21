import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { TrashOutline } from 'react-ionicons';

export default class TestListItem extends Component{
    
    handleClick = () => {
        this.props.handleTestItemClick(this.props.test.TestID);
    }

    render(){
        if(this.props.active){
            return(
                <ListGroup.Item active>
                    <div className="test-list-item" onClick={this.handleClick}>
                        <span>{this.props.test.TestName}</span>
                        <TrashOutline color="white" className="delete-test-button" />
                    </div>
                </ListGroup.Item>
            );
        }else{
            return(
                <ListGroup.Item>
                    <div className="test-list-item" onClick={this.handleClick}>
                        <span>{this.props.test.TestName}</span>
                        <TrashOutline className="delete-test-button" />
                    </div>
                </ListGroup.Item>
            );
        }
    }
}