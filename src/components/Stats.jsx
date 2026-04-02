const Stats = () => {
  const metricList = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" }
  ];

  return (
    <section className="bg-[#020617]">
      <div className="w-full bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="px-4 py-14 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 text-center divide-y sm:grid-cols-2 md:grid-cols-3 sm:divide-y-0 md:divide-x divide-white/20">
            {metricList.map((stat, idx) => (
              <div key={idx} className="py-6 md:py-10">
                <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                  {stat.value}
                </h2>
                <p className="mt-2 text-sm text-purple-100 md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;