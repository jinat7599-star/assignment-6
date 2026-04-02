const CTA = () => {
  const headline = "Ready To Transform Your Workflow?";
  const subtext = "Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.";

  return (
    <section className="px-6 py-20 text-center text-white bg-linear-to-r from-purple-600 to-pink-500">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        {headline}
      </h2>

      <p className="mb-6 text-sm text-gray-200 md:text-base">
        {subtext}
      </p>

      <div className="flex justify-center gap-4 mb-4">
        <button className="px-6 py-2 font-semibold text-purple-600 bg-white rounded-full hover:opacity-90 transition">
          Explore Products
        </button>

        <button className="px-6 py-2 border border-white rounded-full hover:bg-white/10 transition">
          View Pricing
        </button>
      </div>

      <footer className="text-xs text-gray-200">
        14-day free trial • No credit card required • Cancel anytime
      </footer>
    </section>
  );
};

export default CTA;