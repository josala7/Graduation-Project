import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useGetOrders } from "../order/useGetOrders";
// import AppTable from "../../components/ui/AppTable";
import OrderExpandComponent from "../order/OrderExpandComponent";
import AppBreadcrumps from "../../components/ui/AppBreadcrumps";
import { FaUserCheck } from "react-icons/fa";

function TraderOrders() {
  const { orders } = useGetOrders();

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
          طلبات
        </Typography>
      </Container>
    </>,
  ];

  console.log(orders);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Container>
      {orders?.map((order) => (
        <>
          <Stack
            spacing={4}
            style={{ marginTop: "30px", marginBottom: "20px" }}
            expandOnRowClicked
            expandableRowsComponent={OrderExpandComponent}
          >
            <AppBreadcrumps breadcrumbs={breadcrumbs} />
          </Stack>
          <Box>
            {order?.orderItems?.map((orderItem) => (
              <>
                <Container
                  sx={{
                    display: "flex",
                    width: "800px",
                    height: "50px",
                    backgroundColor: "milk",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                    borderRadius: 3,
                    marginBottom: "10px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      width: "200px",
                    }}
                  >
                    <Avatar src={orderItem.product.imageCover} />

                    <p>{orderItem.product.title}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",

                      marginTop: "5px",
                    }}
                  >
                    <p style={{ marginLeft: "10px" }}>الكمية :</p>
                    <Button variant="contained">
                      {orderItem.product.quantity}
                    </Button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginRight: "70px",
                      marginTop: "5px",
                    }}
                  >
                    <p style={{ marginLeft: "10px" }}>السعر :</p>
                    <Button variant="contained">
                      {orderItem.product.price}
                    </Button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginRight: "70px",
                      marginTop: "5px",
                    }}
                  >
                    <p style={{ marginLeft: "10px" }}>التاريخ :</p>
                    <Button variant="outlined">
                      {formatDate(orderItem.product.updatedAt)}
                    </Button>
                  </div>
                </Container>
              </>
            ))}
          </Box>
          {/* <Container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <p>الرجاء الضغط هنا لانهاء الطلب :</p>

            <Button
              sx={{ marginRight: "20px" }}
              variant="contained"
              color="success"
            >
              تم
            </Button>
          </Container> */}
        </>
      ))}
    </Container>
  );
}

export default TraderOrders;
