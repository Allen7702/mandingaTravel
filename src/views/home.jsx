import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeComponent from "../components/homeComponent";
import Slider from "../components/carousel";
import {BiBriefcaseAlt} from 'react-icons/bi';
import {GiWorld} from 'react-icons/gi';
import {RiServiceLine} from 'react-icons/ri';
import pic1 from "../images/kil1.jpg";
import pic2 from "../images/kil2.jpg";
import ser1 from "../images/ser1.jpg";
import ser4 from "../images/ser4.jpg";
import zan1 from "../images/zan1.jpg";
import jou from "../images/Journey-bro.png";
import zan8 from "../images/zan8.jpg";
import ballon from "../images/ballon.jpg";
import mt1 from "../images/mt1.jpg";


function Home(){
   return(
    <div className="  dark:text-white ">
   
      <Navbar/> 
   <div className=" pt-24 md:grid md:grid-cols-2  flex-col md:w-[90%] md:h-[750px] h-[700px]  m-auto  ">
     <div className="md:bg-slate-300 dark:md:bg-zinc-800 grid md:h-[750px] text-center   place-content-center md:px-5 md:px-40">
<h1 className="text-5xl md:text-8xl font-serif">Trust Mandinga Travels</h1>
<h1 className="text-2xl font-body ">A World of Endless Travel Possibilities</h1>
<h1>Mandinga Travels is here to plan an experience you’ll never forget. Founded in 2020, we are at Arusha . We take care of all the details so you can get straight to the fun. Get in touch to learn more. </h1>
<h1><a href ='tel:+255783700954'>+255 712 876 876</a></h1>
     </div>
     <div className="m-auto w-[99%] md:w-[100%] md:h-[750px]  h-[310px]">
<Slider 
img1={pic1}
img2={pic2}
img3={ser1}
img4={ser4}
img5={zan1}
/>
     </div>
   </div> 

<div>
<h1 className="  text-4xl md:text-6xl flex justify-center mt-5 md:mt-36">Our Services</h1>
</div>

<div className="dark:bg-black items-center flex flex-col  md:ml-auto justify-center  mt-10 md:mt-20 mb-32 md:m-auto md:w-[90%]     md:grid md:grid-cols-3 gap-10">
<HomeComponent
img={zan1} 
name='Mount Climbing'
list1='Get to climb Mount Kilimanjaro'
list2='Get to visit Mount Meru'
list3='visit various hills and waterfalls'
location="/mountain"

/>
<HomeComponent
img={pic2} 
name='Wildlife Safari'
list1='Visit various beaches'
list2='get to see old tombstones'
list3='get to see old tombstones'
location="/wildlife"
/>
<HomeComponent
img={ser4} 
name='zanzibar Safari'
list1='Visit various beaches'
list2='get to see old tombstones'
list3='get to see old tombstones'
location="/zanzibar"
/>
</div>

{/*why choose us. */}
<div className="hidden md:flex flex-col md:w-[85%]  rounded md:m-auto md:mt-20 pt-5 pb-5 dark:text-white dark:bg-black dark:text-zinc-100">

<h1 className="text-center text-5xl">WHY CHOOSE US?</h1>
<h1 className="text-center text-3xl">A BRAND NAME YOU CAN TRUST AND RELY ON</h1>
<div className="grid grid-cols-3 gap-10">

<div className="text-center m-auto mt-8 " >
  <div className="rounded-full bg-white w-24 h-24 pt-2 m-auto mb-2">
  <BiBriefcaseAlt size={80} color='orange' className="m-auto "/>
  </div>
  <h1 className="text-2xl ">AFFORDABLE PRICE<br/>GUARANTEE</h1>
  <h1 className="text-xl px-10">What other possibilities are there for breaking state monopolies whilst continuing to guarantee that all citizens obtain the best service at an affordable price.</h1>
</div>

<div className=" text-center m-auto mt-8" >
  <div className="rounded-full bg-white w-24 h-24 pt-2 m-auto mb-2">
  <GiWorld size={80} color='orange' className="m-auto "/>
  </div>
  <h1 className="text-2xl ">WIDE VARIETY OF<br/>DESTINATIONS</h1>
  <h1 className="text-xl px-10">What other possibilities are there for breaking state monopolies whilst continuing to guarantee that all citizens obtain the best service at an affordable price?</h1>
</div>

<div className=" text-center m-auto mt-8" >
  <div className="rounded-full bg-white w-24 h-24 pt-2 m-auto mb-2">
  <RiServiceLine size={80} color='orange' className="m-auto "/>
  </div>
  <h1 className="text-2xl ">HIGHLY QUALIFIED<br/>SERVICE</h1>
  <h1 className="text-xl px-10">What other possibilities are there for breaking state monopolies whilst continuing to guarantee that all citizens obtain the best service at an affordable price?</h1>
</div>

</div>
</div>

{/*Gallery */}
<div className=" hidden m-auto w-[60%] mt-10 mb-10 md:flex md:flex-col"> 
<div className="flex pb-5">
<h1 className="text-5xl ">Our Gallery</h1><h2 className=" text-xl text-gray-700 pt-6 dark:text-gray-300" >-share your happy moments</h2>

</div>
  <div className="grid grid-rows-3 grid-flow-col gap-6  h-[800px]">
<div className="bg-blue-300 row-span-2  rounded-2xl w-[400px]" > <img src={ballon}  className="object-cover rounded-2xl h-[100%]"/>  </div>
<div className="bg-blue-500 col-span-2 rounded-2xl w-[820px]"> <img src={mt1}  className="object-cover rounded-2xl h-[100%] w-[100%]"/> </div>
<div className="bg-blue-800 col-span-1 rounded-2xl w-[400px]">  <img src={zan8}  className="object-cover rounded-2xl h-[100%] w-[100%]"/> </div>
<div className="bg-green-300 row-span-1 col-span-2 rounded-2xl w-[820px]"> <img src={pic1}  className="object-cover rounded-2xl h-[100%] w-[100%]"/> </div>
<div className="bg-green-500 col-span-1 rounded-2xl w-[400px]">  <img src={pic1}  className="object-cover rounded-2xl h-[100%] w-[100%]"/> </div>
<div className="bg-yellow-300 col-span-1 rounded-2xl w-[400px]"> <img src={pic1}  className="object-cover rounded-2xl h-[100%] w-[100%]"/>  </div>

  </div>
</div>

{/*Time 
<div className="dark:bg-black  m-auto w-full md:w-[70%] flex  md:h-60 mt-16  mb-20  ">
      <div>
        <img src={pic1} alt="img"className="hidden md:flex h-60 "/>
      </div>
      <div className=" md:w-[70%] w-[90%] m-auto">
<div className=" text-center">
<h1 className="md:text-5xl text-3xl flex justify-center">With Our Experience we will serve you</h1>
<h1 className="flex justify-center">since we first opened we have always prioritized the convinience of our customers by providing low price and with a early process</h1>
</div>

<div className="mt-4 flex flex-row justify-center ml-auto md:space-x-28">
  <div> 
    <h1 className="md:text-6xl text-xl">10</h1>
    <h1 className="md:text-xl md:w-24 md:pl-3">Years of Experience</h1>
  </div>
  <div> 
    <h1 className="md:text-6xl text-xl">159</h1>
    <h1 className="md:text-xl md:w-24 md:pl-4" >Complete Tours</h1>
  </div>
  <div> 
    <h1 className="md:text-6xl pl-4 text-xl">1k</h1>
    <h1 className="md:text-xl md:w-24 md: pl-4">Happy Customers</h1>
  </div>
</div>
      </div>
      </div> 
*/}

 <Footer />
  
 
       
    </div>
   );
}
 export default Home;

