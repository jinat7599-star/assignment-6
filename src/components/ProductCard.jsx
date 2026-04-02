const ProductCard = ({ product: info, addToCart: handleAdd, cart: currentItems = [] }) => {
  const { id, tagType, icon, name, description, price, period, features } = info;
  
  const alreadyInCart = currentItems.some(existing => existing.id === id);

  const btnStyles = alreadyInCart
    ? "bg-green-600 cursor-not-allowed"
    : "bg-blue-600 hover:bg-blue-700";

  return (
    <article className="bg-[#0F172A] p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col">
      <header>
        <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">
          {tagType}
        </span>
        <h2 className="mt-2 text-xl font-bold text-white">
          {icon} {name}
        </h2>
      </header>

      <p className="mt-2 text-gray-400 flex-grow">
        {description}
      </p>

      <div className="mt-2 font-semibold text-blue-400">
        ${price} / {period}
      </div>

      <ul className="mt-3 space-y-1 text-sm text-gray-300">
        {features?.map((trait, index) => (
          <li key={index}>✔ {trait}</li>
        ))}
      </ul>

      <button
        onClick={() => handleAdd(info)}
        disabled={alreadyInCart}
        className={`mt-4 w-full py-2 rounded transition-all duration-300 text-white font-medium ${btnStyles}`}
      >
        {alreadyInCart ? "Added To Cart✅" : "Buy Now"}
      </button>
    </article>
  ); 
};

export default ProductCard;