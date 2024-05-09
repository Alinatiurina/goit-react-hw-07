import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactInitialState = {
    items: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
};

const contactSlice = createSlice({
    name: "contacts",
    initialState: contactInitialState,
    reducers: {
        addContact: (state, action) => {
            const { name, number } = action.payload;
            state.items.push({ id: nanoid(), name, number });
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
