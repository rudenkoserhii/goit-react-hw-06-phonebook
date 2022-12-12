import { ContactListStyled } from './ContactList.styled';
import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {

    const contacts = useSelector(state => state);

    return (<ContactListStyled>
        { contacts.map(({ id, name, number }) => <ContactItem key={id} name={name} number={number} id={id}/>)}
            </ContactListStyled>
)};
