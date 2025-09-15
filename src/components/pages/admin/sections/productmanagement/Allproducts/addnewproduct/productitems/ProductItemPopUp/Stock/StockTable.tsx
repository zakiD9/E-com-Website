import DeleteButton from "../../../../../../../../../ui/table.tsx/Delete";
import Status from "../../../../../../../../../ui/table.tsx/Status";
import StockPopUp from "./StockPopUp";

type StockItem = {
  stockId: number | string;
  availableQty: number;
  reservedQty: number;
  salesPrice: number;
  expirationDate: string;
  createDate: string;
  status: string;
};

type StockTableProps = {
  items: StockItem[];
  onEdit?: (id: number | string) => void;
  onDelete?: (id: number | string) => void;
};

export default function StockTable({ items, onEdit, onDelete }: StockTableProps) {
  return (
    <div className="flex flex-col w-full gap-1">
      <div className="flex justify-between">
        <span className="text-sm text-gray-600">Stock Id</span>
        <span className="text-sm text-gray-600">Ava. Qty</span>
        <span className="text-sm text-gray-600">Res. Qty</span>
        <span className="text-sm text-gray-600">Sales Price</span>
        <span className="text-sm text-gray-600">Expiration Date</span>
        <span className="text-sm text-gray-600">Create Date</span>
        <span className="text-sm text-gray-600">Status</span>
        <span className="text-sm text-gray-600">Actions</span>
      </div>
      <hr className="border-t-2 border-gray-600" />

      {items.map((item) => (
        <div key={item.stockId} className="flex justify-between items-center">
          <span className="text-sm ml-3">{item.stockId}</span>
          <span className="text-sm">{item.availableQty}</span>
          <span className="text-sm">{item.reservedQty}</span>
          <span className="text-sm">${item.salesPrice.toFixed(2)}</span>
          <span className="text-sm">{item.expirationDate}</span>
          <span className="text-sm">{item.createDate}</span>
          <span className="text-sm">
            <Status size="small" status={item.status} />
          </span>
          <div className="flex">
            <StockPopUp />
            <DeleteButton onClick={() => onDelete?.(item.stockId)} />
          </div>
        </div>
      ))}
      <hr className="border-t-2 border-gray-600" />
    </div>
  );
}
