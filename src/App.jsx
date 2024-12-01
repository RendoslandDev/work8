import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Button from './button'

function App() {

  return (
    <>
             <section className="bg-white p-4  sm:p-10 flex   justify-center mx-auto  ">
            <form className="  w-full lg:w-[47%] rounded-2xl p-3 sm:p-8   flex items-center justify-center">
                <div className=" w-full">
                   
                    <div className="flex flex-col xl:gap-6 xl:flex-row justify-between">
                        <div className="flex flex-col w-full xl:w-1/2">
                            
                            <input
                                type="text"
                                name="user-name"
                               className="rounded-lg my-2 w-full border border-gray-200  py-3 px-10 bg-gray-200 text-black rounded w-full rounded-lg my-2"
                                placeholder="Enter Name"
                            />
                        </div>

                        <div className="flex flex-col w-full xl:w-1/2">
                       
                            <input
                                type="text"
                                name="user-name"
                               className="rounded-lg my-2 w-full border border-gray-200  py-3 px-10 bg-gray-200 text-black rounded w-full rounded-lg my-2"
                                placeholder="Enter Email"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col xl:gap-6 xl:flex-row justify-between">
                        <div className="flex flex-col w-full xl:w-1/2">
                         
                            <input
                                type="text"
                                name="user-name"
                                className="rounded-lg my-2 w-full border border-gray-200  py-3 px-10 bg-gray-200 text-black rounded w-full rounded-lg my-2"
                                placeholder="From Subject"
                            />
                        </div>

                        <div className="flex flex-col w-full xl:w-1/2">
                           
                            <input
                                type="text"
                                name="user-name"
                             className="rounded-lg my-2 w-full border border-gray-200  py-3 px-10 bg-gray-200 text-black rounded w-full rounded-lg my-2"
                                placeholder="Enter Phone"
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col  my-2">
                      
                        <textarea name="" id="" cols="30" rows="10" 
                            className=" rounded-lg mb-5  bg-gray-200 w-ful pl-2 "
                            placeholder='Your Message'
                        ></textarea>
                    </div>
                   
                     <div className='mt-2  w-full text-center rounded-lg py-3 font-bold text-xl'>
              <button className='w-full  bg-[#F582AE] py-3 tex-center  rounded'>Submit Message</button>
                    </div>
                </div>
            </form>
            <div className='hidden w-[47%]  h-screen lg:flex items-center'>
                <div className='w-1/2   '>
          <h1 className='font-bold '>For more enquiries?</h1>
          <p className=''>you can reach out to us using</p>
          <p>these dev's</p><br />
          <ul role='list'>
            <li class="group/item hover:bg-slate-100 ... flex mb-5">
                <img src="images/imgphone.png" className='h-10 w-10 rounded' alt="" />
            <div className='px-2'>
             <a href="{person.url}">Phone</a>
             <p>+233 678 874 255</p>
            </div>
           </li>
      <li class="group/item hover:bg-slate-100 ... flex mb-5">
         <img src="images/imgweb.jpg" className='h-10 w-10 rounded' alt="" />

      <div className='px-2'>
        <a href="{person.url}">Email</a>
        <p>charlesowusu@gmail.com</p>
      </div>
      </li>
      <li class="group/item hover:bg-slate-100 ... flex">
      <img src="images/imgweb.jpg" className='h-10 w-10 rounded' alt="" />
      <div className='px-2'>
        <a href="{person.url}">Website</a>
        <p>www.webdev.com.pvd</p>
      </div>
      </li>
          </ul>
           

          </div>
            </div>
      </section>
           
       
          
    </>
  )
}

export default App


