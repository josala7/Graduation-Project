import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { product1 } from "../../assets";
import AppButton from "./AppButton";

function AppCard() {
  return (
    <Card
      component={Stack}
      p={2}
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        borderRadius: 3,
      }}
    >
      <CardMedia
        sx={{
          borderRadius: 3,
        }}
        component="img"
        alt="green iguana"
        height="250"
        image={product1}
      />

      <Stack pt={3} pb={1} spacing={1.5}>
        <Typography variant="body1" fontWeight={"bold"}>
          اسم المنتج
        </Typography>

        <Rating name="rating" defaultValue={3} precision={1} />

        <Typography variant="body1">99 جنيها</Typography>

        <AppButton>عرض التفاصيل</AppButton>
      </Stack>
    </Card>
  );
}

export default AppCard;
