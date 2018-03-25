import React, { Fragment } from "react";
import PropTypes from "prop-types";
import securePage from "../hocs/securePage";
import { Flex, Box, Text, Button } from "rebass";
import Dropzone from "react-dropzone";
import styled from "styled-components";

const StyledDropzone = styled(Dropzone)`
	width: 100%;
	border: 2px dashed #e9ebeb;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

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
			<Flex justify="flex-end" mb={4}>
				<Button>New site from git</Button>
			</Flex>
			<Flex justify="center">
				<Box w={1 / 2}>
					<StyledDropzone onDrop={onDrop}>
						<Text color="#cdcdcd">Drop files to deploy your app now!</Text>
					</StyledDropzone>
				</Box>
			</Flex>
		</Fragment>
	);
};

Dashboard.propTypes = {
	loggedUser: PropTypes.object.isRequired
};

export default securePage(Dashboard);
