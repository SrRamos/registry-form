import { useForm, SubmitHandler } from "react-hook-form";

type UserForm = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  dateBirth: string;
};

const RegistrationForm = () => {
  const form = useForm<UserForm>();
  const { register, handleSubmit } = form;

  const onFormSubmit: SubmitHandler<UserForm> = (data) => {
    console.log('Form Submitted. Form Data:', data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmit)} className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" {...register("username")} />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" {...register("firstName")} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" {...register("lastName")} />
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input type="email" {...register("email")} />
        </div>
        <div className="form-group">
          <label htmlFor="dateBirth">Date of birth</label>
          <input type="date" placeholder="date" {...register("dateBirth")} />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
