"use client";
import React from "react";
import { FlipWords } from "../components/ui/flip-words";
function About() {
  const words = [
    "JavaScript",
    "React Js",
    "Next Js",
    "Laravel",
    "React Native",
    "Livewire",
  ];
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <div className="max-w-5xl mx-auto space-y-20">
        <h1 className="text-4xl">
          We are providing services on
          <FlipWords words={words} className="text-5xl font-bold" /> <br />
        </h1>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">About our Company</h1>
          <p className="text-base">
            Welcome to Demo project, where innovation meets excellence in
            technology. Established in 2024, our company has been at the
            forefront of delivering cutting-edge solutions that empower
            businesses and individuals to thrive in the digital age.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Our Vision</h1>
          <p>
            Our vision is to be a global leader in technology innovation,
            renowned for our commitment to quality, creativity, and customer
            satisfaction. We strive to be the go-to partner for businesses
            seeking to leverage technology to achieve their goals and make a
            positive impact on the world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
