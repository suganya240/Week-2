import { useState } from "react";

function App() {
  const [showProduct, setShowProduct] = useState(false);

  const product = {
    name: "Rice Krispies",
    description: "a cereal made of popped rice",
    price: "$3.00",
  };

  return (
    <div style={{ padding: "30px" }}>
      {!showProduct ? (
        <button onClick={() => setShowProduct(true)}>
          Click here to initialize your state
        </button>
      ) : (
        <p>
          The product name is <b>{product.name}</b>, product description is{" "}
          <b>{product.description}</b>, and product price is{" "}
          <b>{product.price}</b>.
        </p>
      )}
    </div>
  );
}

export default App;