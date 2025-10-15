import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../../ui/button/Button";
import { SearchBar } from "../../../../../ui/search/SearchInput";
import { ReusableTable } from "../../../../../ui/table.tsx/Table";
import AvatarItem from "../../../../../ui/table.tsx/AvatarItem";
import DeleteButton from "../../../../../ui/table.tsx/Delete";
import type { ColumnsType } from "antd/es/table";
import BrandPopUp from "./BrandPopUp";


  type Brand = {
  brand: string;
  avatar:string;
  about: string;
};

const columns: ColumnsType<Brand> = [
  {
    title: "Name",
    key: "name",
    render: (_, record:Brand) => (
      <AvatarItem avatarUrl={record.avatar} firstName={record.brand} />
    ),
      width: 150,

  },
  {
    title: "About",
    dataIndex: "about",
    key: "about",
    width: 800,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record:any) => (
      <div className="flex gap-2">
        <BrandPopUp isEdit={true} id={record.id} />
        <DeleteButton userId={record.id} />
      </div>
    ),
    width:30
  },
];

const brands: Brand[] = [
  {
    brand: "Nike",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    about: "Global sportswear brand known for athletic shoes, apparel, and equipment.",
  },
  {
    brand: "Apple",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    about: "Innovative technology company creating iPhones, Macs, and other consumer electronics.",
  },
  {
    brand: "Samsung",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    about: "Leading global brand in electronics, smartphones, and home appliances.",
  },
  {
    brand: "Adidas",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    about: "German sportswear manufacturer producing shoes, clothing, and accessories.",
  },
  {
    brand: "IKEA",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/4/48/Ikea_logo.svg",
    about: "Swedish company that designs and sells ready-to-assemble furniture and home goods.",
  },
  {
    brand: "Sony",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/2/20/Sony_Logo.svg",
    about: "Japanese multinational corporation with products in gaming, electronics, and entertainment.",
  },
];


export default function BrandsSection(){

    return(
        <div className="flex flex-col gap-5">
                <div className="flex gap-2 justify-end">
                    <BrandPopUp isEdit={false}/>
                    <SearchBar  size="middle" pill={true} />
                </div>
            <ReusableTable<Brand>
                columns={columns}
                data={brands}
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