import initialState from 'components/Form/InitialState';
import TextField from 'servises/TextField/TextField';
import fields from './fields';
import Button from 'servises/Button/Button';
import { useState, useCallback } from 'react';

const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};
export default RegisterForm;
