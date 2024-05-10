import { createSlice, createSelector} from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectFilter } from './filtersSlice';

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.error = true;
                state.loading = false;
            })
            .addCase(addContact.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
            })
            .addCase(addContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(deleteContact.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload.id
                );
                state.loading = false;
            })
            .addCase(deleteContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
            }),
});
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContact = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
    [selectContact, selectFilter],
    (contacts, nameFilter) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()));
    });

export default slice.reducer;