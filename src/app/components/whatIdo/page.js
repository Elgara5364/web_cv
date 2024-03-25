"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

import bcr from "/public/bcr.png";
import wedding from "/public/wedding.png";
import Link from "next/link";
import Image from "next/image";
import Project1 from "/public/lofi-girl-art-wallpaper-3840x2160_54.jpg";

const WhatIDo = () => {
  const data = [
    {
      image: bcr,
      alt: "Project1",
      title: "Binar Car Rental",
      description:
        "Website untuk menyewa Mobil. Penyewa dan Pengguna dipermudah untuk melakukan sewa dan membayar mobil yg di sewa. Pengguna bisa memilih mobil yang ingin disewa, memilih durasi sewa dan memilih pembayaran via bank tertentu",
      link: "https://binar-car-rental-group-challenge.vercel.app/",
    },
    {
      image: wedding,
      title: "Wedding Invitation",
      description:
        "Undangan Pernikahan dalam bentuk web. User bisa melihat pasangan mempelai, lokasi pernikahan, dan bisa mengisi apakah mereka akan hadir dan jumlah yang akan hadir. Pengguna juga bisa melihat hitung mundur acara.",
      link: "https://elgara5364.github.io/Wedding-Invitation/",
    },
  ];

  return (
    <div
      className="mx-2 pt-5 md:mx-10 px-4 lg:mx-20 lg:pt-7 2xl:mx-60"
      id="what-i-do">
      {/* <h1 className="text-center mb-10">What I Do</h1> */}
      <h1 className="mb-3 text-primary font-bold text-xl text-center">
        What I Do
      </h1>
      <h2 className="text-5xl font-bold mb-5 text-center text-secondary lg:pb-7">
        I Love What I Do
      </h2>

      <Swiper
        // navigation={true}
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        breakpoints={{
          300: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
            width: 800,
            height: 500,
          },
        }}
        className="mySwiper">
        {data.map((data) => (
          <SwiperSlide>
            <div className=" bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              {/* <Link href={data.link}> */}
              <Image
                class="rounded-t-lg w-[500px] h-[250px]"
                src={data.image}
                alt={data.alt}
                c
              />
              {/* </Link> */}
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.description}
                </p>
                <Link
                  href={data.link}
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-300 dark:hover:bg-orange-300 dark:focus:ring-orange-800">
                  See Project
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}{" "}
      </Swiper>
    </div>
  );
};

export default WhatIDo;