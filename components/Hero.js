import React from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row xl:grid-flow-col grid-rows-2 xl:grid-rows-1 md:grid-cols-2 gap-8 py-6 lg:py-16 text-center md:text-left">
        <div className="flex flex-col justify-center md:items-start row-start-2 md:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            Want anything to be easy with <strong>LotoVPN</strong>.
          </h1>
          <p className="text-black-500 mt-4 md:-mb-12">
            Provide a network for all your needs with ease and fun using LotoVPN
            discover interesting features from us.
          </p>
          <ButtonPrimary addClass="max-w-full md:ml-0 md:mr-0 mt-4 md:mt-16">
            Get Started
          </ButtonPrimary>
        </div>
        <div className="flex w-full">
          <div className="h-full w-full">
            <Image
              src="/assets/Illustration1.svg"
              alt="VPN Illustrasi"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-indigo-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
