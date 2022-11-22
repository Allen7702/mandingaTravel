import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Slider from "../components/carousel";
import MiniBar from "../components/miniBar";
import Contact from "../components/contact";
import Button from "../components/button";
import animal1 from "../images/animal1.jpg";
import animal3 from "../images/animal3.jpg";
import ser3 from "../images/ser3.jpg";
import flamingo from "../images/flamingos.jpg";
import crater from "../images/crater.jpg";
import lion from "../images/lion.jpg";
import ser2 from "../images/ser2.jpg";
import mt4 from "../images/mt4.jpg";
import animal2 from "../images/animal2.jpg";
import ser5 from "../images/ser5.jpg";
import monkey from "../images/monkey.jpg";



export default function Wildlife(){
    return(
        <>
        <Navbar />
        <div className="dark:text-white">
          { /* The carousel part  */}
        <div className=" pt-24 md:grid md:grid-cols-2  flex-col md:w-[90%] md:h-[750px] h-[700px]  m-auto  ">
     <div className="md:bg-slate-300 dark:md:bg-zinc-800  md:h-[750px]   md:pt-20  md:pl-10">
<h1 className="text-5xl md:text-6xl font-serif"> Wildlife Tours</h1>
<h1 className="text-2xl font-body ">- WHERE THE WILD THINGS ARE -</h1>
<h1 className="md:pr-36 md:pt-5 md:text-xl md:mb-5">Let us take you there for a life time culture, wildlife and the exotic beach experience. We provide quality, safe and ethical safari tours to the most breathtaking places.</h1>

 <div className="hidden md:flex">
 <Button
 location='/contactUs'
 bname='Book Now'
 />
 </div>
     </div>
     <div className="m-auto w-[99%] md:w-[100%] md:h-[750px]  h-[310px]">
<Slider
img1={ser2}
img2={mt4}
img3={animal2}
img4={ser5}
img5={monkey}
/>
     </div>
     </div> 

{/*  The tours  */}

    <fieldset class="md:pt-36  w-[90%]  m-auto">
   
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
   {/*contact us */}
   <Contact />
        </div>
        <Footer />
        </>
    );
}