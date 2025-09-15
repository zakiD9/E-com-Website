import React from "react";
import { Collapse, Space } from "antd";
import {
  DownOutlined,
} from "@ant-design/icons";
import DeleteButton from "./table.tsx/Delete";
import QndAPopUp from "../pages/admin/sections/productmanagement/Allproducts/addnewproduct/QndA/QndAPopUp";

const { Panel } = Collapse;

interface ReusableCollapseProps {
  items: {
    key: string;
    title: string;
    content?: React.ReactNode;
    onEdit?: () => void;
    onDelete?: () => void;
  }[];
}

export default function QndACollapse({ items }: ReusableCollapseProps) {
  return (
    <Collapse
      bordered={false}
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        <DownOutlined rotate={isActive ? 180 : 0} />
      )}
      className="bg-white w-full"   
      style={{ width: "100%" }}    
    >
      {items.map(({ key, title, content, onEdit, onDelete }) => (
        <Panel
          key={key}
          header={
            <div className="flex justify-between items-center w-full">
              <span>{title}</span>
              <Space>
                {onEdit && (
                  <QndAPopUp />
                )}
                {onDelete && (
                  <DeleteButton userId={1}
                  />
                )}
              </Space>
            </div>
          }
        >
          {content}
        </Panel>
      ))}
    </Collapse>
  );
}
