import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (values) => {
    console.log(values);
  };

  console.log(errors);

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div>
            Username
            <input
              type="text"
              {...register("username", {
                required: true,
              })}
            />
            {errors.username && <span>This field is required</span>}
          </div>
          <div>
            Password
            <input type="text" {...register("password", { required: true })} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
