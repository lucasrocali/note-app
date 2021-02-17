import create from 'zustand';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid/non-secure'; //just for now
import { State } from '../utils/types';

export const useStore = create<State>(set => ({
    notes: {},
    addNote: (text) => set(state => {
        const id = nanoid()
        return {
            notes: {
                ...state.notes,
                [id]: {
                    id,
                    text,
                    created_at: new Date(),
                    updated_at: new Date(),
                }
            }
        }
    }),
    editNote: (id, text) => set(state => ({
        notes: {
            ...state.notes,
            [id]: {
                ...state.notes[id],
                text,
                updated_at: new Date(),
            }
        }
    }
    )),
}))