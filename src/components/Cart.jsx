import { toast } from "react-toastify";

const Cart = ({ cart: itemsInCart, removeItem: onDelete, clearCart: onCheckout }) => {
  // Compute grand total using an alternative accumulator name
  const grandTotal = itemsInCart.reduce((acc, current) => acc + current.price, 0);

  const hasItems = itemsInCart.length > 0;

  return (
    <section className="px-8 py-10 bg-[#020617] min-h-screen">
      <h2 className="mb-6 text-2xl font-bold text-white">
        🛒 Your Cart ({itemsInCart.length})
      </h2>

      {!hasItems && (
        <p className="text-gray-400">Your cart is empty</p>
      )}

      <div className="space-y-4">
        {itemsInCart.map((entry) => {
          const { id, icon, name, price } = entry;
          return (
            <div
              key={id}
              className="flex justify-between items-center bg-[#0F172A] p-4 rounded"
            >
              <div>
                <h3 className="text-white">
                  {icon} {name}
                </h3>
                <p className="text-gray-400">${price}</p>
              </div>

              <button
                onClick={() => {
                  onDelete(id);
                  toast.error("Removed from cart ❌");
                }}
                className="px-3 py-1 bg-red-600 rounded text-white"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      {hasItems && (
        <aside className="mt-8 bg-[#0F172A] p-5 rounded">
          <h3 className="text-xl text-white">
            Total: ${grandTotal}
          </h3>

          <button
            onClick={() => {
              onCheckout();
              toast.success("Checkout successful 🎉");
            }}
            className="w-full py-2 mt-4 bg-blue-600 rounded text-white"
          >
            Proceed to Checkout
          </button>
        </aside>
      )}
    </section>
  );
};

export default Cart;