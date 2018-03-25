import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "rebass";

class NavBar extends Component {
	render() {
		return (
			<nav>
				<NavLink href="#!" children="Login" />
			</nav>
		);
	}
}

NavBar.propTypes = {};

export default NavBar;
