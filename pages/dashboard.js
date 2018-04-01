import React, { Fragment } from "react";
import PropTypes from "prop-types";
import securePage from "../hocs/securePage";
import { Flex, Box, Text, Button } from "rebass";
import Dropzone from "react-dropzone-folder";
import styled from "styled-components";
import JSZip from "jszip";

const StyledDropzone = styled(Dropzone)`
	width: 100%;
	border: 2px dashed #e9ebeb;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function onDrop(acceptedFiles, rejectedFiles, uniqueId) {
	console.log(acceptedFiles);
	if (acceptedFiles) {
		uploadFiles(acceptedFiles, uniqueId);
	}
}

async function uploadFiles(files, uniqueId) {
	var zip = new JSZip();

	try {
		files.forEach(file => {
			zip.file(file.fullPath, file.fileObject);
		});

		console.log(zip);

		const zippedFile = await zip.generateAsync({ type: "blob" });

		let formData = new FormData();
		formData.append("files", zippedFile);
		const response = await fetch(
			`http://localhost:3001/deployments?id=${uniqueId}`,
			{
				method: "POST",
				headers: {
					Accept: "application/json"
				},
				body: formData
			}
		);

		console.log(await response.json());
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
					<StyledDropzone
						onDrop={(acceptedFiles, rejectedFiles) =>
							onDrop(acceptedFiles, rejectedFiles, loggedUser.at_hash)
						}
						multiple
					>
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
