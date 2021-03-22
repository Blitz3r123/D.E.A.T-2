import React, { Component } from 'react';
import {
	Container,
	Row,
	Col
} from 'react-bootstrap';

export default class App extends Component {
	render(){
		return(
		<Container>
			<Row>
				<Col sm={4}>1 of 2</Col>
				<Col sm={8}>2 of 2</Col>
			</Row>
		</Container>	
		);
	}
}