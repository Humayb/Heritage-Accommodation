

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../component/banner/banner.css";


import slid1 from '../../../img/torang-hotel.jpg'
import slid2 from '../../../img/kolbeh-chobi.jpg'
import slid3 from '../../../img/desert1/Karvansara.jpg'



const items = [
  { id: 1, url: slid1 },
  { id: 2, url: slid2  },
  { id: 3, url: slid3  },

];

export default function BannerRooms(){
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
      };
    return(
      <div className='slider-top'>
        <Slider {...settings} className="slider-hero">

        {items.map(item => {
            return (
              <div key={item.id}>
                  <img src={item.url} alt="" className="d-block w-100" />
              </div>
            );
          })}


        </Slider>
      </div>
    )
}




