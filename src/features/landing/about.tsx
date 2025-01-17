'use client';
import { Card } from "@/components/card";
import Image from "next/image";

const ourServices = [
  {
    title: "Our Goals",
    description:
      "Inspire Young Minds. Foster Creativity. Shape the Future.",
    icon: "/img/icons/service/s1.svg",

  },
  {
    title: "Our Impact",
    description:
      "Empowering and Transforming Lives while Nurturing the Giants within our Not so little Ones.",
    icon: "/img/icons/service/s2.svg",
  },
  {
    title: "User-Friendly Features",
    description:
      "Colorful and Engaging, our Platform is Designed for Effortless learning and exploration.",
    icon: "/img/icons/service/s3.svg",
  },
  {
    title: "User Control",
    description:
      "Enjoy a seamless and engaging experience with our beautifully designed interface, perfect for both children and adults.",
    icon: "/img/icons/service/s3.svg",
  },
];

export function About() {
  return (
    <section id="features">
      <div className="container my-24 text-center mx-auto px-10 md:px-12 space-y-5">
        <h2 className="text-2xl md:heading3 font-bold text-[#044479]">
          Words Carry Power
        </h2>
        <p className="px-2 lg:px-52 md:px-8 md:text-2xl text-xl text-gray-500">
        The KidSpiration Platform is Designed to Create Real-World Impact on the Lives of our Children; Grooming Positive-Minded Adults and Creating Beautiful Stories Borne from &apos;Confident Hearts&apos;.
        </p>
        <div className="px-2 lg:px-32 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mt-7 py-4 md:py-10">
          {ourServices.map((service, idx) => (
            <Card
              key={idx}
              className="p-5 my-2 md:my-0 space-y-2 border-none shadow-sm bg-white hover:shadow-xl"
            >
              <div className="flex flex-col space-x-3 space-y-6 items-center">
                <div className="flex items-center justify-center h-20 w-20">
                  <Image
                    src={service.icon}
                    alt="ourservice icon"
                    height={70}
                    width={70}
                  />
                </div>

                <h2 className="md:text-3xl text-2xl md:font-bold">{service.title}</h2>
              </div>
              <div>
                <p className="text-xl mt-4 text-gray-500">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
        </div>
        {/* <div className="mt-16 justify-center">
            <img 
              src={`/img/explore-video.png`}
              alt="ourservice icon"
              width="auto"
              height="auto"
            />
        </div> */}
      </div>
    </section>
  );
}
