import React from "react";

const categories = [
  { name: "Massagers", image: "/mylovebliss-visual-serenity/images/massager.png" },
  { name: "Bundles", image: "/mylovebliss-visual-serenity/images/bundle.png" },
  { name: "Deals", image: "/mylovebliss-visual-serenity/images/deal.png" },
  { name: "Accessories", image: "/mylovebliss-visual-serenity/images/accessories.png" },
  { name: "Games & More", image: "/mylovebliss-visual-serenity/images/game.png" },
  { name: "Lubes & Oils", image: "/mylovebliss-visual-serenity/images/lube.png" },
];

const CategorySection = () => {
  return (
    <div className="w-full py-8 bg-white">
      {/* Mobile scrollable wrapper */}
      <div className="sm:hidden px-4 overflow-x-auto">
        <div className="flex space-x-4 w-max">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center text-center min-w-[100px]">
              <div className="w-28 h-28 rounded-full bg-yellow-100 flex items-center justify-center shadow-sm">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-sm mt-2 font-medium whitespace-nowrap">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop grid layout */}
      <div className="hidden sm:grid max-w-6xl mx-auto px-4 grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-yellow-100 flex items-center justify-center shadow-sm">
              <img
                src={category.image}
                alt={category.name}
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-sm mt-3 font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
