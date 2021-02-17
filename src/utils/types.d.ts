export type RootStackParamList = {
    Home: undefined;
    CreateNote: undefined;
}


export type Theme = {
    color: {
        primary: string;
        bgPrimary: string;
        lblPrimary: string;
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
}

export type State = {
    notes: Note[]
    addNote: (text: string) => void
}