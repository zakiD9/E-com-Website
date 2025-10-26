import React from "react";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import ReviewsSection from "../Reviews/ReviewsSection";
import QndACollapse from "../../../../ui/ReusableCollapse";


const qna = [
    {
      key: "1",
      title: "Lorem",
      content: <p>This is content 1</p>,
      onEdit: () => console.log("Edit 1"),
      onDelete: () => console.log("Delete 1"),
    },
    {
      key: "2",
      title: "Lorem",
      content: <p>This is content 2</p>,
      onEdit: () => console.log("Edit 2"),
      onDelete: () => console.log("Delete 2"),
    },
  ];


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
      children: <QndACollapse items={qna} />,
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
