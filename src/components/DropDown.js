import React, { Component } from 'react';
import '../App.css';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class Card extends Component {

	constructor(){
		super();

		this.state = {
			isModalOpen: false
		};
		this.showMenu =  this.showMenu.bind(this);
	}
	showMenu() {
			this.setState({
		        isModalOpen: !this.state.isModalOpen
		     });
	}
	render(){
		return(
			<div>
				<button className="menuBtn" onClick={this.showMenu}>
					<span>Filter By Region</span> 
					<ArrowDropDownIcon/>
				</button>
				{
					this.state.isModalOpen 
					? (
						<div className="menu">
							<button>Africa</button>
							<button>America</button>
							<button>Asia</button>
							<button>Europe</button>
							<button>Oceania</button>
						</div>
					)
					: (
						null
					)
				}
			</div>
		);
	}
}

export default Card;