import React from "react";

const Navbar = () => {
  return (
    <header
      className="
        absolute 
        top-10 
        left-28 
        max-md:left-6
        z-10
        border-2 
        border-white
        px-4 
        py-2
      "
    >
      <p
        className="
          text-white
          font-exo
          tracking-widest
          text-lg
          md:text-2xl
        "
      >
        ELITE EDGE FITNESS
      </p>
    </header>
  );
};

export default Navbar;
