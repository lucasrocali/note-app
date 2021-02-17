import React from 'react';
import styled from 'styled-components/native';
import { format } from 'date-fns'
import { Styled, Note } from '../utils/types';

type NoteCellProps = {
    note: Note;
    onPress?: Function;
};

const Container = styled.TouchableOpacity`
    padding-vertical: ${(props: Styled) => props.theme.spacing.small};
    padding-horizontal: ${(props: Styled) => props.theme.spacing.small};
    background-color: ${(props: Styled) => props.theme.color.bgPrimary};
    border-bottom-width: 1px;
	border-color: ${(props: Styled) => props.theme.color.lightGray};
`;

const Text = styled.Text`
    color: ${(props: Styled) => props.theme.color.lblPrimary};
`

const Date = styled.Text`
    color: ${(props: Styled) => props.theme.color.lblSecondary};
`

export default function NoteCell(props: NoteCellProps) {
    const { note, onPress } = props
    return (
        <Container activeOpacity={0.8} onPress={() => onPress && onPress()}>
            <Text numberOfLines={3}>{note.text}</Text>
            <Date>{format(note.created_at, 'yyyy-MM-dd HH:mm:ss')}</Date>
        </Container >
    );
}