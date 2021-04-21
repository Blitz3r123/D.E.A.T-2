import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
	Navbar
} from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import NavMenu from './components/NavMenu/NavMenu';
import MainContent from './components/MainContent/MainContent';
import CreateContent from './components/CreateContent/CreateContent';
import CreateTestContent from './components/CreateTestContent/CreateTestContent';
import ExecuteContent from './components/ExecuteContent/ExecuteContent';
import AnalyseContent from './components/AnalyseContent/AnalyseContent';
import TestSettings from './components/TestSettings/TestSettings';

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
						
						<Route path="/create/test/" component={CreateTestContent}/>

						<Route path="/test/settings/:testid" component={TestSettings}/>

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