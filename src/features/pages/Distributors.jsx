import { Box, Stack, Typography } from "@mui/material";
import AppBreadcrumps from "../../components/ui/AppBreadcrumps";
import { FaUserCheck } from "react-icons/fa";
import AppTable from "../../components/ui/AppTable";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const breadcrumbs = [
  <Typography
    key="1"
    color="text.primary"
    sx={{
      fontSize: "18px",
      display: "flex",
      alignItems: "center",
      gap: 1,
    }}
  >
    <FaUserCheck fontSize={"17px"} />
    الموزعون
  </Typography>,
];

const columns = [
  {
    name: "اسم الموزع",
    selector: (row) => row.title,
  },
  {
    name: "رقم الهاتف",
    selector: (row) => row.phone,
  },
  {
    name: "الاجراءات",
    center: true,
    cell: (row) => (
      <Stack direction={"row"} gap={2}>
        <Box
          sx={{
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          <MdOutlineDelete />
        </Box>
        <Box
          sx={{
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          <CiEdit />
        </Box>
      </Stack>
    ),
  },
];

const data = [
  {
    id: 1,
    title: "أحمد علي",
    phone: "010144545458",
  },
  {
    id: 2,
    title: "سامح عبدالحي",
    phone: "0115741239",
  },
];

function Distributors() {
  return (
    <Stack spacing={4}>
      <AppBreadcrumps breadcrumbs={breadcrumbs} />

      <AppTable columns={columns} data={data} />
    </Stack>
  );
}

export default Distributors;
