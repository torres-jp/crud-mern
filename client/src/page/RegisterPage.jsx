import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)]  items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold">Register</h1>

        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white my-2" key={i}>
            {error}
          </div>
        ))}

        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="username"
            {...register("username", {
              required: true,
            })}
            className="w-full bg-zinc-700 text-white rounded-md px-4 py-2 my-2"
          />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}
          <input
            type="email"
            placeholder="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white rounded-md px-4 py-2 my-2"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white rounded-md px-4 py-2 my-2"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md my-2"
            type="submit"
          >
            Save
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          You already have an account?{" "}
          <Link to="/login" className="text-sky-500">
            Sign in
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
