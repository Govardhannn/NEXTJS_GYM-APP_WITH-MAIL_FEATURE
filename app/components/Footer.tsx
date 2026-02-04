

const Footer = () => {
  return (
    <footer className="mt-20 flex items-x-auto  border-white/10 bg-black/40 backdrop-blur-lg ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
          <p className="hover:text-indigo-400 transition duration-300 cursor-pointer">
            📍 Mumbai, India
          </p>

          <span className="hidden md:block text-gray-600">|</span>

          <p className="hover:text-indigo-400 transition duration-300 cursor-pointer">
            📞 +91 98765 43210
          </p>

          <span className="hidden md:block text-gray-600">|</span>

          <p className="hover:text-indigo-400 transition duration-300 cursor-pointer">
            ✉️ support@krishnaelitefitness.com
          </p>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Krishna Elite Fitness. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
