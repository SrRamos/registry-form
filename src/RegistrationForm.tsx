import { ChangeEvent, useState } from "react";

type UserForm = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  dateBirth: string;
};

const RegistrationForm = () => {
  const defaultValues:UserForm = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    dateBirth: '',
  };

  const [form, setForm] = useState<UserForm>(defaultValues);

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prevValue) => {
      return {
        ...prevValue,
        [event.target.name]: event.target.value,
      }
    });
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ form });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={handleFormChange} />
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" onChange={handleFormChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" onChange={handleFormChange} />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" name="email" onChange={handleFormChange} />
        </div>
        <div>
          <label htmlFor="dateBirth">Date of birth</label>
          <input type="date" name="dateBirth" onChange={handleFormChange} />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
