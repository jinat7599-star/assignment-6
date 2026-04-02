import itemsData from "../data/products.json";
import ProductCard from "./ProductCard";

const Products = ({ addToCart: onAdd, cart: userCart }) => {
  const currentSelection = userCart || [];

  return (
    <main className="px-6 py-10 md:px-12 bg-transparent">
      <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 max-w-7xl">
        {itemsData.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            addToCart={onAdd}
            cart={currentSelection}
          />
        ))}
      </div>
    </main>
  );
};

export default Products;