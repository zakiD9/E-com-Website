import React, { useState } from "react";
import { Pagination } from "antd";

export default function MyPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const onChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      current={currentPage}
      onChange={onChange}
      total={100}          
      pageSize={10}        
      showSizeChanger={false}
    />
  );
}
