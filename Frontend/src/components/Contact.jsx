// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mx-auto p-4 mt-32">
      <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-lg relative">
        <button 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none btn btn-sm btn-circle btn-ghost"
          onClick={() => navigate('/')}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl text-center font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-md font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm border-pink-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register('name', { required: true })}/>
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div>
            <label htmlFor="email" className="block text-md font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm border-pink-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register('email', { required: true })}/>
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div>
            <label htmlFor="message" className="block text-md font-medium text-gray-700">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm border-pink-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register('message', { required: true })}></textarea>
            {errors.message && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white px-3 py-2 rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
