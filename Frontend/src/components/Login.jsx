/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box max-w-lg w-full p-6">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
              <h3 className="font-bold text-xl text-center my-6 dark:text-slate-900">Login</h3>
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-lg font-semibold text-zinc-700">Email:</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    className="shadow border w-full border-pink-600 px-3 py-2 rounded-lg placeholder:text-center text-black leading-tight focus:outline-blue-600 focus:shadow-outline"
                    {...register('email', { required: true })}
                  />
                  {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="password" className="text-lg font-semibold text-zinc-700">Password:</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    className="shadow border w-full border-pink-600 px-3 py-2 rounded-lg placeholder:text-center text-black leading-tight focus:outline-blue-600 focus:shadow-outline"
                    {...register('password', { required: true })}
                  />
                  {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                </div>
                <div className="flex flex-col items-center mt-4 space-y-2">
                  <button type="submit" className="bg-pink-600 text-white font-bold py-2 px-6 rounded-full hover:bg-pink-700 focus:outline-none focus:shadow-outline">Login</button>
                  <p className="dark:text-slate-900">Not registered yet? <a href="/signup" className="text-pink-700 hover:underline">Sign up</a></p>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
