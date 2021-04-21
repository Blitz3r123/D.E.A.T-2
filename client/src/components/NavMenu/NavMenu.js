import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { HomeOutline, CreateOutline, StatsChartOutline, PlayOutline } from 'react-ionicons';
import { Link } from 'react-router-dom';

import './NavMenu.css';

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

                <Link to="/execute" className="navmenu-link">
                    <ListGroup.Item>
                        <PlayOutline/>
                        <span style={{ marginLeft: 10 }}>Execute</span>
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