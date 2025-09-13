import React from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

type ReusableTableProps<T> = {
  columns: ColumnsType<T>;
  data: T[];
  loading?: boolean;
  rowKey?: string;
  pagination?: TableProps<T>["pagination"];
  rowSelection?: TableProps<T>["rowSelection"];
};

export function ReusableTable<T extends object>({
  columns,
  data,
  loading = false,
  rowKey = "id",
  rowSelection,
}: ReusableTableProps<T>) {
  return (
    <Table<T>
      columns={columns}
      dataSource={data}
      rowKey={rowKey}
      loading={loading}
      bordered
      rowSelection={rowSelection}
      scroll={{ x: true }}
      tableLayout="fixed" 
    />
  );
}
