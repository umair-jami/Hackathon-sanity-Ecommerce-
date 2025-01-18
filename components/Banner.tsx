'use client'
import React from "react";
import heroImg from "@/public/heroImg.png";
import heroCover from "@/public/herovecor2.png";
import heroVector from "@/public/herovector.png";
import { Poppins } from "next/font/google";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Banner() {
  return (
    <section
      className={`${poppins.className} container bg-customColors-bg2 h-auto w-full max-w-6xl px-6 py-12`}
    >
      <div className="flex flex-col lg:flex-row justify-around items-center bg-customColors-bg2 h-full">
        <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl lg:w-[150px] w-auto`}
            style={{ fontWeight: 900 }}
          >
            <span className="pr-4">FIND</span>CLOTHES{" "}
            <span className="pr-4">THAT</span>MATCHES{" "}
            <span className="pr-4">YOUR</span>STYLE{" "}
          </h1>
          <p className={`mt-5 lg:w-[400px]`} style={{ fontWeight: "300" }}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="mt-5 flex justify-center  lg:justify-start ">
            <Link href="/casual"  className="bg-black text-white px-12 py-4 rounded-full">SHOP NOW</Link>
            {/* <button className="bg-black text-white px-12 py-4 rounded-full">
              SHOP NOW
            </button> */}
          </div>
          <div className="flex justify-around items-center mt-10 flex-wrap">
            {/* International Brands */}
            <p style={{ fontWeight: 600 }} className="text-4xl">
              <CountUp start={0} end={200} duration={2} />+
              <span
                className="block text-Text1 text-sm"
                style={{ fontWeight: 400 }}
              >
                International Brands
              </span>
            </p>

            {/* High-Quality Products */}
            <p style={{ fontWeight: 600 }} className="text-4xl">
              <CountUp start={0} end={2000} duration={2.5} />+
              <span
                className="block text-Text1 text-sm"
                style={{ fontWeight: 400 }}
              >
                High-Quality Products
              </span>
            </p>

            {/* Happy Customers */}
            <p style={{ fontWeight: 600 }} className="text-4xl">
              <CountUp start={0} end={30000} duration={3} />+
              <span
                className="block text-Text1 text-sm"
                style={{ fontWeight: 400 }}
              >
                Happy Customers
              </span>
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 w-full relative sm:px-24 lg:px-0">
          <Image
            src={heroImg}
            alt="hero"
            className="w-[75%] h-auto max-w-sm md:max-w-md lg:max-w-lg object-cover"
          />
          <div className="absolute top-6 left-1/2">
            <Image
              src={heroVector}
              alt="heroVector"
              className="animate-spin w-20 "
              style={{ animation: "spin 2s linear infinite" }}
            />
          </div>
          <div className="absolute top-24">
            <Image
              src={heroCover}
              alt="herovector"
              className="animate-spin "
              style={{ animation: "spin 2s linear infinite" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
