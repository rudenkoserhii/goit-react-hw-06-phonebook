import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Wrapper, H1, H2} from './Styled/Styled';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/contactsSlice';


export const App = () => {
  const [ filter, setFilter ] = useState('');

  const contacts = useSelector(getContacts);

  const filtered = (e) => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <Wrapper>
      <H1>Phonebook</H1>
      <ContactForm></ContactForm>
      <H2>Contacts</H2>
      <Filter value={filter} onChange={filtered}></Filter>
      <ContactList contacts={visibleContacts}></ContactList>
    </Wrapper>
  )
}
