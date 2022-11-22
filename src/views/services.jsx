import React from "react";
import Navbar from "../components/navbar";
import pic1 from "../images/kil1.jpg";
import Footer from "../components/footer";
import Option from "../components/options";
import zan2 from "../images/zan2.jpg";
import ser5 from "../images/ser5.jpg";
import zani3 from "../images/kil1.jpg";
import family from "../images/family.jpg";
import honey from "../images/honey.jpg";
import zanprison from "../images/zanprison.jpg";

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
img={family}
heading='Family Travel Consultation'
words="Planning any type of travel can be overwhelming, which is why you need an experienced Travel Agency. With our Family Travel Consultation, you can count on us to guide you through every step of the process"
/>

<Option 
img={zan2}
heading='Zanzibar Holiday Safari'
words="Find discounts on the best Zanzibar Holiday Packages. Mandinga Travels helps you spend less.Tours to Zanzibar combine laid-back beach accommodation with plenty of activities and superb locations to offer a culturally-rich but super-relaxed vacation"
/>
<Option 
img={pic1}
heading='Mountain Climbing'
words="Enjoy an unforgettable Mountain Climbing trip in Tanzania with Mandinga Travels.In Tanzania, most climbers opt for Kilimanjaro and Mount Meru. Meru is Africa's fifth highest peak with fabulous views of Mt. Kilimanjaro and the Momela Lakes from the summit."
/>
<Option 
img={honey}
heading='Honeymoon safari'
words="Congratulations on your wedding!
What is more romantic than a honeymoon in Tanzania? Tanzania is quite likely not the first place that jumps to mind when you think of top honeymoon destinations in Africa, but it’s an amazing choice nonetheless, especially if you and your loved one enjoy a touch of adventure and excitement on your romantic travels on your first view days of married life. "
/>
<Option 
img={ser5}
heading='Wildlife Exploration'
words=" Discover the real wild side of Africa on an adventure safari, choose an exciting tour that will ensure you have the holiday of a lifetime."
/>
<Option 
img={zanprison}
heading='Study Tour'
words="Student tours in Tanzania can be any Safari holiday, Beach holiday, trekking holiday or cultural tour.Mandinga Travels offers a series of engaging educational travel experiences to help you grow into a global citizen."
/>


</div>

<Footer />
      </>
    );
}

export default Service;