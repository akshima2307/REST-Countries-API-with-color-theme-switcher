import React, { Component } from 'react';
import { Card,CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

import "./Cards.css";

class Countries extends Component{

	constructor(props){
		super(props);
	}
	
	render(){
		const country = this.props.totalCountries.map((e) =>{
			return(
				<Card className="card" key={e.name} >
					<CardImg className="cardImg" src={e.flag} />
					<CardBody>
						<CardTitle className="cardHeading">{e.name}</CardTitle>
						<CardText><span>Population:</span> {e.population}</CardText>
						<CardText><span>Region:</span> {e.region}</CardText>
						<CardText><span>Capital:</span> {e.capital}</CardText>
					</CardBody>
				</Card>
			);
		});


		return(
			<div className="container">
				{country}
			</div>
		);
	}
} 

export default Countries;