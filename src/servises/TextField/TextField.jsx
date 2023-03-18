import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import styles from './textField.module.css';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div className={styles.form_element}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default TextField;
