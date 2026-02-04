import React from "react";

const Hero = () => {
  return (
    <section
      className="
        min-h-screen
        relative
        bg-[url('/img3.jpg')]
        bg-cover
        bg-no-repeat
        bg-center
        bg-black/75
        bg-blend-darken
        flex
        items-center
        pl-28
        py-36
        max-lg:pl-10
        max-sm:pl-4
      "
    >
      <div className="flex flex-col gap-8">
        
        {/* TITLE */}
        <div className="text-white font-bold leading-tight text-7xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
          <h1>LET's</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>

        {/* SUBTITLE */}
        <div className="space-y-2">
          <p className="text-white text-2xl max-md:text-lg">
            Your Journey to Fitness Starts Here
          </p>

          <p className="text-blue-500 text-2xl max-md:text-lg">
            Unleash Your Potential
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-6 max-sm:flex-col max-sm:items-start">
          <button
            className="
              px-8 py-3
              text-lg
              border
              border-blue-500
              text-blue-500
              hover:bg-blue-500
              hover:text-white
              transition
              duration-300
            "
          >
            Start Your Journey
          </button>

          <button
            className="
              px-8 py-3
              text-lg
              border
              border-blue-500
              text-blue-500
              hover:bg-blue-500
              hover:text-white
              transition
              duration-300
            "
          >
            Discover Your Plan
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
