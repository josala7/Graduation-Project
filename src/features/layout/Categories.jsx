import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { food, drinks, clothes, devices } from "../../assets";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const CategoryArray = [
  {
    id: 1,
    img: food,
    name: "الاطعمة",
  },
  {
    id: 2,
    img: drinks,
    name: "المشروبات",
  },
  {
    id: 3,
    img: clothes,
    name: "الملابس",
  },
  {
    id: 4,
    img: devices,
    name: "الاجهزة",
  },
];

function Categories() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const classes = useStyles();
  return (
    <div
      style={{
        marginBottom: "40px",
        marginTop: "50px",
      }}
    >
      <h2 style={{ marginRight: "60px" }}>الاقسام</h2>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          marginRight: isMobile ? "0" : "50px",
        }}
      >
        {CategoryArray.map((category) => (
          <Card
            key={category.id}
            sx={{
              width: isMobile ? "100%" : 305,
              ml: isMobile ? "0" : 3,
              mb: isMobile ? 2 : 0,
              cursor: "pointer",
            }}
          >
            <CardMedia
              sx={{ height: 100 }}
              image={category.img}
              title={category.name}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ textAlign: "center" }}
              >
                {category.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {category.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Categories;
