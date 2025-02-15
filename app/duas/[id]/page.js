"use client";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { useRouter } from "next/navigation";
const DuaPage = () => {
  const params = useParams();

  console.log(params);

  const categoryId = Number(params.id);
  console.log(`/categories/${categoryId}`);
  const { data: dua, isLoading, error } = useFetch(`categories/${categoryId}`);

  if (isLoading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error loading data</p>;
  }

  return (
    <div className="dua-section  ">
      <div className="hidden md:block">
        <div className="search-form h-[40px] w-[40%]   flex relative justify-self-end mb-4">
          <div className="search-icon absolute w-[35px] h-[35px]  right-2 top-[50%] flex items-center justify-center -translate-y-1/2 bg-[#F3F4F6] rounded-[5px]">
            <Image src="/search.svg" alt="search-icon" width={20} height={20} />
          </div>
          <input
            className="  w-full rounded-[5px] pl-2 pr-[10px] focus:outline-none placeholder:text-[#868686] placeholder:text-[16px] placeholder:font-light border-[1.5px]  border-[#E2E2E2]"
            type="text"
            placeholder="Search By Categories"
          />
        </div>
      </div>

      <div
        key={dua.id}
        className="dua-content-container h-[600px] overflow-y-auto flex flex-col gap-[10px]"
      >
        {dua?.map((dua) => (
          <>
            <div
              key={dua.id}
              className="dua-content-section bg-[#fff] p-4 flex gap-[4px]  items-center rounded-[5px] font-semibold"
            >
              <span className="text-[#1fa45b] text-[12px] md:text-[16px] ">
                Section:
              </span>
              <p className="text-[10px] md:text-[14px]">
                {dua?.subcat_name_en}
              </p>
            </div>
            <div className="dua-content-section bg-[#fff] p-4 flex flex-col gap-[20px] text-[14px] rounded-[5px]">
              <div className="flex items-center gap-[5px] font-semibold">
                <span>
                  <Image
                    src={"/dua.svg"}
                    alt="dua-icon"
                    width={35}
                    height={35}
                  />
                </span>{" "}
                <p className="text-[#1fa45b]">{dua.dua_name_en}</p>
              </div>
              {dua.top_en && <p>{dua.top_en}</p>}
              {dua.dua_arabic && <p className="text-right">{dua.dua_arabic}</p>}
              <div className="reference flex flex-col gap-[5px]">
                <span className="font-semibold text-[#1fa45b]">Reference:</span>
                <p>{dua.refference_en}</p>
              </div>
              <div className="dua-icons flex justify-between">
                <div></div>
                <div className="flex gap-[20px]">
                  <Image src="/icon.svg" alt="icon" width={24} height={24} />
                  <Image
                    src="/bookmark-s.svg"
                    alt="bookmark-s"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/knowledge-s.svg"
                    alt="knowledge-s"
                    width={24}
                    height={24}
                  />
                  <Image src="/share.svg" alt="share" width={24} height={24} />
                  <Image
                    src="/report.svg"
                    alt="report"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default DuaPage;
