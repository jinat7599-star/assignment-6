const Footer = () => {
  const currentYear = 2026;
  
  const siteLinks = {
    product: ["Features", "Pricing", "Templates", "Integrations"],
    company: ["About", "Blog", "Careers", "Press"],
    resources: ["Documentation", "Help Center", "Community", "Contact"]
  };

  return (
    <footer className="bg-[#0F172A] text-gray-400 px-8 py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        
        <div className="brand-info">
          <h2 className="mb-3 text-xl font-bold text-white">DigiTools</h2>
          <p className="text-sm">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        {Object.entries(siteLinks).map(([category, items]) => (
          <div key={category}>
            <h3 className="mb-3 text-white capitalize">{category}</h3>
            <ul className="space-y-2 text-sm">
              {items.map(item => <li key={item} className="hover:text-white cursor-pointer">{item}</li>)}
            </ul>
          </div>
        ))}

        <div className="social-links-container">
          <h3 className="mb-3 text-white">Social Links</h3>
          <nav className="flex gap-4 text-xl">
            <a href="#" className="transition hover:text-blue-500" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="transition hover:text-red-500" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" className="transition hover:text-pink-500" aria-label="Instagram">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </nav>
        </div>
      </div>

      <div className="flex flex-col justify-between pt-6 mt-10 text-sm border-t border-gray-700 md:flex-row">
        <p>© {currentYear} DigiTools. All rights reserved.</p>
        <nav className="flex gap-4 mt-2 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;