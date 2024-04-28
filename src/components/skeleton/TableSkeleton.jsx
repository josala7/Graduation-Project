/* eslint-disable react/prop-types */
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
} from "@mui/material";

const TableSkeleton = ({ numOfCols = 5, numOfRows = 6 }) => {
  const renderTableHeaders = () => {
    return (
      <TableRow sx={{ bgcolor: "#e0e0e0" }}>
        {Array.from({ length: numOfCols }, (_, index) => (
          <TableCell key={index} className="p-2.5">
            <Skeleton
              variant="text"
              height={30}
              width={"100%"}
              sx={{ bgcolor: "#f5f5f5" }}
            />
          </TableCell>
        ))}
      </TableRow>
    );
  };

  const renderTableRows = () => {
    return Array.from({ length: numOfRows }, (_, rowIndex) => (
      <TableRow key={rowIndex} sx={{ bgcolor: "#ffffff" }}>
        {Array.from({ length: numOfCols }, (_, colIndex) => (
          <TableCell key={colIndex} className="p-2.5 py-6">
            <Skeleton variant="text" height={20} width={"100%"} />
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  return (
    <Table
      className="min-w-full"
      sx={{ border: "2px solid #eee", borderRadius: "20px" }}
    >
      <TableHead>{renderTableHeaders()}</TableHead>
      <TableBody>{renderTableRows()}</TableBody>
    </Table>
  );
};

export default TableSkeleton;
