import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { Heading, Flex, Box, Lead, Subhead, Text } from "rebass";
import defaultPage from "../hocs/defaultPage";
import Router from "next/router";

class Index extends Component {
	componentDidMount() {
		const { isAuthenticated } = this.props;
		if (isAuthenticated) {
			Router.push("/dashboard");
		}
	}

	render() {
		const { isAuthenticated } = this.props;
		return (
			<Fragment>
				{!isAuthenticated && (
					<div>
						<Flex mb={6}>
							<Box w={3 / 4}>
								<Heading mb={2}>
									Deploy your dotnet core project, pretty fast!
								</Heading>
								<Lead>
									Quickly test a proof of concept, an idea, the next big thing
									in just a couple of minutes.
								</Lead>
							</Box>
						</Flex>
					</div>
				)}
			</Fragment>
		);
	}
}

Index.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired
};

export default defaultPage(Index);
