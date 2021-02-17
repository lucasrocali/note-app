export type RootStackParamList = {
    Home: undefined;
    CreateNote: undefined;
}


export interface Theme {
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
export interface Styled {
    theme: Theme;
}