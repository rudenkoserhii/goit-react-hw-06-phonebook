import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Wrapper, H1, H2} from './Styled/Styled';

export const App = () => {
  const [ contacts, setContacts ] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
  const [ filter, setFilter ] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);


  const addContact = (contact) => {

    if (contacts.some(({ name }) => contact.name === name)) {
      Notiflix.Notify.warning(`${contact.name}is already in contacts`);
      return}
    contact['id'] = nanoid();

    setContacts([contact, ...contacts]);

  };

  const filtered = (e) => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = (id) => {
    return setContacts(contacts.filter(contact => contact.id !== id))
  };

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Wrapper>
      <H1>Phonebook</H1>
      <ContactForm onSubmit={addContact}></ContactForm>
      <H2>Contacts</H2>
      <Filter value={filter} onChange={filtered}></Filter>
      <ContactList contacts={visibleContacts} onDelete={deleteContact}></ContactList>
    </Wrapper>
  )
}
