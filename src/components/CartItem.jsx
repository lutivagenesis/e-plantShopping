function CartItem() {
  const cartItems = [
    { id: 1, name: "Aloe Vera", price: 10, quantity: 2 },
  ];

  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + calculateTotalCost(item),
      0
    );
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${calculateTotalCost(item)}</p>
          <button>-</button>
          <button>+</button>
          <button>Delete</button>
        </div>
      ))}

      <h3>Total Amount: ${calculateTotalAmount()}</h3>
      <button>Checkout</button>
      <button>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
