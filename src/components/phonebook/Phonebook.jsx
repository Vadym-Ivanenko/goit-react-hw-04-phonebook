import { useState } from 'react';
import { Form, Label, Input, Button } from './Phonebook.styled';

export const Phonebook = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = evt => {
    const { value } = evt.target;
    setName(value);
  };
  const handleNumberChange = evt => {
    const { value } = evt.target;
    setNumber(value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    onAdd({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label for="user_name">Name</Label>
      <Input
        id="user_name"
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label for="user_tel">Number</Label>

      <Input
        id="user_tel"
        type="tel"
        name="number"
        value={number}
        onChange={handleNumberChange}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};
