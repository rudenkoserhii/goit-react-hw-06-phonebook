import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Notiflix from 'notiflix';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { 
    contacts: [
      {"id": "id-1", "name": "Rosie Simpson", "number": "459-12-56"},
      {"id": "id-2", "name": "Hermione Kline", "number": "443-89-12"},
      {"id": "id-3", "name": "Eden Clements", "number": "645-17-79"},
      {"id": "id-4", "name": "Annie Copeland", "number": "227-91-26"}
    ],
    filter: "",},
  reducers: {
    addContact(state, action) {

    if (state.contacts.some(({ name }) => action.payload.name === name)) {
      Notiflix.Notify.warning(`${action.payload.name}is already in contacts`);
      return}

      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },

    addFilter(state, action) {
      state.filter = action.payload.toLowerCase()
    },
  },
});


const persistConfig = {
  key: 'contacts',
  storage,
};


export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact, addFilter } = contactsSlice.actions;


// Selectors



