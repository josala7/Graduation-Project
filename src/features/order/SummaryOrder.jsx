/* eslint-disable react/prop-types */
import { Avatar, Box, Button, Chip, Stack, Typography } from "@mui/material";
import { myAvatar } from "../../assets";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { formatDate } from "../../utils/helpers";
import { CancelRounded, CheckCircle } from "@mui/icons-material";

const SummaryOrder = ({ order }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        pl: 10,
      }}
    >
      <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
        <Avatar src={myAvatar} sx={{ width: 60, height: 60 }} />

        <Stack>
          <Typography variant="body1" fontWeight={"600"}>
            {order?.user?.name}
          </Typography>
          <Typography variant="body2">user@gmail.com</Typography>
        </Stack>
      </Stack>

      <Chip
        icon={<WatchLaterIcon />}
        label={formatDate(order?.createdAt)}
        variant="outlined"
        sx={{ px: 1.5 }}
      />

      <Chip
        label={order?.isDelivered ? "تم التوصيل" : "لم يتم التوصيل"}
        variant="filled"
        sx={{
          px: 2,
          bgcolor: order?.isDelivered ? "#bbf7d0" : "#fecaca",
          color: order?.isDelivered ? "#16a36d" : "#e32626",
        }}
      />

      <Chip
        icon={
          order?.isPaid ? (
            <CheckCircle sx={{ fontSize: "18px" }} />
          ) : (
            <CancelRounded sx={{ fontSize: "18px" }} />
          )
        }
        label={order?.isPaid ? "تم الدفع" : "لم يتم الدفع"}
        variant="outlined"
        color={order?.isPaid ? "success" : "error"}
        sx={{ px: 2 }}
      />

      <Chip
        label={`سعر الاوردر الاجمالي : ${order?.totalOrderPrice}$`}
        variant="outlined"
        sx={{ fontSize: "16px" }}
      />
    </Box>
  );
};

export default SummaryOrder;
