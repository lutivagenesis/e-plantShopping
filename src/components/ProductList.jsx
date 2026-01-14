function ProductList() {
  const plants = [
    { id: 1, name: "Aloe Vera", price: 10 },
    { id: 2, name: "Snake Plant", price: 15 },
    { id: 3, name: "Peace Lily", price: 12 },
    { id: 4, name: "Spider Plant", price: 8 },
    { id: 5, name: "Fiddle Leaf Fig", price: 20 },
    { id: 6, name: "Succulent", price: 5 },
  ];

  return (
    <div>
      <h2>Our Plants</h2>
      {plants.map((plant) => (
        <div key={plant.id}>
          <p>{plant.name} - ${plant.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
