import { Stack, Typography } from "@mui/material";

const ProductText = ({ keyString, value, full, dir = "row" }) => {
  return (
    <Stack
      flexDirection={dir}
      alignItems={dir === "column" || full ? "start" : "center"}
      gap={dir === "column" ? 1 : 6}
      gridColumn={full ? { xs: "1", md: "1 / -1" } : ""}
    >
      <div style={{}}>
        <Typography
          fontSize={"inherit"}
          sx={{
            color: "#2a2069",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            width: { xs: "60px", md: "200px" },
            maxWidth:
              dir === "column" || full ? "100%" : { xs: "80px", md: "220px" },
          }}
        >
          {keyString}
        </Typography>

        <Typography
          fontSize={"inherit"}
          sx={{ color: "black", fontWeight: "900" }}
          flexWrap={"wrap"}
          display={"flex"}
        >
          {value}
        </Typography>
      </div>
    </Stack>
  );
};

export default ProductText;
