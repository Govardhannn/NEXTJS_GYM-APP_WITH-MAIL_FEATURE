import Image from "next/image";

const OfferingPic = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  return (
    <section className="bg-gray-950 py-24 px-6">
      
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold tracking-wide text-blue-500 text-center mb-16">
        BETTER BEATS BEST
      </h1>

      {/* GRID */}
      <div className="
        max-w-7xl 
        mx-auto 
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-6
      ">
        {gallery.map((img, index) => (
          <div
            key={index}
            className="
              relative
              w-full
              h-[260px]
              overflow-hidden
              rounded-xl
              group
              cursor-pointer
            "
          >
            <Image
              src={img}
              alt="Gym gallery"
              fill
              className="
                object-cover
                transition
                duration-500
                group-hover:scale-110
              "
            />

            {/* Overlay Effect */}
            <div className="
              absolute inset-0 
              bg-black/20 
              group-hover:bg-black/40
              transition
            "/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferingPic;
