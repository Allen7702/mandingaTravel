import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeComponent from "./homeComponent";
import pic1 from "../images/kil1.jpg";
import pic2 from "../images/kil2.jpg";
import ser1 from "../images/ser1.jpg";
import ser4 from "../images/ser4.jpg";
import zan1 from "../images/zan1.jpg";

export default function Multicarousel(){
    
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
return(
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
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
name='Cultural Tourism'
list1='Get to have a Traditional Maasai tour'
list2='get to see different museums'
list3='get to have various chagga tours'
location="/zanzibar"
/>
<HomeComponent
img={ser4} 
name='zanzibar Safari'
list1='Visit various beaches'
list2='get to see old tombstones'
list3='get to see old tombstones'
location="/zanzibar"
/>

</Carousel>

    );
}