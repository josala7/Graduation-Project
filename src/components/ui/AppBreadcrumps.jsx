import { Box, Breadcrumbs, Stack } from "@mui/material";
import AppButton from "./AppButton";

function AppBreadcrumps({
  breadcrumbs,
  addButton = false,
  addButtonText,
  onAddButtonClick,
}) {
  return (
    <Box
      p={2}
      bgcolor={"#f2f2f2"}
      borderRadius={3}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>

      <Stack direction={"row"} spacing={2}>
        {addButton && (
          <AppButton onClick={onAddButtonClick}>
            {addButtonText ? addButtonText : "اٍضافة"}
          </AppButton>
        )}
      </Stack>
    </Box>
  );
}

export default AppBreadcrumps;
