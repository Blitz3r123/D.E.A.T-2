import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class NavMenu extends Component{
    render(){
        return(
            <ListGroup>
                <ListGroup.Item>Home</ListGroup.Item>
                <ListGroup.Item>Create</ListGroup.Item>
                <ListGroup.Item>Analyse</ListGroup.Item>
            </ListGroup>
        );
    }
}