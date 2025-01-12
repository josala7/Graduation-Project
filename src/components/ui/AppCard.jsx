/* eslint-disable react/prop-types */
import { Card, CardMedia, Stack, Typography } from "@mui/material";
import AppButton from "./AppButton";
import { useNavigate } from "react-router-dom";
// import { AddCircle, FavoriteBorder } from "@mui/icons-material";

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
      {/* <Box sx={{ display: "flex" }}>
        <FavoriteBorder
          sx={{
            position: "relative",
            right: "0",
            fontSize: "40px",
            cursor: "pointer",
          }}
        />
        <AddCircle
          sx={{
            position: "relative",
            left: "0",
            fontSize: "40px",
            cursor: "pointer",
          }}
        />
      </Box> */}

      <Stack pt={3} pb={0} flex={1}>
        <Stack spacing={2} flex={1} pb={3}>
          <Typography variant="body1" fontWeight={"bold"}>
            {title}
          </Typography>

          {/* <Rating dir="ltr" name="rating" defaultValue={3} precision={1} /> */}

          <Typography variant="body1">{price} جنيها</Typography>
        </Stack>

        {/* <AppButton>اضافة الي طلباتي</AppButton> */}
        {/* <Button sx={{ mb: 2 }} variant="contained">
          اضافة الي طلباتي
        </Button> */}

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
