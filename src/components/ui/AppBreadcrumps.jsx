import { Box, Breadcrumbs } from "@mui/material";

function AppBreadcrumps({ breadcrumbs }) {
  return (
    <Box p={2} bgcolor={"#f2f2f2"} borderRadius={3}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
}

export default AppBreadcrumps;
