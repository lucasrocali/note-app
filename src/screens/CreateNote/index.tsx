import React, { useLayoutEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { RootStackParamList, Note, Styled } from '../../utils/types';
import { useStore } from '../../store';

type CreateNoteScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'CreateNote'
>;

type CreateNoteScreenRouteProp = RouteProp<RootStackParamList, 'CreateNote'>;

type CreateNoteProps = {
    route: CreateNoteScreenRouteProp;
    navigation: CreateNoteScreenNavigationProp;
};


const Container = styled.SafeAreaView`
	flex: 1;
    background-color: ${(props: Styled) => props.theme.color.bgPrimary};
`;

const Header = styled.TouchableOpacity`
    padding-horizontal: ${(props: Styled) => props.theme.spacing.small};     
`;

const HeaderText = styled.Text`
    color: ${(props: Styled) => props.theme.color.primary};
    font-size: 18px;
    font-weight: 600;
`

const TextInput = styled.TextInput`
    flex: 1;
    color: ${(props: Styled) => props.theme.color.lblPrimary};
    margin-vertical: ${(props: Styled) => props.theme.spacing.small};
	margin-horizontal: ${(props: Styled) => props.theme.spacing.small};
`;

export default function CreateNote(props: CreateNoteProps) {

    const { route, navigation } = props
    const note_id = route.params.note_id;

    const { addNote, editNote } = useStore()
    let editing_note: Note | undefined = undefined
    if (note_id) {
        editing_note = useStore(state => state.notes[note_id])
    }
    const [text, setText] = useState<string>(editing_note && editing_note.text || '')

    const onBack = () => {
        navigation.goBack()
    }

    const onDone = () => {
        if (editing_note) {
            editNote(editing_note.id, text)
        } else {
            addNote(text)
        }
        navigation.goBack()
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Header onPress={onBack}>
                    <HeaderText>{'Back'}</HeaderText>
                </Header>
            ),
            headerRight: () => (
                <Header onPress={onDone}>
                    <HeaderText>{'Done'}</HeaderText>
                </Header>
            ),
        });
    }, [navigation, text]);


    return (
        <Container>
            <TextInput
                multiline={true}
                onChangeText={(text) => setText(text)}
                value={text}
                placeholder={'Write here...'}
                autoCapitalize='none'
            />
        </Container>
    );
}