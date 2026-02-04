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
        
        px-4 
        py-2
      "
    >
     <p
  className="
    inline-block
    text-white
    font-exo
    tracking-widest
    text-lg md:text-2xl
    px-6 py-2
    rounded-md
    border border-indigo-400/40
    bg-white/5
    backdrop-blur-md
    
    shadow-[0_0_15px_rgba(99,102,241,0.6)]

    transition-all
    duration-500
    ease-in-out

    hover:shadow-[0_0_35px_rgba(99,102,241,1)]
    hover:scale-105
  "
>
  KRISHNA ELITE FITNESS
</p>

    </header>
  );
};

export default Navbar;
