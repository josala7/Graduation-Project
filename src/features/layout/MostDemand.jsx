import { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "../pages/ProductService";
import { Stack, Typography } from "@mui/material";
import { FaUserCheck } from "react-icons/fa";
import AppBreadcrumps from "../../components/ui/AppBreadcrumps";

function MostDemand() {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);
  const breadcrumbs = [
    <Typography
      key="1"
      color="text.primary"
      sx={{
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <FaUserCheck fontSize={"17px"} />
      الاكثر طلبا
    </Typography>,
  ];
  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
            className="w-6 shadow-2"
            style={{ width: "70%", borderRadius: "5px" }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <h4
            className="mb-1"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {product.name}
          </h4>
          <h6
            style={{
              marginRight: "90px",
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            ${product.price}
          </h6>
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        position: "relative",
        right: "5%",
        marginBottom: "40px",
      }}
    >
      <Stack spacing={4} style={{ marginTop: "100px", marginBottom: "50px" }}>
        <AppBreadcrumps breadcrumbs={breadcrumbs} />
      </Stack>
      <div className="card">
        <Carousel
          value={products}
          numScroll={1}
          numVisible={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
        />
      </div>
    </div>
  );
}

export default MostDemand;
