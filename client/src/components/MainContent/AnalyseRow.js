import react, { Component } from 'react';
import { Card } from 'react-bootstrap';

import './../../css/MainContent/AnalyseRow.css';

export default class AnalyseRow extends Component{
    render(){
        return(
        <Card className="main-content-card">
            <Card.Header style={{fontWeight: 'bold'}}>
                Analyse
            </Card.Header>

            <div className="analyse-graphs-container">

                <Card>

                    <Card.Body>
                        <img src="https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg"></img>
                    </Card.Body>

                </Card>

            </div>

        </Card>
        );
    }
}