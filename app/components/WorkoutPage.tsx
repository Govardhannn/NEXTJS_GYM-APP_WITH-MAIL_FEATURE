import Image from "next/image";

const WorkoutSessions = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
      
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-900">
          TOP WORKOUT SESSION
        </h1>

        <p className="text-gray-500 text-lg">
          Push your limits with high-energy workout sessions designed to
          improve strength, endurance, and overall fitness. Whether you're
          just starting out or already an athlete, our expert trainers help
          you stay motivated and achieve real results.
        </p>

        <div className="relative w-full h-[400px]">
          <Image
            src="/img5.jpg"
            alt="Workout training session"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Extra Detail */}
        <div className="flex gap-8 mt-4">
          <div>
            <h2 className="text-2xl font-bold text-blue-500">120+</h2>
            <p className="text-gray-500">Active Members</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-500">15+</h2>
            <p className="text-gray-500">Expert Trainers</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-500">8+</h2>
            <p className="text-gray-500">Workout Programs</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-900">
          FEATURED BOOTCAMPS
        </h1>

        <p className="text-gray-500 text-lg">
          Our bootcamps are built to challenge you, energize you, and deliver
          visible transformation. Train in a supportive environment where
          every session brings you closer to your fitness goals.
        </p>

        {/* BOOTCAMPS */}
        <div className="flex flex-col gap-6">

          {[
            {
              title: "Strength & Conditioning",
              desc: "Build lean muscle, increase power, and enhance physical performance with structured strength training.",
            },
            {
              title: "HIIT Fat Burn",
              desc: "Maximize calorie burn in minimal time with high-intensity interval workouts designed for rapid fat loss.",
            },
            {
              title: "Functional Fitness",
              desc: "Improve mobility, balance, and real-world strength with exercises that prepare your body for everyday movement.",
            },
            {
              title: "Cardio Endurance",
              desc: "Boost stamina and heart health through dynamic cardio routines that keep you energized all day.",
            },
          ].map((camp, index) => (
            <div
              key={index}
              className="
                border
                rounded-md
                p-5
                space-y-3
                transition
                duration-300
                hover:bg-gray-900
                hover:text-white
                cursor-pointer
              "
            >
              <h4 className="text-xl font-semibold text-blue-500">
                {camp.title}
              </h4>

              <p>{camp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
