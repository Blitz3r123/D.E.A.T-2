import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
	Navbar,
	NavbarBrand
} from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import './css/App.css';

import NavMenu from './components/NavMenu';
import MainContent from './components/MainContent';
import CreateContent from './components/CreateContent';
import AnalyseContent from './components/AnalyseContent';

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
					<Switch>
						<Route exact path="/">
							<MainContent />
						</Route>

						<Route path="/create">
							<CreateContent />
						</Route>

						<Route path="/analyse">
							<AnalyseContent />
						</Route>
					</Switch>
				</Col>
			</Row>
		</Container>	
		);
	}
}