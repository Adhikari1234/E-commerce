const HeroSection = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="m-2 sm:m-4 md:m-6 lg:m-8">
      <div className="relative h-[300px] sm:h-[400px] md:h-[550px] lg:h-[700px] bg-cover rounded-xl bg-no-repeat flex items-center p-3 sm:p-5 md:p-10 overflow-hidden">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-xl -z-10"
        >
      <source src="/Vid.mp4" type="video/mp4" />

        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0  bg-opacity-30 z-0 rounded-xl" />

        {/* Content */}
        <div className="relative z-10 max-w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[60%]">
          {/* Heading */}
          <div className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
            <div>Order your</div>
            <div>Favourite food</div>
          </div>

          {/* Subtext */}
          <div className="mt-2 sm:mt-3 text-[10px] sm:text-sm md:text-lg font-medium text-white">
            "Discover fresh, delicious meals and ingredients delivered right to your door..."
          </div>

          {/* Discount */}
          <div className="mt-4 text-white font-medium rounded-md text-xs sm:text-sm md:text-lg p-2 px-3 bg-orange-500 w-fit shadow-md hover:bg-orange-600 transition">
            Enjoy 50% discount on first order
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToMenu}
            className="mt-3 sm:mt-4 text-Orange font-semibold bg-white bg-opacity-10 hover:bg-opacity-20 transition px-4 py-2 rounded-md text-xs sm:text-sm md:text-base"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
