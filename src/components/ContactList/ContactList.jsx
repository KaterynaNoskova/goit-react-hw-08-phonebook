import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllContacts } from '../../apiContact';
import { selectAllContacts, selectFilter } from '../ContactsSelectors';
import ContactToSelect  from '../ContactToSelect/ContactToSelect';
import css from './ContactList.module.css';

const getContactsToSee = (contacts, normalizeFilter) =>{
  if(!contacts){
    return[];
  }
  return contacts.filter(({name}) => {
    if(typeof name === 'string'){
      return name.toLowerCase().includes(normalizeFilter);
    }
    return false;
  });
};
const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const normalizeFilter = filter ? filter.toLowerCase():'';
  const contactsToSee = getContactsToSee(contacts, normalizeFilter);

  useEffect(()=>{
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {contactsToSee.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <ContactToSelect
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;