import React from "react";
import Layout from "../components/Layout";
import { Heading, Flex, Box, Lead, Subhead, Text } from "rebass";
import Dropzone from "react-dropzone";

function onDrop(acceptedFiles, rejectedFiles) {
	console.log(acceptedFiles);
}

export default () => (
	<Layout>
		<Flex mb={6}>
			<Box w={3 / 4}>
				<Heading mb={2}>Build, deploy, and manage modern web projects</Heading>
				<Lead>
					Get an all-in-one workflow that combines global deployment, continuous
					integration, and HTTPS. And that’s just the beginning.
				</Lead>
			</Box>
		</Flex>
		<Flex mb={2} justify="center">
			<Text>Drop files to deploy your app now!</Text>
		</Flex>
		<Flex justify="center">
			<Dropzone onDrop={onDrop} />
		</Flex>
	</Layout>
);
