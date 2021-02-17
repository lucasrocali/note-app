import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, Note, Styled } from '../../utils/types';
import { useStore } from '../../store';
import NoteCell from '../../components/NoteCell';

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
    color: ${(props: Styled) => props.theme.color.lblPrimary};
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
	const notes: Note[] = useStore(state => Object.values(state.notes))
	const sortedNotes: Note[] = notes.sort((a, b) => b.created_at.getTime() - a.created_at.getTime())

	const renderItem = ({ item: note }: { item: Note }) => (
		<NoteCell
			note={note}
			onPress={() => navigation.navigate('CreateNote', { note_id: note.id })}
		/>
	);

	return (
		<Container>
			<FlatList<React.ElementType>
				data={sortedNotes}
				ListHeaderComponent={(
					<Header>
						<SearchInput
							onChangeText={(text) => setSearchingText(text)}
							value={searchingText}
							placeholder={'Search'}
							autoCapitalize='none'
						/>
						<AddIconContent
							onPress={() => navigation.navigate('CreateNote', { note_id: undefined })}
						>
							<AddIcon name='add' />
						</AddIconContent>
					</Header>
				)}
				renderItem={renderItem}
			/>
		</Container>
	);
}