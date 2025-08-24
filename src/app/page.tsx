"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Home() {


  return (
    <div>

      <div className="min-h-[95vh] w-full flex flex-col md:grid md:grid-cols-7 md:grid-rows-6 px-0">
        {/* Upper Left - Main Title */}
        <div className="flex-1 md:row-span-4 md:col-span-5 p-4 md:p-8 border-r border-b border-black md:flex md:flex-col gap-4 items-center justify-center">
          <p className="x0 text-wrap">
            Homebrew <Image
              src="/logo/logo.svg"
              alt="homebrew logo"
              width={60}
              height={60}
              className="inline-block mx-0 align-middle"
            /> is NU's community of builders.
          </p>
          <p className="x1">
            Homebrew is the club for Northwestern students who build projects and startups. We provide community, guidance, and resources to help members build what they believe in.
          </p>
        </div>

        {/* Upper Right - Empty (hidden on mobile) */}
        <div className="hidden md:block md:row-span-4 md:col-span-2 p-8 border-b border-black flex items-center justify-center">
        </div>


        {/* Bottom Left - Description */}
        <div className="flex-1 md:row-span-2 md:col-span-5 p-4 md:p-8 border-r border-b border-black md:flex md:items-center justify-center">
          <p className="x1">
            blah blah blah
          </p>
        </div>

        {/* Bottom Right - Image */}
        <div className="flex-1 md:row-span-2 md:col-span-2 md:border-b bg-gray-50 flex items-center justify-center">
          <Image
            src="/images/computer_in_field.png"
            alt="computer in field"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}
