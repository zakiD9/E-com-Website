import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../../ui/button/Button";
import { SearchBar } from "../../../../../ui/search/SearchInput";
import { ReusableTable } from "../../../../../ui/table.tsx/Table";
import AvatarItem from "../../../../../ui/table.tsx/AvatarItem";
import DeleteButton from "../../../../../ui/table.tsx/Delete";
import type { ColumnsType } from "antd/es/table";
import BrandPopUp from "./BrandPopUp";
import { useBrandStore } from "../../../../../../store/brandsStore";
import { useEffect, useState } from "react";


  type Brand = {
  brand: string;
  avatar:string;
  about: string;
};

export default function BrandsSection(){
  const { fetchBrands, removeBrand, brands, loading ,selectedBrand } = useBrandStore();
  const [search, setSearch] = useState("");

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
        <DeleteButton id={selectedBrand?.id} onClick={() => removeBrand(record.id)} />
      </div>
    ),
    width:30
  },
];

  useEffect(() => {
    fetchBrands();
  }, []);

const handleSearchChange = (value: string) => {
  setSearch(value);
  fetchBrands(1, 10, value);
};

const handleSearchSubmit = (value: string) => {
  fetchBrands(1, 10, value);
};



    return(
        <div className="flex flex-col gap-5">
                <div className="flex gap-2 justify-end">
                    <BrandPopUp isEdit={false}/>
                    <SearchBar
                      value={search}
                      onChange={handleSearchChange}
                      onSearch={handleSearchSubmit}
                      size="middle"
                     pill={true}
                    />
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