/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import DataTable from "react-data-table-component";
import { noData } from "../../assets";

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
      {isLoading ? (
        <div>loading....</div>
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
