import { Stack, Typography } from "@mui/material";
import AppButton from "./AppButton";
import { useNavigate } from "react-router-dom";

function ErrorFallback() {
  const navigate = useNavigate();
  return (
    <Stack
      width={"100%"}
      height={"100dvh"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={5}
    >
      <img src="/src/assets/404.svg" alt="errorFullback" width={300} />
      <Typography variant="h3" sx={{ fontWeight: "500" }}>
        للأسف حدث خطأ
      </Typography>

      <AppButton onClick={() => navigate("/")}>
        الرجوع اٍلي الصفحة الرئيسية
      </AppButton>
    </Stack>
  );
}

export default ErrorFallback;
