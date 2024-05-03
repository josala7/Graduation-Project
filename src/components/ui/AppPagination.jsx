/* eslint-disable react/prop-types */
import { Box, Pagination } from "@mui/material";

function AppPagination({ page, setPage, numOfPages }) {
  return (
    <Box
      mt={5}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Pagination
        variant="text"
        shape="rounded"
        size={"medium"}
        color="primary"
        showFirstButton
        showLastButton
        page={page}
        onChange={(e, page) => {
          setPage(page);
        }}
        count={numOfPages}
      />
    </Box>
  );
}

export default AppPagination;
