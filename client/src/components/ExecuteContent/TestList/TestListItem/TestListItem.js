import axios from 'axios';
import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { TrashOutline } from 'react-ionicons';

export default class TestListItem extends Component{
    
    handleClick = () => {
        this.props.handleTestItemClick(this.props.test.TestID);
    }

    deleteTest = () => {
        if(window.confirm('Are you sure you want to delete ' + this.props.test.TestName)){
            axios.get('http://localhost:4000/delete-test/' + this.props.test.TestID)
                .then(result => {
                    this.props.refreshTestList();
                })
                .catch(err => {
                    if(err){
                        console.log(err);
                    }
                })
        }
    }

    render(){
        if(this.props.active){
            return(
                <ListGroup.Item active>
                    <div className="test-list-item" onClick={this.handleClick}>
                        <span>{this.props.test.TestName}</span>
                        <div onClick={() => {this.deleteTest()}} >
                            <TrashOutline color="white" className="delete-test-button"/>
                        </div>
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