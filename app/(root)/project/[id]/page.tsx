"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { ThreeDCardDemo } from "@/components/ThreeDCard";
import Link from "next/link";
import Image from "next/image";

export default function BackgroundBoxesDemo({params} : {params : {id : string}}) {
  return (
    <>
      <div className="h-[545px] relative w-full overflow-hidden bg-slate-900 flex flex-col justify-center items-center">
        <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <p className="tag relative">04 July 2025</p>
        <h1 className="heading relative">THIS IS A GREAT MASTERPIECE PROJECT</h1>
        <p className="sub-heading !max-w-5xl relative line-clamp-3">
          This is a Nice Project (Description)
        </p>
      </div>

      <section className="section_container">
        <img src="https://i0.wp.com/zhengludwig.wordpress.com/wp-content/uploads/2015/07/img_8991.jpg?ssl=1" alt="" className="w-full h-auto rounded-xl " />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
            <div className="flex-between gap-5">
                <Link href={"/"} className="flex gap-2 items-center mb-3">
                    <Image src={"https://imgs.search.brave.com/PNIKAVsDk6O84u7lS1AEQRnJiQiC62e5My89pdpv8lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC83/MS8zMS9sdXh1cnkt/ZmxvcmFsLXdvbWFu/LWxvZ28tdmVjdG9y/LTIzMjU3MTMxLmpw/Zw"} alt="" width={64} height={64} className="rounded-full drop-shadow-lg" />
                    <div>
                        <p className="text-20-medium">Author Name</p>
                        <p className="text-16-medium !text-black-300">@username</p>
                    </div>
                </Link>
                <p className="category-tag">Electronics</p>
            </div>
            <h3 className="text-30-bold">Project Details</h3>
            <p className="no-result">No Details Provided</p>
        </div>
        <hr className="divider"/>
      </section>

      
    </>
  );
}