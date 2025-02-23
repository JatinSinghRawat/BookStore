import React from 'react'
import List from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
    const filterData = List.filter((data)=>data.category === "Free");
  
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,// if greater than 1024px then 3 card will be shown
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,// if greater than 600px then 2 card will be shown
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,// if greater than 480px then 1 card will be shown
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
  <>
    <div className='max-w-screen-2xl container mx-auto my-10 md:px-20 px-4'>
      <div>
      <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur et, ex iure fugiat nisi odit velit ratione tempore, suscipit incidunt fuga distinctio corrupti amet nulla voluptates eligendi dignissimos, tenetur quae?</p>
      </div>
      <div>
        <Slider {...settings}>
            {filterData.map((item)=>{
              return <Cards item={item} key={item.id}/>
            })}
        </Slider>
      </div>
    </div>
  </>
    
  )
}

export default Freebook
