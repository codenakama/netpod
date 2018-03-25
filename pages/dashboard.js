import React, { Fragment } from "react";
import PropTypes from "prop-types";
import securePage from "../hocs/securePage";
import { Flex, Box, Text } from "rebass";
import Dropzone from "react-dropzone";

function onDrop(acceptedFiles, rejectedFiles) {
	if (acceptedFiles) {
		uploadFiles(acceptedFiles);
	}
}

async function uploadFiles(files) {
	try {
		let formData = new FormData();

		files.forEach(file => {
			formData.append("avatar", file);
		});

		const response = await fetch("http://localhost:3001/static?id=ricardo", {
			method: "POST",
			headers: {
				Accept: "application/json"
			},
			body: formData
		});
	} catch (error) {
		console.error(error);
	}
}

const Dashboard = ({ loggedUser, ...props }) => {
	return (
		<Fragment>
			<Flex mb={2} justify="center">
				<Text>Drop files to deploy your app now!</Text>
			</Flex>
			<Flex justify="center">
				<Box w={1 / 2}>
					<Dropzone onDrop={onDrop} />
				</Box>
			</Flex>
		</Fragment>
	);
};

Dashboard.propTypes = {
	loggedUser: PropTypes.object.isRequired
};

export default securePage(Dashboard);
