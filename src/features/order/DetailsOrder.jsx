/* eslint-disable react/prop-types */
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";

const DetailsOrder = ({ order }) => {
  return (
    <Stack spacing={3} py={1}>
      {order?.orderItems?.map((orderItem) => (
        <Box
          key={orderItem._id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            pl: 10,
          }}
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            gap={3}
            width={"30%"}
          >
            <Avatar
              src={orderItem.product?.imageCover}
              sx={{ width: 40, height: 40 }}
              variant="rounded"
            />

            <Stack>
              <Typography variant="h6" fontWeight={"600"}>
                {orderItem.product?.title}
              </Typography>
            </Stack>
          </Stack>

          <Chip
            label={`الكمية  : ${orderItem?.quantity}`}
            variant="filled"
            sx={{ fontSize: "16px", width: "15%" }}
          />

          <Chip
            label={`سعر المنتج : ${orderItem?.price}$`}
            variant="outlined"
            sx={{ fontSize: "16px", width: "10%" }}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default DetailsOrder;
