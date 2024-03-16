import { Box } from "@mui/material";
import DataTable from "react-data-table-component";

function AppTable({ data, columns }) {
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        fontSize: "17px",
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },

    cells: {
      style: {
        fontSize: "16px",
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };
  return (
    <Box>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        noDataComponent={<div>يلايهبالهخبيالهيبى</div>}
        highlightOnHover={true}
        sortServer={false}
        fixedHeader
        striped={true}
      />
    </Box>
  );
}

export default AppTable;
