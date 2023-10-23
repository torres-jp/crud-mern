import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    const res = await registerRequest(values);
    console.log(res);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <h1 className="text-white text-2xl font-bold">Register</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: true,
          })}
          className="w-full bg-zinc-700 text-white rounded-md px-4 py-2 my-2"
        />
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white rounded-md px-4 py-2 my-2"
        />
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white rounded-md px-4 py-2 my-2"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md my-2"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
