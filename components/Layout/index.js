import React from "react";
import PropTypes from "prop-types";
import { Flex, Box, NavLink, Text, Image } from "rebass";
import NavBar from "../NavBar";
const Layout = ({ children, ...props }) => {
	return (
		<div>
			<Flex mb={4} mx={4} mt={4}>
				<Box width={1 / 2} pr={2}>
					<Image
						src="/static/images/netpod_logo.png"
						style={{ width: "120px" }}
					/>
				</Box>
				<Box width={1 / 2}>
					<NavBar />
				</Box>
			</Flex>
			<Flex mx={4}>
				<Box w={1}>{children}</Box>
			</Flex>
		</div>
	);
};

Layout.propTypes = {};

export default Layout;
