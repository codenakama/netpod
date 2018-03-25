import React, { Fragment } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Flex, Box, NavLink, Text, Image } from "rebass";

const links = [
	{ href: "/", text: "Home" },
	{ href: "/about", text: "About" },
	{ href: "/dashboard", text: "dashboard", authRequired: true },
	{ href: "/auth/sign-in", text: "Login | Sign up", anonymousOnly: true },
	{ href: "/auth/sign-off", text: "Logout", authRequired: true }
];

function getAllowedLinks(isAuthenticated) {
	return links
		.filter(l => !l.authRequired || (l.authRequired && isAuthenticated))
		.filter(l => !isAuthenticated || (isAuthenticated && !l.anonymousOnly));
}

const Header = ({ isAuthenticated, currentUrl }) => (
	<header>
		<Flex mb={4}>
			<Box width={1 / 2} pr={2}>
				<Image
					src="/static/images/netpod_logo.png"
					style={{ width: "120px" }}
				/>
			</Box>
			<Box width={1 / 2}>
				<Flex justify="flex-end">
					<nav>
						{getAllowedLinks(isAuthenticated).map(l => (
							<Link key={l.href} href={l.href}>
								<NavLink href={l.href} children={l.text} />
							</Link>
						))}
					</nav>
				</Flex>
			</Box>
		</Flex>
	</header>
);

Header.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	currentUrl: PropTypes.string.isRequired
};

export default Header;
