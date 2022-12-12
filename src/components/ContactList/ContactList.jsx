import { ContactListStyled } from './ContactList.styled';
import { ContactItem } from './ContactItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => {


    return (<ContactListStyled>
        { contacts.map(({ id, name, number }) => <ContactItem key={id} name={name} number={number} id={id}/>)}
            </ContactListStyled>
)};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
};