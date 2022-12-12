import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Notiflix from 'notiflix';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {

    if (state.some(({ name }) => action.payload.name === name)) {
      Notiflix.Notify.warning(`${action.payload.name}is already in contacts`);
      return}

      state.push(action.payload);
    },
    deleteContact(state, action) {
      state.filter(({ id }) => id !== action.payload);
    },

  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;

// Selectors
// export const getContacts = state => state.contacts;