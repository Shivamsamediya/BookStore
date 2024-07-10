// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Cards from "./Cards"
import { useNavigate } from 'react-router-dom';

function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try{
      const res = await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setBook(res.data);
    } catch(error){
      console.log(error);
    }
    }
    getBook();
  },[])
  
  const navigate= useNavigate();
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div className='mt-32 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl font-semibold'>
            We are delighted to have you<span className='text-pink-500'> here! :)</span>
          </h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates quae deserunt perspiciatis, hic a tempore! Quidem ut odit laudantium aliquam, quia eaque suscipit libero ea vel quae voluptas earum minus tenetur, illo ad, id magni sequi possimus blanditiis. Minus soluta cupiditate veritatis quos temporibus quae dolorem, repellat quia debitis!</p>
          <button onClick={()=>navigate('/')} className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-300 mt-8'>Back</button>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          { 
            book.map((item)=>{
              return <Cards item={item} key={item.id}/>})
          }  
        </div>
      </div>
    </>
  )
}

export default Course