import React from "react";
import Navbar from "../components/navbar";
import Button from "../components/button";

import pic1 from "../images/kil1.jpg";
import pic2 from "../images/kil2.jpg";
import ser1 from "../images/ser1.jpg";
import ser4 from "../images/ser4.jpg";


function Backup(){
   return(


<div  className='text-2xl h-screen relative' style={{ backgroundImage:`url(${ser1})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", }}>
  <Navbar />

  <div className=" mt-52 ml-10 relative text-left w-96">
<h1 className="text-lg">Welcome to Mandinga Travels</h1>
<h1 className="text-6xl">We Take Care of your Trip</h1>

<h1 className="text-base">we believe in a travelling experience 
    by providing our tour plan that suits 
    you best!</h1>
   <button type="button" >Book a Trip</button>
   
  </div>
  </div>
  );
}
 export default Backup;
