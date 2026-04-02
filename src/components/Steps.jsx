const Steps = () => {
  const workflowSteps = [
    {
      id: "01",
      icon: "fa-rocket",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately."
    },
    {
      id: "02",
      icon: "fa-box-open",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs."
    },
    {
      id: "03",
      icon: "fa-user",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started."
    }
  ];

  return (
    <section className="bg-[#020617] text-white px-6 md:px-12 py-20 text-center">
      <h2 className="text-3xl font-bold md:text-4xl">Get Started In 3 Steps</h2>
      <p className="mt-2 mb-12 text-sm text-gray-400 md:text-base">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {workflowSteps.map((step) => (
          <div 
            key={step.id} 
            className="relative bg-[#0F172A] p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition group"
          >
            <span className="absolute px-3 py-1 text-xs bg-purple-600 rounded-full top-4 right-4">
              {step.id}
            </span>

            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-purple-400 bg-purple-900 rounded-full group-hover:scale-110 transition-transform">
              <i className={`fa-solid ${step.icon}`}></i>
            </div>

            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;