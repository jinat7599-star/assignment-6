const ToggleSection = ({ view: activeTab, setView: updateTab, cart: userBasket = [] }) => {
  const showBadge = userBasket.length > 0;

  const getBtnClass = (name) => {
    const base = "px-6 py-2 rounded transition-all font-medium";
    const active = "bg-blue-600 text-white shadow-lg";
    const inactive = "bg-gray-800 text-gray-300 hover:bg-gray-700";
    return `${base} ${activeTab === name ? active : inactive}`;
  };

  return (
    <div className="flex justify-center gap-4 py-10 bg-[#020617]">
      <button
        onClick={() => updateTab("products")}
        className={getBtnClass("products")}
      >
        Products
      </button>

      <button
        onClick={() => updateTab("cart")}
        className={`relative ${getBtnClass("cart")}`}
      >
        Cart
        {showBadge && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
            {userBasket.length}
          </span>
        )}
      </button>
    </div>
  );
};

export default ToggleSection;