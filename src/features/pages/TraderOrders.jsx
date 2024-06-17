import { Container } from "@mui/material";
import { useGetOrders } from "../order/useGetOrders";
import AppTable from "../../components/ui/AppTable";
import OrderExpandComponent from "../order/OrderExpandComponent";

function TraderOrders() {
  const { orders } = useGetOrders();

  const columns = [
    {
      name: "اسم الموزع",
      selector: (row) => row.title,
    },
    {
      name: "رقم الهاتف",
      selector: (row) => row.phone,
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
  return (
    <Container>
      {orders?.map((order) => (
        <>
          <AppTable
            columns={columns}
            data={data}
            expandOnRowClicked
            expandableRowsComponent={OrderExpandComponent}
          />

          <div>
            {order?.orderItems?.map((orderItem) => (
              <>
                <div>{orderItem.product.title}</div>
              </>
            ))}
          </div>
        </>
      ))}
    </Container>
  );
}

export default TraderOrders;
