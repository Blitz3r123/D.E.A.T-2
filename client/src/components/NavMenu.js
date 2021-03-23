import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { HomeOutline, CreateOutline, StatsChartOutline } from 'react-ionicons';
import { Link } from 'react-router-dom';

import './../css/NavMenu.css';

export default class NavMenu extends Component{
    render(){
        return(
            <ListGroup className='list-group-unique'>
                <Link to="/" className="navmenu-link">
                    <ListGroup.Item>
                        <HomeOutline/>
                        <span style={{ marginLeft: 10 }}>Home</span>
                    </ListGroup.Item>
                </Link>
                
                <Link to="/create" className="navmenu-link">
                    <ListGroup.Item>
                        <CreateOutline/>
                        <span style={{ marginLeft: 10 }}>Create</span>
                    </ListGroup.Item>
                </Link>
                
                <Link to="/analyse" className="navmenu-link">
                    <ListGroup.Item>
                        <StatsChartOutline/>
                        <span style={{ marginLeft: 10 }}>Analyse</span>
                   </ListGroup.Item>
                </Link>
            </ListGroup>
        );
    }
}