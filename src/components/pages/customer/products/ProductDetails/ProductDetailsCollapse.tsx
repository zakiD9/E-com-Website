import React from "react";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import ReviewsSection from "../Reviews/ReviewsSection";
import { QnASection } from "./QndACollapse";


const qnaList = [
  { id: 1, question: "What is this product?", answer: "aw wchniya" },
  { id: 2, question: "How to use it?", answer: "ezharha" }
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
      children: <QnASection qnaList={qnaList} />,
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
