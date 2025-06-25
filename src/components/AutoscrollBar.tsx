import React from "react";

const AutoscrollBar = () => {
  const message = (
    <div className="flex items-center h-full mx-20 whitespace-nowrap">
      <span className="text-white text-sm font-medium">
        FREE, DISCREET & <strong>1-3 DAY EXPRESS DELIVERY</strong> & <strong>COD AVAILABLE</strong>
      </span>
    </div>
  );

  return (
    <section id="home">
    <div className="w-full h-12 bg-black overflow-hidden relative mt-16">
      <div className="absolute top-0 left-0 flex h-full animate-marquee">
        {/* 2x repeated group of 5 to fill ~200% width */}
        {Array.from({ length: 10 }).map((_, index) => (
          <React.Fragment key={index}>{message}</React.Fragment>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 65s linear infinite;
        }
      `}</style>
    </div>
    </section>
  );
};

export default AutoscrollBar;
