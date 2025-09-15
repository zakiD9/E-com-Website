import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../../../../ui/button/Button";
import { TextButton } from "../../../../../../../ui/button/TextButton";
import { ReusableTable } from "../../../../../../../ui/table.tsx/Table";
import EditButton from "../../../../../../../ui/table.tsx/Edit";
import DeleteButton from "../../../../../../../ui/table.tsx/Delete";
import ProductItemPopUp from "./ProductItemPopUp/ProductItemPopUp";

type Item = {
  itemName: string;
  variants: string;
  quantity: number;
};


const columns: ColumnsType<Item> = [
  {
    title: "Name",
    key: "name",
    render: (_, record) => (
      <span>{record.itemName}</span>
    ),
      width: 350,

  },
  {
    title: "Variants",
    dataIndex: "variants",
    key: "variants",
    width: 150,

  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    width: 100,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div className="flex gap-2">
        <ProductItemPopUp />
        <DeleteButton userId={record.id} />
      </div>
    ),
    width:30
  },
];


const data: Item[] = [
  {
    itemName: "Alice",
    variants: "Brand X",
    quantity: 20,
  },
];

export default function ProductItemsSection(){

    return(
        <div className="flex flex-col w-full justify-start gap-2">
        <h1 className="text-lg font-semibold mb-3">Product Items</h1>
        <div className="flex items-center justify-between">
        <Button size="sm" isPill={true} icon={<PlusIcon />} label="Add New Items"/>
        <TextButton label="Configure Variants"/>
        </div>
        <ReusableTable<Item>
                        columns={columns}
                        data={data}
                        rowKey="id"
                        loading={false}
                        selectionType="none"
        />
        </div>
    )
}