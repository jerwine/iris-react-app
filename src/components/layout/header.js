import { Link } from "react-router-dom";
import React, { Component } from "react";


class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<Link className="navbar-brand" href="#">Home</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav mr-auto">
					</ul>
				</div>
			</nav>

		);
	}
}

export default Header;