import { FunnelIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../ui/button/Button";
import { SearchBar } from "../../../../ui/search/SearchInput";
import { ReusableTable } from "../../../../ui/table.tsx/Table";
import DeleteButton from "../../../../ui/table.tsx/Delete";
import EditButton from "../../../../ui/table.tsx/Edit";
import MyRating from "../../../../ui/Controls/Ratings";
import AvatarItem from "../../../../ui/table.tsx/AvatarItem";


type Review = {
  id: number;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  productId: string;
};

const columns: ColumnsType<Review> = [
  {
    title: "Customer Name",
    render: (_, record) => (
      <AvatarItem firstName={record.customerName}/>
    ),
    key: "customerName",
    width: 100,
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    width: 100,
    render: (rating: number) => (
      <MyRating value={rating} disabled={true}/>
    ),
  },
  {
    title: "Comment",
    dataIndex: "comment",
    key: "comment",
    width: 450,
    ellipsis: true,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: 100,
  },
  {
    title: "Product #",
    dataIndex: "productId",
    key: "productId",
    width: 80,
  },
  {
    title: "Action",
    key: "action",
    width: 100,
    render: (_, record) => (
      <div className="flex gap-2">
        <EditButton userId={record.id} />
        <DeleteButton />
      </div>
    ),
  },
];

const reviews: Review[] = [
  {
    id: 1,
    customerName: "John Doe",
    rating: 5,
    comment: "Amazing product! High quality and fast delivery.",
    date: "2025-09-10",
    productId: "P-101",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    rating: 4,
    comment: "Pretty good, but packaging could be better.",
    date: "2025-09-11",
    productId: "P-102",
  },
  {
    id: 3,
    customerName: "Michael Johnson",
    rating: 2,
    comment: "Not satisfied, item arrived damaged.",
    date: "2025-09-12",
    productId: "P-103",
  },
  {
    id: 4,
    customerName: "Emily Davis",
    rating: 5,
    comment: "Perfect fit, will definitely buy again.",
    date: "2025-09-13",
    productId: "P-104",
  },
  {
    id: 5,
    customerName: "David Wilson",
    rating: 3,
    comment: "Average quality, expected a bit more.",
    date: "2025-09-14",
    productId: "P-105",
  },
];



export default function ReviewsSection(){

    return(
        <div className="flex flex-col gap-5 w-full p-4">
            <h1 className="text-xl font-semibold mt-5">Reviews Management</h1>
                <div className="flex justify-end gap-2">
                    <Button size="sm" isPill={true} icon={<FunnelIcon />} label="Filter"/>
                    <SearchBar size="middle" pill={true} />
                </div>
            <ReusableTable<Review>
                columns={columns}
                data={reviews}
                rowKey="id"
                loading={false}
                rowSelection={{
                type: "checkbox",
                onChange: (selectedRowKeys, selectedRows) => {
                console.log("Selected keys:", selectedRowKeys, selectedRows);
                },
                }}
                />
        </div>
    )
}