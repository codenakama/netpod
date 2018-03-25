import React, { Fragment } from "react";
import Head from "next/head";
import Router from "next/router";
import PropTypes from "prop-types";
import Header from "../components/Header";
import { getUserFromServerCookie, getUserFromLocalCookie } from "../utils/auth";
import { Container } from "rebass";
export default Page =>
	class DefaultPage extends React.Component {
		static getInitialProps(ctx) {
			const loggedUser = process.browser
				? getUserFromLocalCookie()
				: getUserFromServerCookie(ctx.req);
			const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);
			return {
				...pageProps,
				loggedUser,
				currentUrl: ctx.pathname,
				isAuthenticated: !!loggedUser
			};
		}

		constructor(props) {
			super(props);

			this.logout = this.logout.bind(this);
		}

		logout(eve) {
			if (eve.key === "logout") {
				Router.push(`/?logout=${eve.newValue}`);
			}
		}

		componentDidMount() {
			window.addEventListener("storage", this.logout, false);
		}

		componentWillUnmount() {
			window.removeEventListener("storage", this.logout, false);
		}

		render() {
			return (
				<Container mx={4} mt={4}>
					<Header {...this.props} />
					<Page {...this.props} />
				</Container>
			);
		}
	};
