import React from "react";
import { ReusableTable } from "../../../../ui/table.tsx/Table";

type Order = {
  id: string;
  date: string;
  status: string;
  total: string;
};

import type { ColumnsType } from "antd/es/table";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const columns: ColumnsType<Order> = [
  {
    title: "Order ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <span className={status === "Pending" ? "text-yellow-600" : "text-green-600"}>
        {status}
      </span>
    ),
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <button className="flex items-center text-blue-600 hover:underline">
        View details <ArrowRightIcon className="w-4 h-4 ml-1" />
      </button>
    ),
  },
];

const data: Order[] = [
  { id: "1001", date: "2025-08-01", status: "Pending", total: "$250" },
  { id: "1002", date: "2025-08-02", status: "Completed", total: "$120" },
  { id: "1003", date: "2025-08-03", status: "Pending", total: "$80" },
];




export default function OrdersHistoryTable() {
  return (
    <div>
      <ReusableTable<Order> columns={columns} data={data} rowKey="id" />
    </div>
  );
}
