/* eslint-disable react/prop-types */
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
import { useNavigate } from "react-router-dom";

function AppCard({ item }) {
  const { _id: productId, title, price, imageCover } = item;

  const navigate = useNavigate();
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
        image={imageCover}
      />

      <Stack pt={3} pb={1} spacing={2}>
        <Typography variant="body1" fontWeight={"bold"}>
          {title}
        </Typography>

        {/* <Rating dir="ltr" name="rating" defaultValue={3} precision={1} /> */}

        <Typography variant="body1">{price} جنيها</Typography>

        <AppButton
          onClick={() => navigate(`/products/${productId}`, { state: item })}
        >
          عرض التفاصيل
        </AppButton>
      </Stack>
    </Card>
  );
}

export default AppCard;
