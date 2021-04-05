import react, { Component } from 'react';
import { Card } from 'react-bootstrap';

import './AnalyseRow.css';

export default class AnalyseRow extends Component{
    render(){
        return(
        <Card className="main-content-card">
            <Card.Header style={{fontWeight: 'bold'}} className="analyse-header-container">
                Analyse
                <input type="text" placeholder="Search for a test"></input>
            </Card.Header>

            <div className="analyse-graphs-container">

                <Card>
                    <Card.Header className="test-result-header">
                        Test Name
                    </Card.Header>

                    <Card.Body>
                        <img src="https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg"></img>
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Header className="test-result-header">
                        Test Name
                    </Card.Header>

                    <Card.Body>
                        <img src="https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg"></img>
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Header className="test-result-header">
                        Test Name
                    </Card.Header>

                    <Card.Body>
                        <img src="https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg"></img>
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Header className="test-result-header">
                        Test Name
                    </Card.Header>

                    <Card.Body>
                        <img src="https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg"></img>
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Header className="test-result-header">
                        Test Name
                    </Card.Header>

                    <Card.Body>
                        <img src="https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg"></img>
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Header className="test-result-header">
                        Test Name
                    </Card.Header>

                    <Card.Body>
                        <img src="https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg"></img>
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Header className="test-result-header">
                        Test Name
                    </Card.Header>

                    <Card.Body>
                        <img src="https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg"></img>
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Header className="test-result-header">
                        Test Name
                    </Card.Header>

                    <Card.Body>
                        <img src="https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg"></img>
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Header className="test-result-header">
                        Test Name
                    </Card.Header>

                    <Card.Body>
                        <img src="https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg"></img>
                    </Card.Body>

                </Card>

            </div>

        </Card>
        );
    }
}