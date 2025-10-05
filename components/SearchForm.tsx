"use client";
import React, { useState } from "react";
import Form from "next/form";
import { Search } from "lucide-react";
import { FaWindowClose } from "react-icons/fa";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({query} : {query? : string}) => { // question mark just for query can be undefined
  const [userInput, setUserInput] = useState("");

  return (
    <Form action={"/"} scroll={false} className="search-form relative">
      <input
        type="text"
        name="query"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="search-input"
        placeholder="Search Projects"
      />

      <div className="flex gap-2">
         {userInput.length > 0 && (
          <button
            type="button"
            onClick={() => setUserInput("")}
          >
            <FaWindowClose className="size-8 " />
          </button>
        )} 
        
        {/* {query && (
          <div>
            <SearchFormReset />
          </div>
        )} */}

        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;