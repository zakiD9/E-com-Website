import React from "react";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";

const { Panel } = Collapse;

export interface BorderlessCollapseProps extends CollapseProps {
  items: { key: string; label: string; content: React.ReactNode }[];
}

const BorderlessCollapse: React.FC<BorderlessCollapseProps> = ({
  items,
  ...rest
}) => {
  return (
    <Collapse
      ghost
      expandIconPosition="end"
      {...rest}
      className="custom-borderless-collapse"
    >
      {items.map((item) => (
        <Panel header={<span className="font-medium">{item.label}</span>} key={item.key}>
          {item.content}
        </Panel>
      ))}
    </Collapse>
  );
};

export default BorderlessCollapse;
