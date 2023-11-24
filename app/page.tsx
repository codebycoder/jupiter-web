"use client";
import Image from "next/image";
import logo from "@/app/assets/images/logo.png";
import background from "@/app/assets/images/home-1.jpg";
import Timer from "./timer";
export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between bg-white">
      <div className="w-full h-screen">
        <Image
          src={background}
          alt="home"
          className=" h-full  object-cover brightness-125"
        />
      </div>

      <div className="w-full min-h-full absolute left-0 top-0 bottom-0 right-0 p-4  lg:p-10 ">
        <div className="bg-black/40 backdrop-blur-[2px] w-full h-full rounded-3xl shadow-2xl lg:justify-center items-center flex flex-col">
          <Image
            src={logo}
            alt=" logo"
            className="w-1/3 h-1/3 object-contain "
          />
          <h1 className="font-extrabold text-2xl md:text-4xl uppercase">
            Jupiter Wire Rope
          </h1>
          <h1 className="font-bold text-2xl md:text-3xl mt-6 text-gray-200">
            Coming Soon
          </h1>
          {/* for more information contact us with email */}
          <h1 className="text-md mt-10 text-gray-200 text-center">
            For more information contact us with email
          </h1>
          <a
            href="mailto:info@jupiter-wire-rope.it"
            className="font-bold text-md mt-2 text-gray-200"
          >
            info@jupiter-wire-rope.it
          </a>
          <Timer targetDate="6/1/2024" />
        </div>
      </div>
    </main>
  );
}
