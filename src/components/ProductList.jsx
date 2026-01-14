import { useState } from "react";

function ProductList() {
  const [cart, setCart] = useState([]);

  // REQUIRED plantsArray
  const plantsArray = [
    {
      category: "Indoor Plants",
      plants: [
        { id: 1, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100" },
        { id: 2, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" },
        { id: 3, name: "Peace Lily", price: 12, image: "https://via.placeholder.com/100" },
        { id: 4, name: "Spider Plant", price: 8, image: "https://via.placeholder.com/100" },
        { id: 5, name: "ZZ Plant", price: 18, image: "https://via.placeholder.com/100" },
        { id: 6, name: "Pothos", price: 9, image: "https://via.placeholder.com/100" },
      ],
    },
    {
      category: "Outdoor Plants",
      plants: [
        { id: 7, name: "Rose", price: 20, image: "https://via.placeholder.com/100" },
        { id: 8, name: "Bougainvillea", price: 25, image: "https://via.placeholder.com/100" },
        { id: 9, name: "Hibiscus", price: 18, image: "https://via.placeholder.com/100" },
        { id: 10, name: "Bamboo", price: 30, image: "https://via.placeholder.com/100" },
        { id: 11, name: "Palm", price: 35, image: "https://via.placeholder.com/100" },
        { id: 12, name: "Lavender", price: 22, image: "https://via.placeholder.com/100" },
      ],
    },
  ];

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  return (
    <div>
      {/* Navbar */}
      <nav>
        <h2>Paradise Nursery</h2>
        <p>Cart Items: {cart.length}</p>
      </nav>

      {/* Categories + Dynamic rendering */}
      {plantsArray.map((group) => (
        <div key={group.category}>
          <h3>{group.category}</h3>

          {group.plants.map((plant) => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <p>{plant.name}</p>
              <p>${plant.price}</p>

              <button
                onClick={() => addToCart(plant)}
                disabled={cart.some((item) => item.id === plant.id)}
              >
                {cart.some((item) => item.id === plant.id)
                  ? "Added"
                  : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
