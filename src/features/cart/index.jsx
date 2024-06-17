import { useEffect, useState } from "react";
import { cart1, cart2, nocart } from "../../assets";
import "./cart.css";
import { Avatar, Button, Container, Stack, Typography } from "@mui/material";
import { FaUserCheck } from "react-icons/fa";
import AppBreadcrumps from "../../components/ui/AppBreadcrumps";
import { useNavigate } from "react-router-dom";

import { useGetCartItems } from "./useGetCartItems";
import { useDeleteItem } from "./useDeleteItem";
import { useDeleteAll } from "./useDeleteAll";
import { useMakeOrder } from "../order/useMakeOrder";

function CartPage() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      img: cart1,
      name: "Product 1",
      price: 10,
      amount: 1,
      quantity: 2,
    },
    {
      id: 2,
      img: cart2,
      name: "Product 2",
      price: 16,
      amount: 1,
      quantity: 4,
    },
    {
      id: 3,
      img: cart2,
      name: "Product 3",
      price: 36,
      amount: 1,
      quantity: 4,
    },
  ];

  const [price, setPrice] = useState(0);
  // const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  // const [warning, setWarning] = useState(false);

  // const handleClick = (item) => {
  //   let isPresent = false;
  //   products.forEach((product) => {
  //     if (item.id === product.id) isPresent = true;
  //   });
  //   if (isPresent) {
  //     setWarning(true);
  //     setTimeout(() => {
  //       setWarning(false);
  //     }, 2000);
  //     return;
  //   }
  //   setCart([...cart, item]);
  // };
  // // =================================================
  const handleChange = (item, d) => {
    let ind = -1;
    products.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };
  // // =============================================================
  const handlePrice = () => {
    let ans = 0;
    products.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  // =================================================================
  const handleRemove = (id) => {
    const arr = products.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });
  // =======================================================================
  const { cartItems, cartId, totalPrice, user } = useGetCartItems();
  const { deleteItem, isDeletingItem } = useDeleteItem();
  const { deleteAllItem, isDeletingAllItems } = useDeleteAll();
  const { makeOrder, isMakingOrder } = useMakeOrder();
  const breadcrumbs = [
    <>
      <Container sx={{ display: "flex" }}>
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
          السلة
        </Typography>

        <div
          style={{
            display: "flex",
            gap: "10px",
            position: "relative",
            right: "250%",
          }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              makeOrder(cartId);
            }}
          >
            طلب اوردر
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => deleteAllItem()}
          >
            {isDeletingAllItems ? "...جاري حذف الكل" : "حذف الكل"}
          </Button>
        </div>
      </Container>
    </>,
  ];

  // return <div>{console.log(cartItems)}</div>;
  return (
    <Container sx={{ height: "100%" }}>
      <Stack spacing={4} style={{ marginTop: "30px", marginBottom: "20px" }}>
        <AppBreadcrumps breadcrumbs={breadcrumbs} />
      </Stack>
      <Stack spacing={2} maxWidth={"65%"} mx={"auto"}>
        {cartItems?.map((item) => (
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            key={item.product._id}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                width: "200px",
              }}
            >
              <Avatar src={item.product.imageCover} />
              <p>{item.product.title}</p>
            </div>

            <div>
              <Button variant="outlined">{item.quantity}</Button>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                width: "200px",
                justifyContent: "end",
              }}
            >
              <div>{item.price}</div>
              <Button
                color="error"
                variant="contained"
                onClick={() => deleteItem(item._id)}
              >
                مسح
              </Button>
            </div>
          </Stack>
        ))}
        {cartItems && cartItems.length > 0 ? (
          <div className="total">
            <span>اجمالي السعر</span>
            <span>{totalPrice}</span>
          </div>
        ) : (
          <div
            style={{ width: "400px", textAlign: "center", margin: "0 auto" }}
          >
            <img
              src={nocart}
              alt="No items in cart"
              style={{ width: "100%" }}
            />
            <Typography variant="h6" color="text.secondary" sx={{ mb: "20px" }}>
              لا توجد منتجات في السلة
            </Typography>
            <Button
              variant="contained"
              sx={{ mb: "30px" }}
              onClick={() => navigate("/traderproducts")}
            >
              الرجوع الي المنتجات
            </Button>
          </div>
        )}
      </Stack>
    </Container>
  );
}

export default CartPage;
