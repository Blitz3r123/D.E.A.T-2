import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
	Navbar,
	NavbarBrand
} from 'react-bootstrap';

import './css/App.css';

import NavMenu from './components/NavMenu';
import MainContent from './components/MainContent';

export default class App extends Component {
	render(){
		return(
		<Container fluid>
			<Navbar bg="primary" fixed="top" sticky="top">
				<Navbar.Brand style={{color: 'white'}}>D.E.A.T 2</Navbar.Brand>
			</Navbar>
			<Row>
				<Col sm={2}>
					<NavMenu />
				</Col>
				
				<Col sm={10}>
					<MainContent />
				</Col>
			</Row>
		</Container>	
		);
	}
}