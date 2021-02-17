import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Styled } from '../../utils/types'
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

type HomeScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'Home'
>;

type HomeProps = {
	navigation: HomeScreenNavigationProp;
};

const Container = styled.SafeAreaView`
	flex: 1;
	background-color: ${(props: Styled) => props.theme.color.bgPrimary};
`;

const Header = styled.View`
	flex-direction: row;
	padding-vertical: ${(props: Styled) => props.theme.spacing.small};
	padding-horizontal: ${(props: Styled) => props.theme.spacing.small};
	border-bottom-width: 1px;
	border-color: ${(props: Styled) => props.theme.color.lightGray};
`;

const SearchInput = styled.TextInput`
	flex: 1;
`;

const AddIconContent = styled.TouchableOpacity`

`;

const AddIcon = styled(Ionicons).attrs((props: Styled) => ({
	size: 40,
	color: props.theme.color.primary,
	solid: true,
}))`

`;

const Text = styled.Text``;

const FlatList = styled.FlatList``

export default function Home(props: HomeProps) {
	const { navigation } = props;
	const [searchingText, setSearchingText] = useState<string>('')
	return (
		<Container>
			<FlatList
				data={[1, 2]}
				ListHeaderComponent={(
					<Header>
						<SearchInput
							onChangeText={(text) => setSearchingText(text)}
							value={searchingText}
							placeholder={'Search'}
							autoCapitalize="none"
						/>
						<AddIconContent
							onPress={() => navigation.navigate('CreateNote')}
						>
							<AddIcon name='add' />
						</AddIconContent>
					</Header>
				)}
				renderItem={({ item: note, index }) => (
					<Text>Note</Text>
				)}
			/>
		</Container>
	);
}