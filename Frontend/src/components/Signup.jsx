/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userData = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post('https://book-store-backend-eta.vercel.app/signup', userData);
      if (res.data) {
        toast.success('Signup successful!!');
        localStorage.setItem('Users', JSON.stringify(res.data.user));
        setTimeout(()=>{
          navigate("/");
        },500);
      }
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(`Error: ${err.response.data.message}`);
        setTimeout(() => {}, 500);
      } else {
        toast.error('An error occurred during signup. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="relative bg-white p-8 rounded-lg shadow-xl w-full max-w-md mx-auto mt-64">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none btn btn-sm btn-circle btn-ghost"
          onClick={() => navigate('/')}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-center mb-6">Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              placeholder="Enter Email"
              className="placeholder:text-center shadow appearance-none border border-pink-600 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-600 focus:shadow-outline"
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register('username', { required: 'Username is required' })}
              placeholder="Enter Username"
              className="placeholder:text-center shadow appearance-none border border-pink-600 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-600 focus:shadow-outline"
            />
            {errors.username && (
              <span className="text-sm text-red-500">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
              placeholder="Enter Password"
              className="placeholder:text-center shadow appearance-none border border-pink-600 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-600 focus:shadow-outline"
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-md mt-2">
          Already have an account?{' '}
          <a href="/" className="text-pink-600 cursor-pointer text-md hover:underline">
            Log in
          </a>
        </p>
      </div>
    </>
  );
}

export default Signup;
