import { List, Item, Button } from './ContactList.styled';

export const ContactList = ({ contactFilter, deleteContact }) => {
  return (
    <List>
      {contactFilter.map((contact, id) => (
        <Item key={id}>
          {contact.name}: {contact.number}
          <Button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
