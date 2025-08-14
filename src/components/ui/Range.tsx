import React, { useState } from "react";
import { Slider, InputNumber, Row, Col } from "antd";

interface PriceRangeProps {
  min?: number;
  max?: number;
  step?: number;
}

export const PriceRange: React.FC<PriceRangeProps> = ({
  min = 0,
  max = 1000,
  step = 10,
}) => {
  const [range, setRange] = useState<[number, number]>([min, max]);

  const handleSliderChange = (value: [number, number]) => {
    setRange(value);
  };

  const handleMinChange = (value: number | null) => {
    setRange(([_, maxValue]) => [
      value !== null ? Math.min(value, maxValue) : min,
      maxValue,
    ]);
  };

  const handleMaxChange = (value: number | null) => {
    setRange(([minValue, _]) => [
      minValue,
      value !== null ? Math.max(value, minValue) : max,
    ]);
  };

  return (
    <div>
        <h1 className="my-2">Price Range:</h1>
      <Row align="middle">
        <Col flex="auto">
          <Slider
            range
            min={min}
            max={max}
            step={step}
            value={range}
            onChange={handleSliderChange}
          />
        </Col>
      </Row>
      <div className="flex justify-between">
          <InputNumber
            min={min}
            max={range[1]}
            step={step}
            value={range[0]}
            onChange={handleMinChange}
            size="large"
          />
          <InputNumber
            min={range[0]}
            max={max}
            step={step}
            value={range[1]}
            onChange={handleMaxChange}
            size="large"
          />
        </div>
    </div>
  );
};
