import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

type TabItem = {
  key: string;
  label: string;
  children: React.ReactNode;
};

type ReusableTabsProps = {
  items: TabItem[];
  defaultActiveKey?: string;
  onChange?: (activeKey: string) => void;
  type?: TabsProps["type"];
  centered?: boolean;
};

export default function ReusableTabs({
  items,
  defaultActiveKey,
  onChange,
  type = "line",
  centered = false,
}: ReusableTabsProps) {
  return (
    <Tabs
      defaultActiveKey={defaultActiveKey}
      onChange={onChange}
      type={type}
      centered={centered}
      items={items}
    />
  );
}
