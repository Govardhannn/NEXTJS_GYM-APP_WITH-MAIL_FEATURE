"use client";

import Image from "next/image";

const WorkoutSessions = () => {
  return (
    <section className="relative py-24 px-6">
      
      {/* GLASS CONTAINER */}
      <div className="
        max-w-7xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-16
        bg-white/5
        backdrop-blur-2xl
        border border-white/10
        rounded-3xl
        p-10
        shadow-[0_0_60px_rgba(99,102,241,0.15)]
      ">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          
          {/* HEADING */}
          <h1 className="
            text-4xl
            font-extrabold
            tracking-widest
            text-transparent
            bg-clip-text
           bg-linear-to-r
            from-indigo-400
            to-purple-500
            drop-shadow-[0_0_25px_rgba(99,102,241,0.7)]
          ">
            TOP WORKOUT SESSION
          </h1>

          {/* TEXT */}
          <p className="text-gray-300 text-lg leading-relaxed">
            Push beyond your limits with our elite workout programs designed to 
            transform strength, endurance, and confidence. Whether you&apos;re just 
            starting your fitness journey or striving for peak performance, our 
            expert trainers and high-energy environment will help you achieve 
            results faster than ever.
          </p>

          {/* IMAGE */}
          <div className="relative h-105 w-full rounded-2xl overflow-hidden">
            <Image
              src="/img5.jpg"
              alt="Workout Training"
              fill
              priority
              className="object-cover hover:scale-105 transition duration-700"
            />

            {/* CINEMATIC OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"/>
          </div>

          {/* STATS */}
          <div className="flex gap-10 mt-4">
            <div>
              <h2 className="text-3xl font-bold text-indigo-400">120+</h2>
              <p className="text-gray-400">Active Members</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-indigo-400">15+</h2>
              <p className="text-gray-400">Expert Trainers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-indigo-400">8+</h2>
              <p className="text-gray-400">Workout Programs</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          <h1 className="
            text-4xl
            font-extrabold
            tracking-widest
            text-transparent
            bg-clip-text
            bg-linear-to-r
            from-indigo-400
            to-purple-500
          ">
            FEATURED BOOTCAMPS
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Experience next-level training with our specialized bootcamps built 
            to challenge your body and ignite your motivation. Every session is 
            crafted to deliver measurable progress while keeping you energized 
            and inspired.
          </p>

          {/* BOOTCAMPS */}
          <div className="flex flex-col gap-6">

            {[
              {
                title: "Strength & Conditioning",
                desc: "Build lean muscle, improve power, and enhance total-body performance."
              },
              {
                title: "HIIT Fat Burn",
                desc: "Maximize calorie burn and accelerate fat loss with intense intervals."
              },
              {
                title: "Functional Fitness",
                desc: "Boost mobility, stability, and real-world strength for everyday movement."
              },
              {
                title: "Cardio Endurance",
                desc: "Increase stamina and heart health with high-energy cardio sessions."
              },
            ].map((camp, index) => (
              
              <div
                key={index}
                className="
                  p-6
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-lg
                  hover:bg-white/10
                  transition
                  duration-300
                  hover:scale-[1.02]
                  cursor-pointer
                "
              >
                <h4 className="text-xl font-semibold text-indigo-300">
                  {camp.title}
                </h4>

                <p className="text-gray-400 mt-2">
                  {camp.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkoutSessions;
