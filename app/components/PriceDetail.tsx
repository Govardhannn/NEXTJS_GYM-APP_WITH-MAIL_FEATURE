import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

const PriceDetails = () => {
  const pricing = [
    {
      imgUrl: "/img11.jpg",
      title: "QUARTERLY",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: "/img10.jpg",
      title: "HALF_YEARLY",
      price: 34000,
      length: 6,
    },
    {
      imgUrl: "/img13.jpg",
      title: "YEARLY",
      price: 67000,
      length: 12,
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      {/* TITLE */}
      <h1
        className="
text-5xl
font-extrabold
text-center
mb-16
bg-linear-to-r
from-blue-400
via-cyan-300
to-blue-600
text-transparent
bg-clip-text
drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]
"
      >
        KRISHNA ELITE FITNESS
      </h1>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pricing.map((element) => (
          <div
            key={element.title}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white hover:-translate-y-2"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative h-64 w-full">
              <Image
                src={element.imgUrl}
                alt={element.title}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* TEXT OVER IMAGE */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h2 className="text-3xl font-bold">{element.title}</h2>

                <p className="text-xl font-semibold">₹ {element.price}</p>

                <span className="text-sm">{element.length} Months</span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="p-6 space-y-4">
              {[
                "Premium Equipment Access",
                "All Day Free Training",
                "Clean & Spacious Restrooms",
                "24/7 Skilled Support",
                "20 Days Freezing Option",
              ].map((feature, i) => (
                <p key={i} className="flex items-center gap-3 text-gray-600">
                  <Check className="text-blue-500 w-5 h-5" />
                  {feature}
                </p>
              ))}

              {/* BUTTON */}
              <Link
                href="/"
                className="block text-center bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Explore More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceDetails;
