import React from "react";
import Navbar from "../components/navbar";
import Slider from "../components/carousel";
import Button from "../components/button";
import pic1 from "../images/kil1.jpg";
import Footer from "../components/footer";
import MiniBar from "../components/miniBar";
import mnemba from "../images/mnemba.jpg";
import zanprison from "../images/zanprison.jpg";
import zani1 from "../images/zani1.jpg";
import zani2 from "../images/zani2.jpg";
import zani3 from "../images/zani3.jpg";
import oldonyo from "../images/oldonyo.jpeg";
import meru from "../images/meru.jpg";
import animal1 from "../images/animal1.jpg";
import animal3 from "../images/animal3.jpg";
import ser3 from "../images/ser3.jpg";
import flamingo from "../images/flamingos.jpg";
import crater from "../images/crater.jpg";
import lion from "../images/lion.jpg";
import quad from "../images/quad.jpg";





function Tours(){
    return(
        <div>
<Navbar />
<div className="flex-col dark:text-white">
<div className=" pt-24 md:grid md:grid-cols-2  flex-col md:w-[90%] md:h-[750px] h-[700px]  m-auto mb-20 md:mb-32 ">
     <div className="md:bg-slate-300 dark:md:bg-zinc-800 grid md:h-[750px] text-center   place-content-center px-5 md:px-40">
<h1 className="text-5xl md:text-8xl font-serif">PLAN YOUR TRIP WITH US</h1>
<h1 className="text-2xl font-body ">A World of Endless Travel Possibilities</h1>
<h1>Mandinga Travels is here to plan an experience you’ll never forget. Founded in 2020, we are at Arusha . We take care of all the details so you can get straight to the fun. Get in touch to learn more. </h1>
<h1 className="mb-5">+255 712 876 876</h1>
<Button
location='/contactUs'
bname='Book Now'
/>
     </div>
     <div className="m-auto w-[99%] md:w-[100%] md:h-[750px]  h-[310px]">
<Slider
img1={zani1}
img2={zani2}
img3={ser3}
img4={zani1}
img5={zani2}
/>
     </div>
   </div> 

   <fieldset class="pt-6  w-[90%]  m-auto">
   
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

<fieldset class="pt-6  w-[90%]  m-auto">
   
   <div className="flex">
   <div class="flex-grow border-t border-gray-500  md:ml-[700px] m-auto"></div>
   <span className="px-4 text-2xl">Wildlife Tours</span>
   <div class="flex-grow border-t border-gray-500  md:mr-[700px] m-auto"></div>
   </div>
   
        <div class="pt-4 m-auto  md:w-[80%] md:flex md:grid md:grid-cols-4">
      <MiniBar 
      img={lion}
      title='Serengeti National Park'
      location='Northern Tanzania'
      detail='Unmatched for its natural beauty and scientific importance, Serengeti National Park is without a doubt the most well-known wildlife sanctuary in the world. It also boasts the highest concentration of plains game in Africa.'
      />
    <MiniBar 
      img={crater}
      title='Ngorongoro Crater'
      location='Arusha, Tanzania'
      detail='The biggest unflooded and unbroken caldera in the world, a deep volcanic crater is the crown jewel of Ngorongoro. The Ngorongoro Crater, which is around 20 km broad, 600 m deep, and 300 km2 in size, is a spectacular natural wonder.'
      />
      <MiniBar 
      img={ser3}
      title='Arusha National Park '
      location='Arusha, Tanzania'
      detail='Discover and explore the diversity of Arusha National Park, The unforgiving landscapes of Mount Meru and Ash cone, scenic view of Momella Lakes, tropical forest glades,Ngurdoto Crater are just a few'
      />
      <MiniBar 
      img={animal1}
      title='Tarangire National Park'
      location='Babati, Tanzania'
      detail='In all of Tanzania, Tarangire National Park has some of the largest densities of elephants, and its sparse vegetation, which is peppered with baobab and acacia trees, makes it a lovely and interesting place to explore.'
      />
      <MiniBar 
      img={flamingo}
      title='Nkomazi National Park'
      location='Kilimanjaro, Tanzania'
      detail="The region surrounding Lake Natron, a soda lake at the base of the active Ol Doinyo Lengai volcano, is frequently described as having a barren and almost lunar beauty.It is the world's most significant breeding location for lesser flamingos."
      />
      <MiniBar 
      img={animal3}
      title='Ruaha National Park'
      location='Southern Tanzania'
      detail='The largest national park in Tanzania in terms of surface area is Ruaha National Park, which is situated 200 miles from the heart of Dar es Salaam. In comparison to other national parks in Africa, Ruaha is renowned for having the greatest concentration of lions and elephants.'
      />
</div>
      </fieldset>

<fieldset class="pt-6  w-[90%]  m-auto">
   
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

</div>

<Footer/>
        </div>
    );
}

export default Tours;