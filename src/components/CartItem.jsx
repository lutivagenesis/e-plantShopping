import { useState } from "react";

function CartItem() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Aloe Vera",
      price: 10,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const increment = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const deleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotalCost = (item) => item.price * item.quantity;

  const calculateTotalAmount = () =>
    cartItems.reduce((total, item) => total + calculateTotalCost(item), 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${calculateTotalCost(item)}</p>

          <button onClick={() => decrement(item.id)}>-</button>
          <button onClick={() => increment(item.id)}>+</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}

      <h3>Total Amount: ${calculateTotalAmount()}</h3>

      <button>Checkout</button>
      <button>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
