const Pricing = () => {
  const tiers = [
    {
      title: "Starter",
      sub: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      btnText: "Get Started Free",
      isPro: false
    },
    {
      title: "Pro",
      sub: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      btnText: "Start Pro Trial",
      isPro: true
    },
    {
      title: "Enterprise",
      sub: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      btnText: "Contact Sales",
      isPro: false
    }
  ];

  return (
    <section className="bg-[#020617] text-white px-6 md:px-12 py-20 text-center">
      <header>
        <h2 className="text-3xl font-bold md:text-4xl">Simple, Transparent Pricing</h2>
        <p className="mt-2 mb-12 text-gray-400">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {tiers.map((tier) => (
          <div 
            key={tier.title}
            className={`p-8 rounded-xl border relative transition-transform hover:scale-105 ${
              tier.isPro 
                ? "bg-gradient-to-r from-purple-600 to-purple-800 border-transparent shadow-lg" 
                : "bg-[#0F172A] border-gray-800"
            }`}
          >
            {tier.isPro && (
              <span className="absolute px-3 py-1 text-xs font-medium text-black -translate-x-1/2 bg-yellow-400 rounded-full -top-3 left-1/2">
                Most Popular
              </span>
            )}
            
            <h3 className="text-xl font-semibold">{tier.title}</h3>
            <p className={`mt-1 text-sm ${tier.isPro ? "text-purple-200" : "text-gray-400"}`}>{tier.sub}</p>
            <p className="mt-4 text-3xl font-bold">
              ${tier.price}<span className={`text-sm ${tier.isPro ? "text-white/70" : "text-gray-400"}`}>/month</span>
            </p>

            <ul className="mt-6 space-y-2 text-sm text-left list-none">
              {tier.features.map((feat) => (
                <li key={feat} className={tier.isPro ? "text-white" : "text-gray-400"}>✔ {feat}</li>
              ))}
            </ul>

            <button className={`w-full py-2 mt-8 rounded-full transition font-medium ${
              tier.isPro ? "bg-white text-black hover:bg-gray-200" : "bg-purple-600 text-white hover:bg-purple-700"
            }`}>
              {tier.btnText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;