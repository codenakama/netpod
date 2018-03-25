// this file is loaded before components are rendered
/* eslint-disable */
import babelPolyfill from "babel-polyfill";
/* eslint-enable */
import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, injectGlobal } from "styled-components";
import { Provider } from "rebass";

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

console.log(Provider);
class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props =>
			sheet.collectStyles(<App {...props} />)
		);
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<title>Net Pod - Dashboard</title>
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					<meta charSet="utf-8" />
					{/* <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
            async
            rel="stylesheet"
          /> */}
					<meta name="viewport" content="width=device-width" />

					{this.props.styleTags}
				</Head>
				<body>
					<Provider>
						<Main />
					</Provider>
					<NextScript />
				</body>
			</html>
		);
	}
}

export default MyDocument;
