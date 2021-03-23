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
import ExecuteContent from './components/ExecuteContent';
import AnalyseContent from './components/AnalyseContent';

export default class App extends Component {
	render(){
		return(
		<Container fluid>
			<Navbar bg="primary" fixed="top" sticky="top">
				<Navbar.Brand style={{color: 'white', paddingLeft: '2vw'}}>D.E.A.T 2</Navbar.Brand>
			</Navbar>
			<Row>
				<Col sm={2} style={{paddingRight: 0}}>
					<NavMenu />
				</Col>
				
				<Col sm={10} style={{paddingLeft: 0, paddingRight: 0}}>
					<Switch>
						<Route exact path="/">
							<MainContent />
						</Route>

						<Route exact path="/create">
							<CreateContent />
						</Route>

						<Route exact path="/execute">
							<ExecuteContent />
						</Route>

						<Route exact path="/analyse">
							<AnalyseContent />
						</Route>
					</Switch>
				</Col>
			</Row>
		</Container>	
		);
	}
}