import { register } from "swiper/element/bundle";
import { useNavigate } from "react-router-dom";
register();
import { Button, Card, CardContent, CardMedia, Stack } from "@mui/material";
// import AppBreadcrumps from "../../components/ui/AppBreadcrumps";
// import { BsBoxSeamFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProductText from "../../components/ui/ProductText";
import { useState } from "react";

function TraderProductdetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const imgStyle = {
    // width: "450px",
    width: "331px",
    height: "430px",
    // marginLeft: "10px",
    objectFit: "cover",
    marginRight: "200px",
  };
  const imgBox = {
    width: "70px",
    height: "70px",
    boxShadow: "2px 2px 6px #bdbdbd",
    borderRadius: "10px",
    overflow: "hidden",
    marginLeft: "20px",
    cursor: "pointer",
    marginTop: "30px",
  };

  const [desiredIndex, setDesiredIndex] = useState(0);
  // const [tempHover, setTempHover] = useState(0); // hover

  const handleBoxClick = (index) => {
    setDesiredIndex(index);
  };
  return (
    <Stack spacing={4} display={"flex"} py={3}>
      {/* <AppBreadcrumps breadcrumbs={breadcrumbs} /> */}

      <Card
        sx={{
          p: { xs: 2, md: 1 },
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: 3,
          display: "flex",
          marginBottom: "100px",
        }}
      >
        <CardContent component={Stack}>
          <Stack py={5}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  fontSize: "large",
                  fontWeight: "bold",
                  position: "relative",
                  bottom: "40px",
                }}
              >
                {state?.title}
              </div>
              {/* <ProductText
                  dir="column"
                  // keyString="اسم المنتج"
                  value={state?.title}
                  full
                />
              </div> */}
              {/* keyString="سعر المنتج" */}
              <div style={{ padding: "20px" }}>
                <span
                  style={{
                    color: "red",
                    fontSize: "30px",
                    fontWeight: "900",
                    marginLeft: "20px",
                    position: "relative",
                    bottom: "70px",
                  }}
                >
                  {`${state?.price} `}
                </span>
                {/* <ProductText value={`${state?.price}`} /> */}
              </div>
            </div>
            <div
              style={{
                textAlign: "right",
                position: "relative",
                bottom: "50px",
                marginLeft: "20px",
                color: "#808080aa",
                fontWeight: "600",
              }}
            >
              <p>{state?.description}</p>
              {/* <ProductText
                // keyString="وصف المنتج"
                value=
                full
              /> */}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                position: "relative",
                bottom: "60px",
              }}
            >
              <ProductText
                keyString="الكمية المتاحة من المنتج"
                value={state?.quantity}
              />
              <ProductText
                keyString="عدد المنتجات المٌباعة"
                value={state?.sold}
              />
            </div>

            {/* THE BOXES */}
            <div
              style={{ display: "flex", position: "relative", bottom: "70px" }}
            >
              {state?.images?.map((ele, index) => (
                <div
                  key={index}
                  style={{
                    ...imgBox,
                    border: index === desiredIndex ? "2px solid blue" : "none",
                    backgroundImage: `url(${ele})`,
                    backgroundSize: " cover",
                  }}
                  onClick={() => handleBoxClick(index)}
                ></div>
              ))}
            </div>

            <Button
              color="warning"
              variant="contained"
              onClick={() => navigate("/products")}
            >
              الرجوع
            </Button>
          </Stack>
        </CardContent>
        {desiredIndex !== null &&
          state?.images
            ?.slice(0, 1)
            .map((ele) => (
              <CardMedia
                style={imgStyle}
                key={ele}
                component="img"
                image={state?.images[desiredIndex]}
                alt={state?.images[desiredIndex]}
              />
            ))}
      </Card>
    </Stack>
  );
}

export default TraderProductdetails;
