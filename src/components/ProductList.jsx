import { useState } from "react";

function ProductList() {
  const [cart, setCart] = useState([]);

  const plants = {
    Indoor: [
      {
        id: 1,
        name: "Aloe Vera",
        price: 10,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 2,
        name: "Snake Plant",
        price: 15,
        image: "https://via.placeholder.com/100",
      },
    ],
    Outdoor: [
      {
        id: 3,
        name: "Rose Plant",
        price: 12,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 4,
        name: "Bamboo",
        price: 20,
        image: "https://via.placeholder.com/100",
      },
    ],
  };

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

      {/* Categories */}
      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h3>{category} Plants</h3>

          {plants[category].map((plant) => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <p>{plant.name}</p>
              <p>${plant.price}</p>

              <button
                onClick={() => addToCart(plant)}
                disabled={cart.includes(plant)}
              >
                {cart.includes(plant) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
