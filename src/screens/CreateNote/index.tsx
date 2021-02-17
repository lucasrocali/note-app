import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Styled } from '../../utils/types'
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

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
    margin-vertical: ${(props: Styled) => props.theme.spacing.small};
	margin-horizontal: ${(props: Styled) => props.theme.spacing.small};
`;

export default function CreateNote(props: CreateNoteProps) {

    const [text, setText] = useState<string>('')

    const { navigation } = props

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Header onPress={() => navigation.goBack()}>
                    <HeaderText>{'Back'}</HeaderText>
                </Header>
            ),
            headerRight: () => (
                <Header onPress={() => console.log('Done')}>
                    <HeaderText>{'Done'}</HeaderText>
                </Header>
            ),
        });
    }, [navigation]);


    return (
        <Container>
            <TextInput
                multiline={true}
                onChangeText={(text) => setText(text)}
                value={text}
                placeholder={'Write here...'}
                autoCapitalize="none"
            />
        </Container>
    );
}