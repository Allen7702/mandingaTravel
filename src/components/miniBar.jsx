import React from "react";
import {GoLocation} from 'react-icons/go';

export default function MiniBar (props){
    return(
        <div className="flex flex-col m-auto dark:bg-black   md:w-80 md:shadow-lg md:border mb-10 md:dark:border-zinc-900 dark:text-blacki">
        <img src={props.img} className="md:shadow-md h-52 object-cover hover:opacity-70 cursor-pointer"/>
        <div className=" h-[250px]">
        <h1 className="text-2xl pl-2 pt-2 text-bold">{props.title}</h1>
     <div className="flex space-x-2 pl-2 mb-1">  <GoLocation color="blue" className="mt-2 "/> <span className="text-xl text-gray-800 dark:text-gray-300">{props.location}</span> </div>
        <h1 className="mb-10 text-left px-2">{props.detail}</h1>
        </div>
     </div>
    );
}