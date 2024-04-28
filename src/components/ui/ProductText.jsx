import { Stack, Typography } from "@mui/material";

const ProductText = ({ keyString, value, full, dir = "row" }) => {
  return (
    <Stack
      flexDirection={dir}
      alignItems={dir === "column" || full ? "start" : "center"}
      gap={dir === "column" ? 1 : 6}
      gridColumn={full ? { xs: "1", md: "1 / -1" } : ""}
    >
      <Typography
        fontSize={"inherit"}
        sx={{
          color: "#2a2069",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          width: { xs: "80px", md: "220px" },
          maxWidth:
            dir === "column" || full ? "100%" : { xs: "80px", md: "220px" },
        }}
      >
        {keyString}
      </Typography>

      <Typography
        fontSize={"inherit"}
        sx={{ color: "#808080aa", fontWeight: "600" }}
        flexWrap={"wrap"}
        display={"flex"}
      >
        {value}
      </Typography>
    </Stack>
  );
};

export default ProductText;
