import { Select, Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const { Option } = Select;

export interface FilteringProps {
  options: { label: string; value: string }[]; 
  defaultValue?: string;                       
  onChange?: (value: string) => void;          
  onFilterClick?: () => void;                  
  showFilterButton?: boolean;                  
}

export default function Filtering({
  options,
  defaultValue,
  onChange,
  onFilterClick,
  showFilterButton = true,
}: FilteringProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-semibold text-gray-700">Sort by:</span>
      <Select
        defaultValue={defaultValue ?? options[0]?.value}
        style={{ width: 150 }}
        suffixIcon={null}
        className="rounded"
        onChange={onChange}
      >
        {options.map((opt) => (
          <Option key={opt.value} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Select>

      {showFilterButton && (
        <Button
          icon={<FilterOutlined />}
          className="bg-gray-100 border-none flex items-center"
          style={{ boxShadow: "none" }}
          onClick={onFilterClick}
        >
          Filter
        </Button>
      )}
    </div>
  );
}
