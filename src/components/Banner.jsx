const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-[#020617]">

      {/* Left Side Of Banner*/}

      <div className="max-w-xl">

        <p className="inline-block px-4 py-1 mb-4 text-sm text-purple-300 bg-purple-900 rounded-full">
          🔥 New: AI-Powered Tools Available
        </p>

        
        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
          Supercharge Your <br /> Digital Workflow
        </h1>

        <p className="mt-4 text-gray-400"> Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.Explore Products
 </p>

        {/* Buttons Section In Bannert */}

        <div className="flex gap-4 mt-6">
          <button className="px-6 py-2 text-white bg-purple-600 rounded-full hover:bg-purple-700">Explore Products
          </button>

          <button className="px-6 py-2 text-gray-300 border border-gray-600 rounded-full hover:bg-gray-800">
            ▶ Watch Demo
          </button>
        </div>
      </div>

      {/* Right Banner  Image Section */}
      <div className="mt-10 md:mt-0">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYAYMKRcgRqZHTa5oYUZi8a8MiOhCDdvhOVMMhoeo2f8D-ovMOBUf8qA359fpVUruS0sYjOoE6cPKfrxhE9SvksUKF7O-IWpbyuULi3X7ACcg-gQFR3pHLgMV0FY-071wWRJQEgozHXJr02Z6kRtVRxnVu3vIy6kF1D1q9aArO69cE8_dVcOaHkFvNnX1L/s590/banner.png" alt="banner"
          className="shadow-lg rounded-xl4 opacity-90"
        />
      </div>

    </div>
  );
};

export default Banner;