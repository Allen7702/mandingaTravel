import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MiniBar from "../components/miniBar";
import Contact from "../components/contact";
import Button from "../components/button";
import Slider from "../components/carousel";
import quad from "../images/quad.jpg";
import mnemba from "../images/mnemba.jpg";
import zanprison from "../images/zanprison.jpg";
import zani1 from "../images/zani1.jpg";
import zani2 from "../images/zani2.jpg";
import zani3 from "../images/zani3.jpg";

export default function Zanzibar(){
    return(
        <>
        <Navbar />
        <div className="dark:text-white">
          { /* The carousel part  */}
        <div className=" pt-24 md:grid md:grid-cols-2  flex-col md:w-[90%] md:h-[750px] h-[700px]  m-auto  ">
     <div className="md:bg-slate-300 dark:md:bg-zinc-800  md:h-[750px]   md:pt-20  md:pl-10">
<h1 className="text-5xl md:text-6xl font-serif">Visit Zanzibar</h1>
<h1 className="text-2xl font-body ">- WELCOME TO PARADISE -</h1>
<h1 className="md:pr-36 md:pt-5 md:text-xl md:mb-5">Spend a lovely day at the beach.
On immaculate white sand beaches, go barefoot.
Take a boat trip on some pristine blue lake to clear your head.
Dive deep into the ocean to discover Zanzibar's natural splendor.
At Forodhani Food Market, savor international and African food.
Bless yourself with spectacular views of the sunset, evening strolls, nightlife, delicious restaurants, beautiful beaches, historical monuments, and more. </h1>

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
   <span className="px-4 text-2xl">Zanzibar Tours</span>
   <div class="flex-grow border-t border-gray-500  md:mr-[700px] m-auto"></div>
   </div>

        <div class="pt-4 m-auto  md:w-[80%] md:flex md:grid md:grid-cols-4">
      <MiniBar 
      img={zani1}
      title='Stone Town Tour'
      location='Zanzibar, main island'
      detail='The Stone Town of Zanzibar is a fine example of the Swahili coastal trading towns of East Africa. Get to experience, and learn about coastal Swahili culture, history, food and other traditions.'
      />
      <MiniBar 
      img={zanprison}
      title='Prison Island'
      location='Zanzibar,prison island'
      detail='See the giant land tortoises, dik-dik antelope, and a nice beach of the Prison Island, or Changuu Island, with time to swim, snorkel, and sunbathe.Both morning and afternoon departures to Prison Island are available'
      />
      <MiniBar 
      img={mnemba}
      title='Mnemba Island'
      location='Zanzibar, mnemba island'
      detail='Mnemba Island is one of the best spots for snorkeling on Zanzibar.The reef around the island is pretty large and attracts a fair amount of visitorsThe views you’ll get of the island are gorgeous but you won’t be allowed to set foot on it..'
      />
      <MiniBar 
      img={zani3}
      title='Nakupenda beach day'
      location='Zanzibar, main island'
      detail='Zanzibar snorkeling trip to Nakupenda beach one of the whitest sandbank. Boat ride from Stone town approx. 30 minutes, seafood buffet or special dietary lunch request included.'
      />
       <MiniBar 
      img={zani3}
      title='Zanzibar Slave Trade'
      location='Zanzibar, main island'
      detail='It was the main slave-trading port of the African Great Lakes region, and in the 19th century as many as 50,000 slaves were passed through the slave markets of Zanzibar each year.'
      />
        <MiniBar 
      img={quad}
      title='Zanzibar Quad Adventure'
      location='Zanzibar'
      detail='Driving your own quad bike, enjoy a rich off-road-itinerary into wild landscape through local farms, sugar cane plantation, quarries, spice trees and secular baobabs.'
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