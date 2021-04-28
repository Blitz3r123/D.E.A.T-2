import { Component } from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Cog, Play } from 'react-ionicons';

export default class TestCard extends Component{
    constructor(props){
        super(props);
        if(this.props.test.status === 'standing by'){
            this.props.test.variant = 'warning';
        }else if(this.props.test.status === 'running'){
            this.props.test.variant = 'success';
        }else{
            this.props.test.variant = 'danger';
        }
    }

    render(){
        return(
            <Card className="test-card" bg="light">
                <Card.Body className="test-container">
                    <div className="test-title">
                        {this.props.test.TestName}
                        <Badge pill variant={this.props.test.variant}>{this.props.test.status}</Badge>
                    </div>
                    <div className="test-actions">

                        <Link to={"create/test/" + this.props.test.TestID}><Cog color="grey" title="Edit Test Settings"></Cog></Link>
                        <Link to={"execute/test/" + this.props.test.TestID}><Play color="green" title="Start Test"></Play></Link>

                    </div>
                </Card.Body>
            </Card>
        );
    }
}