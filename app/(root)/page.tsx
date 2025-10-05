// "use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import SearchForm from "@/components/SearchForm";
import { ThreeDCardDemo } from "@/components/ThreeDCard";
// import { auth } from "@/auth";


export default async function Home({ searchParam } : {searchParam : Promise<{query ? :string}>}){
  // const query = (await searchParam).query;
  // const params = {search : query || null}
  // const session = await auth();

  // console.log(session?.id)

  // const {data : posts} = await sanityFetch({query : PROJECT_QUERY, params})

  return (
    <>
      <div className="h-[730px] relative w-full overflow-hidden bg-slate-900 flex flex-col justify-center items-center">
        <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className="heading relative">Welcome to Project-Hub</h1>
        <p className="sub-heading !max-w-3xl relative">
          Where idea Meet Developers
        </p>
        <SearchForm />
      </div>

      <section className="section_container">
        <p className="text-30-semibold">Trendy Project</p>
        <ul className="mt-7 card_grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 justify-center">
          {/* {posts.map((curElem : ProjectTypeCard, index : number) => {
            return (
              <div key={index}>
                <ThreeDCardDemo />
              </div>
            );
          })} */}
          {
            [1,2,3,4,6].map((curElem) => {
               return <li>
                <ThreeDCardDemo />
               </li>
            })
          }
        </ul>
      </section>
    </>
  )
}