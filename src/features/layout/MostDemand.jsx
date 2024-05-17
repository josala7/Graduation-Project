import { useEffect, useState } from "react";

function MostDemand() {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        // Make a GET request to the API endpoint for popular products
        const response = await fetch("https://aegina.onrender.com/api/v1");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);

        // Assuming the response data is an array of product objects
        setProducts(data);
        setLoading(false);
      } catch (error) {
        // If an error occurs, set the error state
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPopularProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div
      style={{
        position: "relative",
        right: "5%",
        marginBottom: "40px",
      }}
    >
      <h2>الاكثر طلبا</h2>
      <div>
        <img src={product.image} alt={product.name} />
        <p>
          {product.name} - {product.price}
        </p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default MostDemand;
