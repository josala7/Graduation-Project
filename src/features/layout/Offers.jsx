import { useEffect, useState } from "react";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";

function Offers() {
  const [offerProduct, setOfferProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the URL of the API
    const OfferAPI = "https://aegina.onrender.com/api/v1";

    fetch(OfferAPI)
      .then((response) => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        // Parse the JSON response
        return response.json();
      })
      .then((data) => {
        // Log the data to inspect its structure
        console.log("Fetched data:", data);
        // Update state with the fetched offer products
        setOfferProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Fetch error:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      style={{
        position: "relative",
        right: "5%",
        marginBottom: "40px",
      }}
    >
      <h2>العروض</h2>
      <div>
        <img src={offerProduct.image} alt={offerProduct.name} />
        <p>
          {offerProduct.name} - {offerProduct.price}
        </p>
        <p>{offerProduct.description}</p>
      </div>
    </div>
  );
}

export default Offers;
