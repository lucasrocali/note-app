import create from 'zustand';
import { State } from '../utils/types';

export const useStore = create<State>(set => ({
    notes: [],
    addNote: (text) => set(state => ({
        notes: [
            {
                id: `${state.notes.length + 1}`,
                text,
                created_at: new Date()
            },
            ...state.notes
        ]
    })),
}))