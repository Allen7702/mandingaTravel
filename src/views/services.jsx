import React from "react";
import Navbar from "../components/navbar";
import pic1 from "../images/kil1.jpg";
import Footer from "../components/footer";
import Option from "../components/options";

function Service(){
    
    return(
        <>
<Navbar/>
<div className="dark:text-white pt-20 md:pt-32">
<div className="text-center mb-5">
<h1 className="md:text-5xl text-3xl text-center">Our Service</h1>
<h2 classname="text-2xl font-body ">What we do</h2>
</div>

<Option 
img={pic1}
heading='Family Travel Consultation'
words="Planning any type of travel can be overwhelming, which is why you need an experienced Travel Agency. With our Family Travel Consultation, you can count on us to guide you through every step of the process"
/>

<Option 
img={pic1}
heading='Zanzibar Holiday Safari'
words="Planning any type of travel can be overwhelming, which is why you need an experienced 500 Terry Francois Street. With our Family Travel Consultation, you can count on us to guide you through every step of the process"
/>
<Option 
img={pic1}
heading='Mountain Climbing'
words="Planning any type of travel can be overwhelming, which is why you need an experienced 500 Terry Francois Street. With our Family Travel Consultation, you can count on us to guide you through every step of the process"
/>
<Option 
img={pic1}
heading='Honeymoon safari'
words="Planning any type of travel can be overwhelming, which is why you need an experienced 500 Terry Francois Street. With our Family Travel Consultation, you can count on us to guide you through every step of the process"
/>
<Option 
img={pic1}
heading='Wildlife Exploration'
words="Planning any type of travel can be overwhelming, which is why you need an experienced Travel Agency. With our Family Travel Consultation, you can count on us to guide you through every step of the process"
/>
<Option 
img={pic1}
heading='Study Tour'
words="Planning any type of travel can be overwhelming, which is why you need an experienced Travel Agency. With our Family Travel Consultation, you can count on us to guide you through every step of the process"
/>


</div>

<Footer />
      </>
    );
}

export default Service;