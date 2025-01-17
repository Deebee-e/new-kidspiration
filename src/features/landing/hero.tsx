'use client'
import { Button } from "@/components/button";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';


export function Hero() {

  const banners = [
    {
      id: 1,
      image: '/images/hero-bg-1.jpg',
      header: 'Explore',
      sub: 'Inspirational Affirmations',
      body: 'Daily drops of positive affirmations to inspire and motivate your kids.',
      btn: (
        <div className="flex items-center relative space-x-5 md:space-x-7">
          <Link href="/register">
            <Button size="lg" variant="inverse" className="border-0">Get Started</Button>
          </Link>
          
        </div>
      ),
    },
    {
      id: 2,
      image: '/images/hero-bg-2.jpg',
      header: 'Explore',
      sub: 'Motivational Affirmations',
      body: 'Daily drops of positive affirmations to inspire and motivate your kids.',
      btn: (
        <div className="flex items-center relative mt-7 space-x-5 md:space-x-7">
          <Link href="/register">
            <Button size="lg" variant="inverse" className="border-0">Get Started</Button>
          </Link>
          
        </div>
      ),
    },
  ];
  return (
    <section>            
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper relative"
      >
        {banners.map((_, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${_.image})`,
              }}
              className="md:py-none h-[70vh] bg-no-repeat py-32 md:h-[85vh] md:bg-cover"
            >
              <div
                className={`mx-10 flex flex-col text-white justify-center md:h-[60vh] md:w-[600px] md:px-16`}
              >
                <h1 className="mb-4 text-4xl  font-extrabold md:text-7xl">
                  {_.header}
                </h1>  
                <h1 className="text-4xl text-[#F7D116] font-extrabold md:text-7xl">
                  {_.sub}
                </h1>
                             
                <p className="my-5 mb-10 font-sans md:text-3xl text-xl">{_.body}</p>
                <div>{_.btn}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
