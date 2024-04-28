/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import DataTable from "react-data-table-component";
import { noData } from "../../assets";
import TableSkeleton from "../skeleton/TableSkeleton";

function AppTable({ data, columns, isLoading }) {
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        backgroundColor: "#e0e0e0",
        fontSize: "15px",
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        width: "100px",
      },
    },

    cells: {
      style: {
        fontSize: "14px",
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        width: "100px",
      },
    },
  };
  return (
    <Box>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          noDataComponent={<img src={noData} alt="noData" width={"350px"} />}
          highlightOnHover={true}
          sortServer={false}
          fixedHeader
          striped={true}
        />
      )}
    </Box>
  );
}

export default AppTable;
