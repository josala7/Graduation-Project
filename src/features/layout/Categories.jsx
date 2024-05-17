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
    description:
      " الاطعمة هي مجموعة واسعة من المنتجات الغذائية التي تقدم تجارنا تشكيلتنا الغنية منتجات ذات جودة عالية ومتنوعة ",
  },
  {
    id: 2,
    img: drinks,
    name: "المشروبات",
    description:
      " جميع الأذواق. استمتع بتجربة مشروبات ذات جودة عالية تضيف لحظات من التميز. تتميز مشروباتنا بتنوعها وجودتها العالية، مما يجعلها خيارًا مثاليًا لجميع الأذواق والمناسبات  ",
  },
  {
    id: 3,
    img: clothes,
    name: "الملابس",
    description:
      "   تقدم ملابسنا مجموعة واسعة من الملابس العصرية والأنيقة لجميع الأعمار والأذواق. مصنوعة من مواد عالية الجودة وبتصاميم مبتكرة تضيف لمسة من الأناقة والراحة إلى إطلالتك  ",
  },
  {
    id: 4,
    img: devices,
    name: "الاجهزة",
    description:
      "   تتميز أجهزتنا بأحدث التقنيات وأعلى مستويات الأداء. اختر من بين مجموعة متنوعة من الأجهزة الإلكترونية المبتكرة التي تلبي احتياجاتك اليومية وتجعل حياتك أسهل وأكثر متعة  ",
  },
];

function Categories() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const isPositioned = true;
  return (
    <div
      style={{
        position: "relative",
        right: "5%",
        marginBottom: "40px",
      }}
    >
      <h2>الاقسام</h2>
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
              maxWidth: isMobile ? "100%" : 305,
              ml: isMobile ? "0" : 3,
              mb: isMobile ? 2 : 0,
              cursor: "pointer",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
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
