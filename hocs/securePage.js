import React from "react";
import PropTypes from "prop-types";
import NotAuthorized from "../components/NotAuthorized";
import defaultPage from "./defaultPage";
import Router from "next/router";

const securePageHoc = Page =>
	class SecurePage extends React.Component {
		static getInitialProps(ctx) {
			return Page.getInitialProps && Page.getInitialProps(ctx);
		}
		static propTypes = {
			isAuthenticated: PropTypes.bool.isRequired
		};

		componentDidMount() {
			const { isAuthenticated } = this.props;

			if (!isAuthenticated) {
				Router.push("/");
			}
		}

		render() {
			if (!this.props.isAuthenticated) {
				return null;
			}
			return <Page {...this.props} />;
		}
	};

export default Page => defaultPage(securePageHoc(Page));
