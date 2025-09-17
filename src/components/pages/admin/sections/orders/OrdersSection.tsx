import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SearchBar } from "../../../../ui/search/SearchInput";
import { ReusableTable } from "../../../../ui/table.tsx/Table";
import EditButton from "../../../../ui/table.tsx/Edit";
import DeleteButton from "../../../../ui/table.tsx/Delete";
import { Button } from "../../../../ui/button/Button";
import Status from "../../../../ui/table.tsx/Status";
import OrderPopUp from "./Orderpopup/OrderPopUp";

type Order = {
  id: number;
  customerName: string;
  orderDate: string;
  total: string;
  payment: string;
  lastUpdate: string;
  status: string;
  action: string;
};

const columns: ColumnsType<Order> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
      width: 30,

  },
  {
    title: "Customer Name",
    dataIndex: "customerName",
    key: "name",
    width: 30,
  },{
    title: "Order Date",
    dataIndex: "orderDate",
    key: "orderDate",
    width: 30,

      
  },{
    title: "Total",
    dataIndex: "total",
    key: "total",
      width: 30,

  },
  {
    title: "Payment",
    key: "payment",
    render: (_, record) => (
      <div className="p-2 text-sm rounded-full bg-gray-200 w-fit">
        <span>{record.payment}</span>
      </div>
    ),
    width: 350,

  },
  {
    title: "Last Status Update",
    dataIndex: "lastUpdate",
    key: "lastStatusUpdate",
    width: 150,

  },
  {
    title: "Status",
    key: "status",
    render: (_, record) => (
      <div className="flex gap-2">
        <Status status={record.status}/>
      </div>
    ),
    width: 100,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div className="flex gap-2">
        <OrderPopUp />
        <DeleteButton userId={record.id} />
      </div>
    ),
    width:30
  },
];

const orders: Order[] = [
  {
    id: 1,
    customerName: "John Doe",
    orderDate: "2025-09-01",
    total: "$120.50",
    payment: "Credit Card",
    lastUpdate: "2025-09-10",
    status: "Completed",
    action: "View",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    orderDate: "2025-09-03",
    total: "$89.99",
    payment: "PayPal",
    lastUpdate: "2025-09-11",
    status: "Pending",
    action: "View",
  },
  {
    id: 3,
    customerName: "Michael Johnson",
    orderDate: "2025-09-05",
    total: "$250.00",
    payment: "Bank Transfer",
    lastUpdate: "2025-09-12",
    status: "Cancelled",
    action: "View",
  },
  {
    id: 4,
    customerName: "Emily Davis",
    orderDate: "2025-09-07",
    total: "$59.49",
    payment: "Credit Card",
    lastUpdate: "2025-09-13",
    status: "Processing",
    action: "View",
  },
  {
    id: 5,
    customerName: "David Wilson",
    orderDate: "2025-09-08",
    total: "$320.75",
    payment: "PayPal",
    lastUpdate: "2025-09-14",
    status: "Completed",
    action: "View",
  },
];


export default function OrdersSection(){

    return(
         <div className="flex flex-col gap-5 w-full p-4">
            <h1 className="text-xl font-semibold mt-5">Orders Management</h1>
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <Button size="sm" isPill={true} icon={<XMarkIcon />} label="Cancel"/>
                </div>
                <div className="flex gap-2">
                    <Button size="sm" isPill={true} icon={<FunnelIcon />} label="Filter"/>
                    <SearchBar size="middle" pill={true} />
                </div>
            </div>
            <ReusableTable<Order>
                columns={columns}
                data={orders}
                rowKey="id"
                loading={false}
                selectionType="checkbox"
                rowSelection={{
                type: "checkbox",
                onChange: (selectedRowKeys, selectedRows) => {
                console.log("Selected keys:", selectedRowKeys, selectedRows);
                },
                }}
                />
        </div>
    )
}