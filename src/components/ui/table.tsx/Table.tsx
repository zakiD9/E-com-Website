import React from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

type SelectionType = "checkbox" | "radio" | "none";

type ReusableTableProps<T> = {
  columns: ColumnsType<T>;
  data: T[];
  loading?: boolean;
  rowKey?: string;
  pagination?: TableProps<T>["pagination"];
  selectionType?: SelectionType;
  onSelectChange?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
};

export function ReusableTable<T extends object>({
  columns,
  data,
  loading = false,
  rowKey = "id",
  selectionType = "none",
  onSelectChange,
}: ReusableTableProps<T>) {
  const rowSelection =
    selectionType === "none"
      ? undefined
      : {
          type: selectionType,
          onChange: onSelectChange,
        };

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
