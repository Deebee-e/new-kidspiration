'use client';
import React from "react";
import CountUp from 'react-countup';

export function OurImpactAtGlance() {

  return (
    <section>
      <div className=" w-full bg-[#044479] items-center py-10 md:py-24 mb-24 md:px-14">
        <div className="block md:flex justify-center text-center mt-4 md:mt-0">
          <h1 className="text-2xl mb-10 md:heading3 text-white">
            OUR IMPACT AT A GLANCE
          </h1>
        </div>
        <div className="grid grid-cols-3 divide-x text-center items-center text-white">
          <div>
            <h1 className="text-2xl md:text-7xl font-bold">
            <CountUp duration={10} end={43} />
            </h1>
            <h3 className="md:text-2xl text-sm">TESTIMONIALS </h3>
          </div>
          <div>
            <h2 className="text-2xl md:text-7xl font-bold">
              <CountUp duration={10} end={43} />
            </h2>
            <h3 className="md:text-2xl text-sm">IMPACTS MADE </h3>
          </div>
          <div>
            <h2 className="text-2xl md:text-7xl font-bold">
              <CountUp 
                duration={10} 
                end={43} 
              />
            </h2>
            <h3 className="md:text-2xl text-sm">TOTAL USERS </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
