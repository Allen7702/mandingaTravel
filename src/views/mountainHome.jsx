import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Slider from "../components/carousel";
import MiniBar from "../components/miniBar";
import pic1 from "../images/kil1.jpg";
import Contact from "../components/contact";
import zani3 from "../images/zani3.jpg";
import oldonyo from "../images/oldonyo.jpeg";
import meru from "../images/meru.jpg";
import Button from "../components/button";

export default function Mountain(){
    return(
        <>
        <Navbar />
        <div className="dark:text-white">
          { /* The carousel part  */}
        <div className=" pt-24 md:grid md:grid-cols-2  flex-col md:w-[90%] md:h-[750px] h-[700px]  m-auto  ">
     <div className="md:bg-slate-300 dark:md:bg-zinc-800  md:h-[750px]   md:pt-20  md:pl-10">
<h1 className="text-5xl md:text-6xl font-serif">Mountain Climbing</h1>
<h1 className="text-2xl font-body ">- CLIMB THE TOP OF AFRICA -</h1>
<h1 className="md:pr-36 md:pt-5 md:text-xl md:mb-5">The most frequent expeditions are obviously to Mt. Kilimanjaro and Mt. Meru, but there are also other destinations such as the Crater Highlands.Kilimanjaro which is the highest mountain in Africa have attracted many climbers from around the globe. Mount Meru (4566m.) and Ol Donyo Lengai (active volcano) are also popular.  </h1>

 <div className="hidden md:flex">
 <Button
 location='/contactUs'
 bname='Book Now'
 />
 </div>
     </div>
     <div className="m-auto w-[99%] md:w-[100%] md:h-[750px]  h-[310px]">
<Slider />
     </div>
     </div> 

{/*  The tours  */}
<fieldset class="md:pt-36  w-[90%]  m-auto">
   
   <div className="flex">
   <div class="flex-grow border-t border-gray-500  md:ml-[700px] m-auto"></div>
   <span className="px-4 text-2xl">Mountain Tours</span>
   <div class="flex-grow border-t border-gray-500  md:mr-[700px] m-auto"></div>
   </div>

        <div class="pt-4 m-auto  md:w-[80%] md:flex md:grid md:grid-cols-4">
      <MiniBar 
      img={pic1}
      title='Mount Kilimanjaro'
      location='Kilimanjaro, Tanzania'
      detail="Africa's highest mountain and one of the continent's magnificent sights, It has three main volcanic peaks, Kibo, Mawenzi, and Shira. The name itself 'Kilimanjaro' is a mystery wreathed in clouds. It might mean Mountain of Light or Mountain of Greatness."
      />
      <MiniBar 
      img={meru}
      title='Mount Meru '
      location='Arusha, Tanzania'
      detail='Mount Meru is a dormant stratovolcano located 70 kilometres west of Mount Kilimanjaro in southeast Arusha Region.Climb Mount Meru, Second highest Mountain in Tanzania, is great with no traffic and amazing wildlife experience as you hike past wild animals.'
      />
      <MiniBar 
      img={oldonyo}
      title='Oldoinyo Lengai'
      location='Arusha, Tanzania'
      detail="'Oldoinyo Lengai' means The Mountain of God in the Maasai language. The summit of this strato-volcano is 2962 metres above sea level, and affords direct views into the caldera of Tanzania's only officially-certified active volcano, and the world's only carbonatite volcano."
      />
      <MiniBar 
      img={zani3}
      title='Materuni Waterfalls'
      location='Kilimanjaro, Tanzania'
      detail="Materuni Waterfall is one of the Waterfalls in the Mware River (Kilimanjaro Region, North East Tanzania).It's a beautiful spot and well worth the visit! The hike through the hills are full of outstanding views and a rewarding finish at the waterfalls"
      />
      
        </div>
    </fieldset>

   {/*contact us */}
   <Contact />
        </div>
        <Footer />
        </>
    );
}