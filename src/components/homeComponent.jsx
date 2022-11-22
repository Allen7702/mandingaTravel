import React from "react";
import { Link } from "react-router-dom";

export default function HomeComponent(props){
    return(
        
<div className=" w-[90%] h-[100%] shadow-md border dark:border-gray-800 rounded-3xl">
     <div>
      <img src ={props.img}  className="object-cover md:h-[450px] h-[330px] rounded-t-2xl w-[100%]" alt="zanzibar"/>
     </div>
     <div className="">
     <h1 className="text-3xl p-5 text-center"> {props.name} </h1>
     <div class="flex-grow border-t border-gray-400  w-3/4 m-auto"></div>
     <ul className="px-8 mt-2 mb-8 list-disc">
      <li>{props.list1}</li>
      <li>{props.list2}</li>
      <li>{props.list3}</li>
     </ul>
     </div>

     <div className="flex items-center justify-center mb-4">
     <Link to={props.location}>
    <button type="button" 
    class="w-72 text-gray-900 bg-zinc-800 border border-gray-300  hover:bg-zinc-500   font-medium rounded-full text-sm px-5 text-white py-2.5 mr-2 mb-2 dark:bg-gray-800   dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">
    <span className="">Explore</span>
      </button>
    </Link>
     </div>
    </div>  

    
    );
}