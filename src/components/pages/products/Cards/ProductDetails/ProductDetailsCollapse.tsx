import React from "react";
import { Collapse, Rate } from "antd";
import type { CollapseProps } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import ReviewsSection from "../../Reviews/ReviewsSection";

const { Panel } = Collapse;

const ProductDetailsCollapse: React.FC = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Description",
      children: <p>Product description goes here...</p>,
    },
    {
      key: "2",
      label: "Additional Information",
      children: <p>Extra product details here...</p>,
    },
    {
      key: "3",
      label: "Ratings & Reviews",
      children: (
        <ReviewsSection />
      ),
    },
    {
      key: "4",
      label: "Questions & Answers",
      children: <p>Q&A section here...</p>,
    },
    {
      key: "5",
      label: "About the Brand",
      children: <p>Brand details here...</p>,
    },
  ];

  return (
    <Collapse
        className="bg-white my-5"
      bordered={false}
      expandIconPosition="end"
      items={items}
      
    />
  );
};

export default ProductDetailsCollapse;
