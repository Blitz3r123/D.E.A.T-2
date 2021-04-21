import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

import './CompletedRunItem.css';

export default class CompletedRunItem extends Component{
    render(){
        return(
            <ListGroup.Item className="completed-run-list-item">
                <span>Run #3234</span>
            </ListGroup.Item>
        );
    }
}