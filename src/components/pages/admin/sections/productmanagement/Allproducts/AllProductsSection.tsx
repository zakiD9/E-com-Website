import { CheckIcon, FunnelIcon, PlusIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../../ui/button/Button";
import { SearchBar } from "../../../../../ui/search/SearchInput";
import { ReusableTable } from "../../../../../ui/table.tsx/Table";
import EditButton from "../../../../../ui/table.tsx/Edit";
import Status from "../../../../../ui/table.tsx/Status";
import DeleteButton from "../../../../../ui/table.tsx/Delete";
import { useNavigate } from "react-router-dom";


  type Product = {
  id: number;
  firstName: string;
  brand: string;
  category: string;
  status: string;
};




const data: Product[] = [
  {
    id: 1,
    firstName: "Alice",
    brand: "Brand X",
    category: "Electronics",
    status: "Active",
  },
  {
    id: 2,
    firstName: "Bob",
    brand: "Brand Y",
    category: "Clothing",
    status: "Blocked",
  },
  {
    id: 3,
    firstName: "Charlie",
    brand: "Brand Z",
    category: "Accessories",
    status: "Active",
  },
  {
    id: 4,
    firstName: "Dana",
    brand: "Brand W",
    category: "Home",
    status: "Active",
  },
  {
    id: 5,
    firstName: "Evan",
    brand: "Brand V",
    category: "Sports",
    status: "Blocked",
  },
];

export default function AllProductSection(){
  const navigate = useNavigate();
  const columns: ColumnsType<Product> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
      width: 30,

  },
  {
    title: "Name",
    key: "name",
    render: (_, record) => (
      <span>{record.firstName}</span>
    ),
      width: 350,

  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
    width: 150,

  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    width: 100,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: Product["status"]) => <Status status={status} />,
    width:50,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div className="flex gap-2">
        <EditButton onClick={()=>{navigate("/admin/product-management/add")}} />
        <DeleteButton />
      </div>
    ),
    width:30
  },
];


    return(
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <Button size="sm" isPill={true} icon={<CheckIcon />} label="Enable"/>
                    <Button size="sm" isPill={true} icon={<XMarkIcon />} label="Disable"/>
                    <Button size="sm" isPill={true} icon={<TrashIcon />} label="Delete"/>
                </div>
                <div className="flex gap-2">
                    <Button onClick={()=>{navigate("/admin/product-management/add")}} size="sm" isPill={true} icon={<PlusIcon />} label="Add New Product"/>
                    <Button size="sm" isPill={true} icon={<FunnelIcon />} label="Filter"/>
                    <SearchBar size="middle" pill={true} />
                </div>
            </div>
            <ReusableTable<Product>
                columns={columns}
                data={data}
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