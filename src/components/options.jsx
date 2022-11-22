import React from "react";
 
export default function Option(props){
    return(
<div className="md:bg-zinc-300 dark:md:bg-zinc-800 md:shadow-lg md:flex w-[98%] md:w-[70%] m-auto mb-10">
<div className="y-10 md:w-[35%]">
  <img src={props.img} className="h-[100%]" />
</div>
<div className="pt-2 md:w-[65%] text-center md:text-left lg:pt-20 md:px-20 lg:pr-32 ">
   <h1 className="text-2xl md:text-3xl pb-4 ">
{props.heading}
</h1>
<h2>
    {props.words}
    </h2>   
 </div>
</div>

    );
}
