import { MdMonetizationOn, MdSell, MdShoppingCart } from "react-icons/md";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie } from "recharts";
import { Box, Stack, Typography } from "@mui/material";
import AppBreadcrumps from "../../components/ui/AppBreadcrumps";
import { FaUserCheck } from "react-icons/fa";
import AppTable from "../../components/ui/AppTable";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];
const data = [
  {
    name: "Jan",
    الربح: 4000,
  },
  {
    name: "Feb",
    الربح: 3000,
  },
  {
    name: "Mar",
    الربح: 2000,
  },
  {
    name: "Apr",
    الربح: 2780,
  },
  {
    name: "May",
    الربح: 1890,
  },
  {
    name: "Jaune",
    الربح: 2390,
  },
  {
    name: "July",
    الربح: 3490,
  },
];

export default function MainPage() {
  return (
    <div>
      <Prices />
      <div style={{ display: "flex" }}>
        <Piechart />
        <Barchart />
      </div>
      <Lastorders />
      <Bestclients />
    </div>
  );
}

function Prices() {
  return (
    <div
      className="boxes"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginRight: "20px",
        marginTop: "50px",
      }}
    >
      <Onebox />
    </div>
  );
}

function Onebox() {
  const boxStyle = {
    display: "flex",
    width: "350px",
    height: "110px",
    padding: "5px",
    marginLeft: "10px",
    backgroundColor: "#f2f2f2",
    borderRadius: "15px",
  };
  const iconStyle = {
    fontSize: "38px",
    marginTop: "25px",
    marginRight: "30px",
    width: "40px",
    height: "40px",
  };
  return (
    <>
      <div className="box" style={boxStyle}>
        <div className="icon" style={{ marginLeft: "50px" }}>
          {/* <IoStorefrontShar style={iconStyle} /> */}
          <MdMonetizationOn style={iconStyle} />
        </div>
        <div className="content">
          <p>اجمالي السعر</p>
          <span style={{ fontWeight: "bold" }}>73500</span>
        </div>
      </div>
      <div className="box" style={boxStyle}>
        <div className="icon" style={{ marginLeft: "50px" }}>
          {/* <ShoppingCartSharpIcon style={iconStyle} /> */}
          <MdShoppingCart style={iconStyle} />
        </div>
        <div className="content">
          <p>اجمالي الطلبيات</p>
          <span style={{ fontWeight: "bold" }}>700</span>
        </div>
      </div>
      <div className="box" style={boxStyle}>
        <div className="icon" style={{ marginLeft: "50px" }}>
          {/* <ShopSharpIcon style={iconStyle} /> */}
          <MdSell style={iconStyle} />
        </div>
        <div className="content">
          <p>اجمالي المنتجات</p>
          <span style={{ fontWeight: "bold" }}>1000</span>
        </div>
      </div>
    </>
  );
}

function Barchart() {
  return (
    <ResponsiveContainer
      width="70%"
      height={330}
      aspect={3}
      style={{
        marginTop: "30px",
        marginRight: "90px",
        // backgroundColor: "white",
        backgroundColor: "#f2f2f2",
      }}
    >
      <h3 style={{ marginRight: "30px" }}>المبيعات الشهرية</h3>
      <BarChart
        width={800}
        height={600}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="الخسائر"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="الربح"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

function Piechart() {
  return (
    <>
      <ResponsiveContainer
        width="30%"
        // height={360}
        aspect={1}
        style={{ marginRight: "30px", position: "relative", bottom: "30px" }}
      >
        <h3
          style={{
            zIndex: "2",
            position: "relative",
            top: "60px",
            right: "30px",
          }}
        >
          عدد الزوار
        </h3>
        <PieChart
          width={700}
          height={500}
          style={{ backgroundColor: "#f2f2f2" }}
        >
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#82ca9d"
            label
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

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
    الطلبيات الاخيرة
  </Typography>,
];
const Anotherbreadcrumbs = [
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
    افضل العملاء
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
    name: "المبلغ",
    selector: (row) => row.price,
  },
  {
    name: "التاريخ",
    cell: (row) => row.date,
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

const Clientsdata = [
  {
    id: 1,
    title: "محمد حمدي",
    phone: "01014545158",
    price: "369.70",
    date: "12/02/2024",
  },
  {
    id: 2,
    title: "عبدالرحمن احمد",
    phone: "01255641239",
    price: "125.00",
    date: "08/02/2024",
  },
  {
    id: 3,
    title: "السيد علي",
    phone: "01157412399",
    price: "500.00",
    date: "13/02/2024",
  },
  {
    id: 4,
    title: "محمد احمد ",
    phone: "01277541239",
    price: "75.00",
    date: "19/02/2024",
  },
];

function Lastorders() {
  return (
    <Stack spacing={4} style={{ marginTop: "100px" }}>
      <AppBreadcrumps breadcrumbs={breadcrumbs} />

      <AppTable columns={columns} data={Clientsdata} />
    </Stack>
  );
}
function Bestclients() {
  return (
    <Stack spacing={4} style={{ marginTop: "100px" }}>
      <AppBreadcrumps breadcrumbs={Anotherbreadcrumbs} />

      <AppTable columns={columns} data={Clientsdata} />
    </Stack>
  );
}
