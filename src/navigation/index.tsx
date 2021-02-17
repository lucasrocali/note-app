import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/types'
import Home from '../screens/Home'
import CreateNote from '../screens/CreateNote'


const Stack = createStackNavigator<RootStackParamList>();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="CreateNote" component={CreateNote} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;