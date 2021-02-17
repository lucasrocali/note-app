import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import RootNavigation from './src/navigation';
import themes from './src/utils/themes'

export default function App() {
	const theme = themes.light
	return (
		<ThemeProvider theme={theme}>
			<RootNavigation />
		</ThemeProvider>
	);
}