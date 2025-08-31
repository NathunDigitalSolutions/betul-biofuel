import React from "react";

const CreativeBackgroundWrapper = ({ children }) => {
  return (
    <div className="relative bg-background overflow-hidden pt-20 pb-24">
      {/* Content */}
      <div className="relative z-10 mx-auto px-6 md:px-20">{children}</div>

      {/* Single bottom wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 fill-white"
        >
          <path d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default CreativeBackgroundWrapper;
