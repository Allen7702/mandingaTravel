import React from "react";
import {AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai';
import { Link } from "react-router-dom";


export default function Contact(){
    return(
        <div className="md:pt-20 pt-10 justify-center md:flex dark:text-white md:space-x-32">
        <div className="pl-10" >
            <h1 className="text-5xl mb-10 md:mb-10">Contact Us</h1>
                <form>
                <label className="text-2xl pl-2">Enter your name</label><br/>
                <input type="text" className="dark:bg-zinc-200 dark:text-black mt-2 border border-blue-200 py-1 pl-3 rounded-full  w-72 md:w-96" name="name" required="required"/><br/>
                <label className="text-2xl pl-2">Enter your email</label><br/>
                <input type="text" className="dark:bg-zinc-200 dark:text-black mt-2 border border-blue-200 py-1 pl-3 rounded-full w-72 md:w-96" name="email" required="required" /><br/>
                <label className="text-2xl pl-2"> For any inquiries</label><br/>
                <textarea type="text" className="dark:bg-zinc-200 dark:text-black mt-2 border border-blue-200 py-1 pl-3 rounded-2xl w-72 md:w-96 mb-4 h-32" name="detail" /><br/>
                <button type="submit" className="w-72 text-gray-900 bg-zinc-800 border border-gray-300 hover:bg-zinc-500   font-medium rounded-full text-sm px-5 text-white py-2.5 mr-2 mb-2 dark:bg-gray-800   dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 " name="submit">Send</button><br/>
                 </form>
        </div>
        <div className="pl-10 pt-10 md:pt-32"> 
           <h1 className="text-3xl">PHONE</h1>
           <h1 className="text-2xl pl-2 pb-2"><a href ='tel:+255712876876'>+255 712 876 876</a></h1> 
           <h1 className="text-3xl">SOCIALS</h1>
           <div className="flex space-x-4">
           <Link to="" className=" rounded-full w-14 h-14 border-2 border-black">
           < AiOutlineWhatsApp size={34}
           className="m-auto mt-2"
           />
        </Link>
        <Link to="" className=" rounded-full w-14 h-14 border-2 border-black">
           < AiOutlineInstagram size={34}
           className="m-auto mt-2"
           />
        
           </Link>
           {/*
            <a href="#!" type="button" class="rounded-full border-2 border-white   leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                <svg aria-hidden="true"
                focusable="true"
                data-prefix="fab"
                data-icon="instagram"
                  class="w-3 h-full mx-auto"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
            </a> */}
              </div>
           <h1 className="text-3xl">ADDRESS</h1>
           <h1 className="text-2xl pl-2 pb-10">Tanzania-Kilimanjaro region,<br/> Moshi city</h1>
        </div>
        </div>
          

    );
}