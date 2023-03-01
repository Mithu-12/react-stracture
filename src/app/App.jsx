import React, { useState } from 'react';
import InputGroup from '../components/shared/forms/inputgroups';

const init = {
  title: '',
  bio: '',
  skills: '',
};
const App = () => {
  const [formState, setFormState] = useState({ ...init });
  const handleChange = (prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  });

  return (
    <div className="root">
      hello
      <form>
        <InputGroup
          value={formState.title}
          placeholder={'Software Engineer'}
          name={'title'}
          label={'Title'}
          onChange={handleChange}
        ></InputGroup>
      </form>
    </div>
  );
};

export default App;
