import { useState } from "react";
import { Slider } from "antd";

export default function MySlider() {
  const [value, setValue] = useState(30);

  const onChange = (val: number) => {
    setValue(val);
  };

  return (
    <div className="w-64 mx-auto">
      <Slider min={0} max={100} value={value} onChange={onChange} />
    </div>
  );
}
