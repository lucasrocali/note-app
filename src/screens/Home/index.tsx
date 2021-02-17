import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text``;

export default function Home() {
	return (
		<Container>
			<Text>Home</Text>
		</Container>
	);
}