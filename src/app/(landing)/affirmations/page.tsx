/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from "@/components/card";
import toast from "react-hot-toast";
import Link from "next/link";
import { Button } from "@/components/button";

export default function Affirmation() {
  const affirmations = [
    "I am capable of achieving my goals because I believe in myself and my potential",
    "I am confident in my abilities to focus and consistently work towards my aspirations. I will celebrate every milestone along the way.",
    "I am worthy of happiness and success because I am a good person and I deserve to experience the fruits of my efforts",
    "I believe in myself, I am capable of amazing things.I embrace challenges as opportunities for growth.",
    "I embrace change and welcome new beginnings as a natural part of life's journey. I am open to the unexpected and exciting paths that may unfold before me.",
    "I am Unique and Special, Not like anyone else.I have my own set of dreams, desires, and passions. I embrace my individuality and strive to live a life that reflects my authentic self.",
    "I am inferior to No one, I know who I am. I know my strengths, my weaknesses, and values. I am on my own unique journey of self-discovery and growth, and I embrace every step along the way.",
    "I am a Star, NO One can dull my sparkle. I am unique and extraordinary. I may face challenges and obstacles, but I will rise above them, shining brighter than ever before.",
    "I am a beloved child of the universe. I am worthy of love and I am deeply loved by those around me. I cultivate self-love and compassion, and I open my heart to receive the love that surrounds me.",
    "I am not timid; I am a person of action. I am full of energy and drive, and I am not afraid to take risks and pursue my dreams with passion and determination",
    "I am capable of making a lot of difference in the world",
    "I am a burst of fine flavours. I spread good energy everywhere I go.",
    "I excel in everything I put my mind to.",
    "I believe in my myself, My dreams are valid. My dreams will come true!",
    "I understand that achieving my goals may require effort and may involve setbacks. I embrace the journey of learning and growth, knowing that each step brings me closer to realizing my dreams.",
    "I Know that everyday may not be good but 'I am a good thing' everyday",
    "I am braver than I Believe, I am Stronger than I seem and Smarter than I think",
    "I carry something great inside of me, The world is waiting for Me to happen",
    "I am amazing, I am beautiful, I am God’s child, The Apple of His eyes.",
    "I am a source of inspiration, a beacon of hope and positivity, inspiring others to believe in themselves and their own abilities.",
    "I am a student of life, constantly learning from my experiences, both successes and failures",
    "I am the architect of my inner world, the master of my mind. I am mindful of my thoughts and choose to focus on positive, uplifting beliefs",
    "I am a unique and valuable human being, deserving of love, respect, and happiness.",
    "I am deeply grateful for the gift of good health. I cherish my physical, mental, and emotional well-being, and I am committed to nurturing them through mindful choices",
    "I am confident in my ability to make wise decisions.I am a skilled decision-maker. I approach each choice with a calm and focused mind,",
    "I am a good listener and a good communicator.,I am open to new experiences and opportunities.",
    "I am committed to living a life of purpose.",
    "I am a force for good in the world.",
    "I am worthy of all the good things in life.",
    "I am grateful for the lessons I have learned.",
    "I am a compassionate and empathetic person.",
    "I am proud of my accomplishments.",
    "I am a work in progress and I am proud of my journey.",
    "I am a light in the darkness, spreading warmth and compassion wherever I go. I choose to focus on the good, to cultivate gratitude, and to share my light with the world.",
    "I am a source of strength and encouragement for others.",
    "I am filled with gratitude for the breathtaking beauty that surrounds me, the vibrant colors of nature, the gentle caress of the breeze, the warmth of the sun and the twinkling of the stars.",
    "I am a powerful and positive force in the universe.",
    "I am free to be myself, authentically. I release the need to conform and embrace my true essence.",
    "I am capable of achieving anything I set my mind to.",   
    "I am deserving of inner peace and tranquility. I release all negative thoughts and emotions, allowing myself to experience a sense of calm and serenity.",
    "I am grateful for the opportunity to learn and grow. I am committed to expanding my knowledge, developing new skills, and becoming the best version of myself.",
    "I am loved and accepted for my unique gifts and talents. I am cherished for my kindness, compassion, and the joy I bring to the world.",
  ];

  const [firstName, setFirstName] = useState("");
  const [dataStored, setDataStored] = useState<any>();

  useEffect(() => {
    getLoggedInUserData();
  })
  function getLoggedInUserData() {
    const storedData = localStorage.getItem("registrationData");
    setDataStored(storedData)
    // Check if storedData is null
    if (!storedData) {
      toast.error("No user found. Please register first.");
      return null;
    }
  
    // Parse the stored JSON safely
    const userData = JSON.parse(storedData);
    setFirstName(userData?.firstName)
  
  }

  // console.log(dataStored)
  // const getFirstName = JSON.parse(dataStored)?.firstName;

  // console.log(getFirstName)

  function insertFirstName(affirmation: string, firstName: string) {
    const finalText = [affirmation.slice(0, 1), `${firstName}, I`, affirmation.slice(1)].join(' ')
    return(
      <span>{finalText}</span>
    )
  }

  return (
    <div className="relative flex bg-[url('/images/kids-login.jpg')] bg-cover bg-center h-[61rem] flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center z-10">
        {dataStored ? 
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 20000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay, Pagination]}
            className="mySwiper flex items-center justify-center max-w-full h-full"
          >
            <div className="relative flex items-center justify-center">
              {affirmations.map((_, index) => (
                <SwiperSlide key={index} className="flex h-full">
                  <Card className="flex items-center bg-[url('/images/confetti.png')] bg-cover bg-center justify-center max-w-md max-h-full mx-auto w-full hoverflow-hidden text-center">
                    <h1 className="text-3xl font-bold">{insertFirstName(_, firstName)}</h1>
                  </Card>
                </SwiperSlide>
              
              ))}
            </div>
          </Swiper> : 
          <>
            <Card className="items-center max-w-md max-h-full w-[700px] h-[200px] overflow-hidden text-center">
              <h1 className="text-xl  font-semibold">Oops! Seems you are not logged in, kindly click on the button below to register and/or login to have access to the Affirmations!</h1>

              <div className="">
                <Link href={"/register"}>
                  <Button
                    variant="primary"
                    type="button"
                    size="md"
                    className="mt-16 -ml-14"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </Card>
          </>
        }
        
      </div>
    </div>
  );
}
