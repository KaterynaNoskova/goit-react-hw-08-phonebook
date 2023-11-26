import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../apiContact';
import { selectAllContacts } from '../ContactsSelectors';
import {nanoid} from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

   const submit = evt => {
    evt.preventDefault();
    const nameVal = evt.target.name.value;
    const numberVal = evt.target.number.value;
    if (nameVal) {
      const searchContact = contacts.find( contact => {
      if (contact.name) {
       return contact.name.toLowerCase() === nameVal.toLowerCase();
      }
        return false;
      });
      if (searchContact) {
        alert(`${nameVal} is already in contacts`);
        return;
      }
    }
    
    const contactData ={
      id: nanoid(),
      name: nameVal,
      number: numberVal,
    }; 

    dispatch(addContact(contactData));
    evt.target.reset();
    // console.log('Contact Data:', contactData);
  };

  return (
    <form className={css.form} onSubmit={submit}>
      <h1 className={css.formTitle}>Phonebook</h1>
      <span className={css.formName}>Name</span>
      <input
        className={css.nameInput}
        type="text"
        name="name"
        title="Input Name"
        required
      />
      <span className={css.formName}>Number</span>
      <input
        className={css.numberInput}
        type="tel"
        name="number"
        title="Input Number"
        required       
      />
      <button className={css.buttonAdd} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;