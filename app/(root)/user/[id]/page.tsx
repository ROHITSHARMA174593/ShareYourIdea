"use client";

import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { ThreeDCardDemo } from "@/components/ThreeDCard";

interface UserPageProps {
  params: { id: string };
}

type EvervaultCard = {
  text?: string;
  className?: string;
  imageURL?: string; // ✅ add this
};

// Use function declaration, not arrow function
export default function UserPage({ params }: UserPageProps) {
  // const { id } = params;

  return (
    <section className="profile_container">
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[30rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        
        <EvervaultCard text="hover" imageURL="https://imgs.search.brave.com/PNIKAVsDk6O84u7lS1AEQRnJiQiC62e5My89pdpv8lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC83/MS8zMS9sdXh1cnkt/ZmxvcmFsLXdvbWFu/LWxvZ28tdmVjdG9y/LTIzMjU3MTMxLmpw/Zw" />

        <h2 className="dark:text-white text-black mt-4 text-lg font-bold text-center">
          Name LastName
        </h2>
        <p className="text-sm border font-semibold dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5 line-clamp-2 text-center pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, atque porro non numquam, sequi quam sed mollitia reiciendis eum error ratione ducimus nam architecto voluptate dolorem blanditiis deleniti maiores neque repudiandae quidem id voluptatem. Ipsum deleniti doloremque in excepturi consequuntur et totam pariatur! Reiciendis, laudantium.
        </p>
      </div>
      <div className="flex flex-col flex-1 gap-5 lg:mt-5">
        <p className="text-30-bold">All Projects</p>
        <ul className="mt-7 card_grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-1 justify-center">
                {
                  [
                    {id:"1", titlee:"This is Titlee"},
                    {id:"2", titlee:"This is Titlee"},
                    {id:"3", titlee:"This is Titlee"},
                    {id:"4", titlee:"This is Titlee"},
                    {id:"5", titlee:"This is Titlee"},

                  ].map((curElem) => {
                    return <div key={curElem.id}>
                      <ThreeDCardDemo />
                    </div>
                  })
                }
              </ul>

      </div>
    </section>
  );
}