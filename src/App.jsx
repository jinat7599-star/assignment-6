import { useState, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layout & UI Components
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  const [basket, setBasket] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  // Interaction Handlers
  const handlePurchase = (item) => {
    const isDuplicate = basket.some((unit) => unit.id === item.id);

    if (isDuplicate) {
      toast.warning("Already added ⚠️");
      return;
    }

    setBasket((prev) => [...prev, item]);
    toast.success("Added to cart ✅");
  };

  const handleDiscard = (productId) => {
    setBasket((prev) => prev.filter((item) => item.id !== productId));
    toast.error("Removed from cart ❌");
  };

  const handleCheckout = () => {
    setBasket([]);
    toast.success("Checkout successful 🎉");
  };

  // Sub-render for the Toggle Navigation
  const renderNavigationToggle = () => (
    <div className="max-w-2xl pt-20 mx-auto text-center">
      <h2 className="text-3xl font-bold md:text-4xl">Premium Digital Tools</h2>
      <p className="mt-3 text-sm text-gray-400 md:text-base">
        Choose from our curated collection of premium digital products
        designed to boost your productivity and creativity.
      </p>

      <div className="inline-flex items-center p-1 mt-8 border border-gray-800 rounded-full bg-gray-900/40">
        {[
          { id: "products", label: "Products" },
          { id: "cart", label: `Cart (${basket.length})` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-2 text-sm font-medium transition-all rounded-full ${
              activeTab === tab.id
                ? "bg-[#7C3AED] text-white shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <main className="bg-[#020617] min-h-screen text-white antialiased">
      <Navbar cart={basket} />
      
      <Banner />
      
      <Stats />

      {renderNavigationToggle()}

      <section className="pb-20">
        {activeTab === "products" ? (
          <Products addToCart={handlePurchase} cart={basket} />
        ) : (
          <Cart 
            cart={basket} 
            removeItem={handleDiscard} 
            clearCart={handleCheckout} 
          />
        )}
      </section>

      <Steps />
      <Pricing />
      <CTA />
      <Footer />

      <ToastContainer 
        position="top-right" 
        autoClose={2000} 
        theme="dark"
      />
    </main>
  );
};

export default App;