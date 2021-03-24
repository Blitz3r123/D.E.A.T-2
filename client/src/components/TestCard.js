import react, { Component } from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CogOutline, PlayOutline } from 'react-ionicons';

export default class TestCard extends Component{
    render(){
        return(
            <Card className="test-card">
                <Card.Body className="test-container">
                    <div className="test-title">
                        {this.props.test.title}
                        <Badge pill variant="secondary">Standing by</Badge>
                    </div>
                    <div className="test-actions">

                        <Link to={"create/test/" + this.props.test.id}><CogOutline color="grey" title="Edit Test Settings"></CogOutline></Link>
                        <Link to={"execute/test/" + this.props.test.id}><PlayOutline color="green" title="Start Test"></PlayOutline></Link>

                    </div>
                </Card.Body>
            </Card>
        );
    }
}