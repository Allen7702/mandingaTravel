import React, { useState } from "react";
import Toggle from "./toggle";
import amecore from "../images/amec.png";
import { Link } from "react-router-dom";
import mandinga from "../images/mandinga.png";


function Navbar(){
  const [navbari , setNavbar] = useState(false);

    return(

<nav className="bg-white bg-opacity-95 px-2 sm:px-4 py-2.5  fixed top-0 z-10  w-full shadow-md left-0 dark:bg-black">
  <div className=" container flex flex-wrap justify-between items-center mx-auto">
  <a href="#" class="flex items-center">
      <img src={mandinga} class="mr-3 h-10 w-10 sm:h-9" alt="Mandinga Logo"/>
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Mandinga Travel</span>
  </a>
  <div className="flex md:order-2">
      <span  className="  rounded-lg  py-2.5  mr-3 md:mr-0"><Toggle /></span>
     

     <button type="button"
     onClick={() => setNavbar(!navbari)}
     > 
     {navbari ? (<ion-icon   class="pt-3 w-8 h-8 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden cursor-pointer" name="close">
    </ion-icon>) :
    (<ion-icon   class="pt-3 w-8 h-8 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden cursor-pointer" name="menu">
    </ion-icon>
    )
     }
      </button>
      
  </div>
  <div className={
    navbari ? "block w-full" :"hidden md:flex"
  }>
  <div
    class="justify-between items-center w-full md:flex md:w-auto md:order-1 "
   >
  
    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><span>Home</span></Link>
      </li>
      <li>
        <Link to="/tours" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tour</Link>
      </li>
      <li>
        <Link to="/services" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
      </li>
      <li>
        <Link to="/contactUs" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link>
      </li>
      
    </ul>
  </div>
  </div>
  </div>
 
  

</nav>


   
);
}

export default Navbar;
