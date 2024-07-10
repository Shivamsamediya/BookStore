/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:4001/user/login', data);
      if (res.data) {
        toast.success('Successfully Logged in!!');
        document.getElementById('my_modal_3').close();
        localStorage.setItem('Users', JSON.stringify(res.data.user));
        setTimeout(()=>{
          window.location.reload();
        },500);
      }
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(`Error: ${err.response.data.message}`);
        setTimeout(() => {}, 500);
      } else {
        alert('An error occurred during login. Please try again.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-lg w-full p-6">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </button>
            <h3 className="font-bold text-xl text-center my-6 dark:text-slate-900">Login</h3>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-lg font-semibold text-zinc-700">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  className="shadow border w-full border-pink-600 px-3 py-2 rounded-lg placeholder:text-center text-black leading-tight focus:outline-blue-600 focus:shadow-outline"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="password" className="text-lg font-semibold text-zinc-700">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  className="shadow border w-full border-pink-600 px-3 py-2 rounded-lg placeholder:text-center text-black leading-tight focus:outline-blue-600 focus:shadow-outline"
                  {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
              </div>
              <div className="flex flex-col items-center mt-4 space-y-2">
                <button
                  type="submit"
                  className="bg-pink-600 text-white font-bold py-2 px-6 rounded-full hover:bg-pink-700 focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
                <p className="dark:text-slate-900">
                  Not registered yet? <a href="/signup" className="text-pink-700 hover:underline">Sign up</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
