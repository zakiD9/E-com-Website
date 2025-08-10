import { useState } from "react";
import { Rate } from "antd";

export default function MyRating() {
  const [value, setValue] = useState(3);

  return (
    <div className="flex flex-col items-center gap-2">
      <Rate value={value} onChange={setValue} />
    </div>
  );
}
