import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { HomeOutline, CreateOutline, StatsChartOutline } from 'react-ionicons';
import { Link } from 'react-router-dom';

import './../css/NavMenu.css';

export default class NavMenu extends Component{
    render(){
        return(
            <ListGroup className='list-group-unique'>
                <ListGroup.Item>
                    <Link to="/" className="navmenu-link">
                        <HomeOutline/>
                        <span style={{ marginLeft: 10 }}>Home</span>
                    </Link>
                </ListGroup.Item>
                
                <ListGroup.Item>
                    <Link to="/create" className="navmenu-link">
                        <CreateOutline/>
                        <span style={{ marginLeft: 10 }}>Create</span>
                    </Link>
                </ListGroup.Item>
                
                <ListGroup.Item>
                    <Link to="/analyse" className="navmenu-link">
                        <StatsChartOutline/>
                        <span style={{ marginLeft: 10 }}>Analyse</span>
                    </Link>
                </ListGroup.Item>
            </ListGroup>
        );
    }
}