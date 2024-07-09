"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import frame19Image from "../../../public/images/Frame19.png";

interface FilterSection {
  id: string;
  name: string;
  type: "category" | "size" | "color" | "other";
}

const Sidebar: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filterSections: FilterSection[] = [
    { id: "category", name: "Category", type: "category" },
    { id: "priceRange", name: "Price Range", type: "other" },
    { id: "color", name: "Color", type: "color" },
    { id: "size", name: "Size", type: "size" },
    { id: "deliveryTime", name: "Delivery Time", type: "other" },
  ];

  const sizes = Array.from({ length: 12 }, (_, i) => i + 34);
  const colors = [
    "#F75274",
    "#FF5F00",
    "#34A853",
    "#89894B",
    "#8F39CE",
    "#4285F4",
    "#FF0000",
    "#FCBB45",
  ];

  const toggleSection = (sectionId: string): void => {
    setOpenSection((prev) => (prev === sectionId ? null : sectionId));
  };

  const selectCategory = (category: string): void => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="w-[300px]  border-r bg-white relative flex flex-col">
      <div className="absolute top-0 right-0 bottom-0 w-px bg-gray-200"></div>
      <div className="flex-grow overflow-auto">
        {filterSections.map((section, index) => (
          <div
            key={section.id}
            className={`${
              index !== filterSections.length - 1
                ? "border-b border-gray-200"
                : ""
            }`}
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-3 text-sm"
            >
              <span>{section.name}</span>
              {openSection === section.id ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </button>
            {openSection === section.id && (
              <div className="p-3">
                {section.type === "category" &&
                  ["Men", "Women", "Children"].map((option) => (
                    <div
                      key={option}
                      className="flex items-center justify-between mb-2 last:mb-0 text-sm"
                    >
                      <span>{option}</span>
                      <input
                        type="checkbox"
                        title="checkbox"
                        checked={selectedCategory === option}
                        onChange={() => selectCategory(option)}
                        className="ml-2"
                      />
                    </div>
                  ))}
                {section.type === "size" && (
                  <div className="grid grid-cols-4 gap-1">
                    {sizes.map((size) => (
                      <div
                        key={size}
                        className="bg-gray-100 rounded p-1 text-center text-xs"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                )}
                {section.type === "color" && (
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-between">
                      {colors.slice(0, 4).map((color) => (
                        <div
                          key={color}
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      {colors.slice(4).map((color) => (
                        <div
                          key={color}
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className=" mt-[80px] mb-6  flex justify-center">
        <img
          src={frame19Image.src}
          alt="Frame 19"
          className="max-w-full h-auto"
        />
      </div>
      {/* Bottom line with rounded edges */}
      <div className="h-px bg-gray-200 mx-3 rounded-full"></div>

      {/* Spacer for bottom rounded corner */}
      <div className="h-3"></div>

      {/* Rounded corner */}
      <div className="absolute bottom-0 right-0 w-[12px] h-[12px] bg-white rounded-tr-[12px] shadow-[1px_-1px_0_0_#e5e7eb]"></div>
    </div>
  );
};

export default Sidebar;
