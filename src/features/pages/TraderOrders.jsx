import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Container,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useGetOrders } from "../order/useGetOrders";
// import AppTable from "../../components/ui/AppTable";
import OrderExpandComponent from "../order/OrderExpandComponent";
import AppBreadcrumps from "../../components/ui/AppBreadcrumps";
import { FaUserCheck } from "react-icons/fa";
import { ExpandCircleDown } from "@mui/icons-material";
import SummaryOrder from "../order/SummaryOrder";
import React from "react";
import OrderSkeleton from "../order/OrderSkeleton";
import DetailsOrder from "../order/DetailsOrder";

function TraderOrders() {
  const { orders, isGettingOrders } = useGetOrders();

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

  return (
    <Stack
      spacing={4}
      style={{ marginTop: "30px", marginBottom: "20px" }}
      expandOnRowClicked
      expandableRowsComponent={OrderExpandComponent}
    >
      <AppBreadcrumps breadcrumbs={breadcrumbs} />

      <Stack spacing={3}>
        {isGettingOrders ? (
          <OrderSkeleton />
        ) : (
          orders?.map((order) => (
            <React.Fragment key={order._id}>
              <Accordion
                sx={{
                  border: "0px",
                  outline: "none",
                  boxShadow: "rgba(0, 0, 0, 0.40) 0px 3px 8px",
                  borderRadius: 3,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandCircleDown />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <SummaryOrder order={order} />
                </AccordionSummary>
                <AccordionDetails>
                  <DetailsOrder order={order} />
                </AccordionDetails>
              </Accordion>
            </React.Fragment>
          ))
        )}
      </Stack>
    </Stack>
  );
}

export default TraderOrders;
