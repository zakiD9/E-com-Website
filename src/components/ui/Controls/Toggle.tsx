import React, { useState } from "react";
import { Switch } from "antd";

export default function MyToggle() {
  const [checked, setChecked] = useState(false);

  const onChange = (checked: boolean) => {
    setChecked(checked);
  };

  return (
    <div className="flex items-center gap-4">
      <Switch checked={checked} onChange={onChange} />
    </div>
  );
}
