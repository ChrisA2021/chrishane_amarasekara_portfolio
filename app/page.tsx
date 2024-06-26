import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(to top left, #01bdcf, #2297d4, #3479d9, #5255e0, #6a34e3, #7b20e8)',
      }}
    >

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Chrishane Amarasekara
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );

}
