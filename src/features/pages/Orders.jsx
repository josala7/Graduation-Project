import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Checkbox } from "@mui/material";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

function createData(name, amount, price) {
  return {
    name,
    amount,
    price,
    NumberOfClients: [
      {
        id: 1,
        date: "2024-01-05",
        customerName: "محمد احمد",
        amount: 3,
        phoneNumber: "01275937497",
        status: "تم الدفع",
        check: false,
      },
      {
        id: 2,
        date: "2024-01-05",
        customerName: " علي هشام",
        amount: 3,
        phoneNumber: "01275937497",
        status: "تم الدفع",
        check: false,
      },
      {
        id: 3,
        date: "2024-01-05",
        customerName: " مازن السيد",
        amount: 7,
        phoneNumber: "01275937497",
        status: "كاش",
        check: false,
      },
    ],
  };
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const styleCount = {
  position: "relative",
  left: "100px",
  padding: "10px",

  margin: "10px",
  borderRadius: "30px",

  backgroundColor: "#1cc182",
  color: "white",
};
function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(createData().NumberOfClients.length);
  const [hovered, setHovered] = useState(false);

  // State to keep track of checked rows
  // const [checkedRows, setCheckedRows] = useState([]);

  // Function to handle checkbox click event
  // const handleCheckboxClick = (rowId) => {
  //   if (checkedRows.includes(rowId)) {
  //     // If rowId already exists in checkedRows, remove it
  //     setCheckedRows(checkedRows.filter((id) => id !== rowId));
  //   } else {
  //     // If rowId doesn't exist in checkedRows, add it
  //     setCheckedRows([...checkedRows, rowId]);
  //   }
  // };

  // Function to filter rows based on checked state
  // const filteredRows = rows.filter((row) => !checkedRows.includes(row.id));

  function handleNumberOfClients() {
    setCount((c) => c + 1);
  }

  return (
    <React.Fragment>
      <StyledTableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: hovered ? "inherit" : "#eee",
          cursor: "pointer",
        }}
      >
        <TableCell>
          <span style={styleCount} onChange={handleNumberOfClients}>
            {" "}
            {count}
          </span>

          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <MdExpandLess /> : <MdExpandMore />}
          </IconButton>
        </TableCell>
        <StyledTableCell component="th" scope="row" align="right">
          {row.name}
        </StyledTableCell>
        <StyledTableCell align="right">{row.amount}</StyledTableCell>
        <StyledTableCell align="right">{row.price}</StyledTableCell>
        {/* <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </StyledTableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ fontWeight: "bold", float: "right" }}
              >
                التفاصيل
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>التاريخ</TableCell>
                    <TableCell>اسم الموزع</TableCell>
                    <TableCell align="right">الكمية</TableCell>
                    <TableCell align="right">السعر($)</TableCell>
                    <TableCell align="right">رقم الموبيل</TableCell>
                    <TableCell align="right">حالة الدفع</TableCell>
                    <TableCell align="right"> تاكيد العملية</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.NumberOfClients.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerName}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                      <TableCell align="right">
                        {historyRow.phoneNumber}
                      </TableCell>
                      <TableCell align="right">{historyRow.status}</TableCell>
                      <TableCell align="right">
                        <Checkbox
                        // key={row.id} // Ensure each checkbox has a unique key
                        // checked={checkedRows.includes(row.id)}
                        // onChange={() => handleCheckboxClick(row.id)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    NumberOfClients: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("kushary", 159, 15.0, 24, 4.0, 3.99),
  createData("Flafel", 237, 10.0, 37, 4.3, 4.99),
  createData("pizza", 262, 20.0, 24, 6.0, 3.79),
  createData("shawerma", 305, 50.7, 67, 4.3, 2.5),
  createData("Kofta", 356, 16.0, 49, 3.9, 1.5),
];

const BigRowStyle = {
  color: "white",
  fontSize: "20px",
};
function Orders() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "black",
              fontSize: "20px",
            }}
          >
            <TableCell />
            <TableCell sx={BigRowStyle} align="right">
              المنتج
            </TableCell>
            <TableCell sx={BigRowStyle} align="right">
              العدد
            </TableCell>
            <TableCell sx={BigRowStyle} align="right">
              السعر
            </TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Orders;
