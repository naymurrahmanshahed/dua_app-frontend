"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoryCard = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      router.push(`/duas/${category?.id}`);
    }, 500);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="bg-[#E8F0F5] w-[92%] h-[80px] mx-auto mt-4 category-card flex items-center rounded-[10px] justify-between mb-2 cursor-pointer"
      >
        <div className="pl-[15px] category-card-left flex gap-[10px] items-center">
          <Image
            src={"/knowledge.svg"}
            alt={"knowledge-icon"}
            width={50}
            height={50}
          />
          <div className="category-title">
            <h5 className="text-[12px]">{category?.cat_name_en}</h5>
            <p className="total-subcategory text-[10px]">
              Subcategory : {category?.no_of_subcat}
            </p>
          </div>
        </div>
        <div className="category-card-right pr-[15px] flex flex-col items-center">
          <h6 className="font-semibold text-[12px]">{category?.no_of_dua}</h6>
          <p className="text-[12px]">Duas</p>
        </div>
      </div>

      {isOpen && (
        <div className="pl-[50px] flex flex-col relative">
          {category?.subcategories?.map((sub, index) => (
            <div key={index} className="flex gap-[20px] items-center">
              <div className="dua-title-left relative h-[40px] border-l border-dashed border-[#1fa45b]"></div>
              <div className="right">
                <h6 className="text-[#1fa45b] text-[14px]">
                  {sub.subcat_name_en}
                </h6>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryCard;
