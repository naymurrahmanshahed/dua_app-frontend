"use client";

import Image from "next/image";
import CategoryCard from "./CategoryCard";
import useFetch from "@/hooks/useFetch";

const Categories = () => {
  const { data: categories, isLoading, error } = useFetch(`categories`);

  return (
    <div className="flex flex-col gap-7">
      <h2 className="title text-2xl font-semibold">Dua Page</h2>
      <div className="categories-side  overflow-hidden bg-[#fff] rounded-[10px] ">
        <h4 className="categories-side-title px-[10px] text-center text-[#FFFFFF] font-semibold py-[15px] bg-[#1fa45b]">
          Cetegories
        </h4>
        <div className=" search-field h-[40px] w-full justify-center flex relative mt-4">
          <div className="search-icon absolute left-7 top-[50%] -translate-y-1/2">
            <Image
              src="/search.svg"
              alt={"search-icon"}
              width={20}
              height={20}
            />
          </div>
          <input
            className="w-[92%] rounded-[5px] pl-10 pr-[10px] focus:outline-none placeholder:text-[#868686] placeholder:text-[16px] placeholder:font-light border-[1.5px]  border-[#E2E2E2]"
            type="text"
            placeholder="Search By Categories"
          />
        </div>
        <div className="category-card-section h-[500px] overflow-y-auto">
          {categories?.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
