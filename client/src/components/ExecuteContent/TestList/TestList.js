import axios from 'axios';

import { Component } from 'react';
import { Card, ListGroup, Button, Modal } from 'react-bootstrap';
import { AddOutline } from 'react-ionicons';

import TestListItem from './TestListItem/TestListItem';

import EmptyImage from './../../../assets/EmptyExistingRowImage2.jpg';

export default class TestList extends Component{

    constructor(props){
        super(props);
        this.state = {
            tests: [],
            show: false,
            testname: ''
        };
    }    

    handleClose = () => {this.setState({show: false})}
    handleOpen = () => {this.setState({show: true})}

    refreshTestList = () => {
        axios.get('http://localhost:4000/tests')
            .then(response => {
                this.setState({tests: response.data});
            })
            .catch(error => {
                console.log(error);
            });
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

    createTest = () => {
        if(this.state.testname.length === 0){
            alert("Test name can't be empty.");
        }else{
            /*
                1. Create test in database
                2. Get key of recently created test
                3. Redirec to /test/settings/:testid
            */

            axios.post('http://localhost:4000/create/test', { testname: this.state.testname })
                .then(response => {
                    if(response.data.type === 'error'){
                        alert(response.data.message);
                    }else{
                        this.refreshTestList();
                        this.handleClose();
                    }
                });
        }
    }

    render(){
        return(
            <Card style={{width: '20vw', minHeight: '88vh', maxHeight: '88vh'}}>

                {/* Modal for adding a test */}
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                >
                    <Modal.Header>Create a Test</Modal.Header>
                    <Modal.Body>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                            <img alt="" src={EmptyImage} />
                            <p style={{textAlign: 'center'}}>Give your test a name:</p>
                            <input 
                                style={{
                                    textAlign: 'center',
                                    border: '1px solid #eee',
                                    borderRadius: '3px',
                                    padding: '1vh 1vw'
                                }} 
                                placeholder="Super cool test name here"
                                onChange={(e) => { this.setState( { testname: e.target.value } ) }}
                                onKeyUp={e => {
                                    if(e.key === 'Enter'){
                                        this.createTest();
                                    }
                                }}
                            ></input>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="secondary">Close</Button>
                        <Button variant="primary" onClick={this.createTest}>Create</Button>
                    </Modal.Footer>
                </Modal>
                {/* End of modal for adding a test */}

                <Card.Header style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>Tests</span>
                    <AddOutline onClick={this.handleOpen} className="add-test-button"/>
                </Card.Header>
                <ListGroup variant="flush" className="test-list">
                    {
                        this.state.tests.map(test => {
                            if(test.TestName === this.props.currentTest.TestName){
                                return <TestListItem 
                                            key={test.TestID} 
                                            test={test} 
                                            handleTestItemClick={this.props.handleTestItemClick} 
                                            active={true}
                                            refreshTestList={this.refreshTestList} 
                                        />
                            }else{
                                return <TestListItem key={test.TestID} test={test} handleTestItemClick={this.props.handleTestItemClick} active={false} />
                            }
                        })
                    }
                    <ListGroup.Item>
                        <Button onClick={this.handleOpen} style={{width: '110%', marginLeft: '-1.5vw'}}>
                            <AddOutline color="white" />Add Test
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}