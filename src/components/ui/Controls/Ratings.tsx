import { useState } from "react";
import { Rate } from "antd";

interface RatingProps {
  value?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
}
export default function MyRating(props: RatingProps) {
  const [value, setValue] = useState(props.value || 0);

  return (
    <div className="flex flex-col items-center gap-2">
      <Rate className="text-primary text-sm" disabled={props.disabled} value={value} onChange={setValue} />
    </div>
  );
}
