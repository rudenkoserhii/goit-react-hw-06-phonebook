import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Wrapper, H1, H2} from './Styled/Styled';
import { useSelector } from 'react-redux';


export const App = () => {

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  console.log(filter)
  console.log(visibleContacts)

  return (
    <Wrapper>
      <H1>Phonebook</H1>
      <ContactForm></ContactForm>
      <H2>Contacts</H2>
      <Filter></Filter>
      <ContactList contacts={visibleContacts}></ContactList>
    </Wrapper>
  )
}
