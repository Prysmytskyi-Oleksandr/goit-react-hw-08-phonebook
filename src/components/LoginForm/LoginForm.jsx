import initialState from 'components/Form/InitialState';
import TextField from 'servises/TextField/TextField';
import fields from './fields';
import Button from 'servises/Button/Button';
import { useState, useCallback } from 'react';

const LoginForm = ({ onSubmit }) => {
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

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};
export default LoginForm;
