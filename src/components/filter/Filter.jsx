import { Form, Label, Input } from './Filter.styled';

export const Filter = ({ filter, handelChange }) => {
  return (
    <Form>
      <Label for="filter">Find contacts by name</Label>

      <Input
        id="filter"
        type="text"
        name="filter"
        value={filter}
        onChange={handelChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </Form>
  );
};
