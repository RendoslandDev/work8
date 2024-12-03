import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Button from './button'

function App() {

  return (
    <>
             <section className="bg-white p-4  sm:p-10 border border-black-400   justify-center flex flex-col gap-6 xl:flex-row gap-10">
            <form className="  w-full lg:w-[47%] rounded-2xl p-3 sm:p-8   flex items-center justify-center">
                <div className=" w-full">
                   
                    <div className="flex flex-row gap-4 xl:gap-6 xl:flex-row justify-between">
                        <div className="flex flex-col w-full xl:w-1/2">
                            
                            <input
                                type="text"
                                name="user-name"
                               className="rounded my-2 w-full border border-gray-200  py-3 px-5 bg-gray-200 text-black my-2"
                                placeholder="Enter Name"
                            />
                        </div>

                        <div className="flex flex-col w-full xl:w-1/2">
                       
                            <input
                                type="text"
                                name="user-name"
                               className="rounded my-2 w-full border border-gray-200  py-3 px-5 bg-gray-200 text-black my-2"
                                placeholder="Enter Email"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 xl:gap-6 xl:flex-row justify-between">
                        <div className="flex flex-col w-full xl:w-1/2">
                         
                            <input
                                type="text"
                                name="user-name"
                                className="rounded my-2 w-full border border-gray-200  py-3 px-5 bg-gray-200 text-black my-2"
                                placeholder="From Subject"
                            />
                        </div>

                        <div className="flex flex-col w-full xl:w-1/2">
                           
                            <input
                                type="text"
                                name="user-name"
                             className="rounded my-2 w-full border border-gray-200  py-3 px-5 bg-gray-200 text-black my-2"
                                placeholder="Enter Phone"
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col  my-2">
                      
                        <textarea name="" id="" cols="30" rows="10" 
                            className=" rounded mb-5  bg-gray-200 w-ful pl-2 "
                            placeholder='Your Message'
                        ></textarea>
                    </div>
                   
                     <div className='mt-2  w-full text-center rounded-lg py-3 font-bold text-xl'>
              <button className='w-full  bg-[#F582AE] py-3 tex-center  rounded'>Submit Message</button>
                    </div>
                </div>
            </form>
            <div className=' lg:flex  pt-10 xl:pt-40 '>
                <div>
          <h1 className='font-bold flex justify-center xl:justify-self-start '>For more enquiries?</h1>
          <p className=' flex justify-center xl:items-end'>you can reach out to us using these </p>
          <p className=' flex justify-center xl:justify-self-start'>these details</p>
          <ul role='list' className='flex  flex-col justify-center  mt-5 '>
            <li className="group/item hover:bg-slate-100 ... flex mb-5">
         <i className="fa-solid fa-phone h-10 w-10 rounded border border-black-400 bg-black grid place-items-center text-white"></i>

      <div className='px-2'>
        <a href="{person.url}">Email</a>
        <p>0558471039</p>
      </div>
      </li>
      <li className="group/item hover:bg-slate-100 ... flex mb-5">
      <i class="fa-solid fa-envelope-circle-check h-10 w-10 text-white bg-black rounded grid place-items-center"></i>
      <div className='px-2'>
        <a href="{person.url}">Email</a>
        <p>charlesowusu@gmail.com</p>
      </div>
      </li>
      <li className="group/item hover:bg-slate-100 ... flex ">
     <i class="fa-solid fa-globe border border-black w-10 grid place-items-center rounded h-10 text-white bg-black"></i> 
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

   

