export type RootStackParamList = {
    Home: undefined;
    CreateNote: {
        note_id?: string
    };
}


export type Theme = {
    color: {
        primary: string;
        bgPrimary: string;
        lblPrimary: string;
        lblSecondary: string;
        lightGray: string;
    };
    spacing: {
        small: string;
        medium: string;
        large: string;

    };
}
export type Styled = {
    theme: Theme;
}

export type Note = {
    id: string;
    text: string;
    created_at: Date;
    updated_at: Date;
}

export type State = {
    notes: {
        [key: string]: Note;
    }
    addNote: (text: string) => void;
    editNote: (id: string, text: string) => void;

}