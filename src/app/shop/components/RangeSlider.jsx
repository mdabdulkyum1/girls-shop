"use client"

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const RangeSlider = ({ min = 0, max = 5000, step = 100, defaultValues = [500, 3000], minGap = 100, onApply }) => {
  const [values, setValues] = useState(defaultValues);
  const [tooltip, setTooltip] = useState(null);

  const handleLowerChange = (val) => {
    if (val <= values[1] - minGap) setValues([val, values[1]]);
  };

  const handleUpperChange = (val) => {
    if (val >= values[0] + minGap) setValues([values[0], val]);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md border border-gray-300 dark:border-gray-700">
      {/* First Apply Button */}
      <Button className="mb-3 w-full bg-gray-800 text-white hover:bg-gray-900 transition-all" onClick={() => onApply?.(values)}>
        APPLY FILTER
      </Button>

      {/* Lower Value Slider */}
      <div className="relative mb-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold mb-1">Min Price: ৳{values[0]}</p>
        <div className="relative">
          <Slider
            defaultValue={[values[0]]}
            min={min}
            max={max - minGap}
            step={step}
            onValueChange={(val) => handleLowerChange(val[0])}
            onPointerEnter={() => setTooltip(values[0])}
            onPointerLeave={() => setTooltip(null)}
          />
          {tooltip !== null && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[-30px] left-[50%] -translate-x-[50%] bg-gray-800 text-white text-xs px-2 py-1 rounded-md"
            >
              ৳{values[0]}
            </motion.div>
          )}
        </div>
      </div>

      {/* Upper Value Slider */}
      <div className="relative">
        <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold mb-1">Max Price: ৳{values[1]}</p>
        <div className="relative">
          <Slider
            defaultValue={[values[1]]}
            min={min + minGap}
            max={max}
            step={step}
            onValueChange={(val) => handleUpperChange(val[0])}
            onPointerEnter={() => setTooltip(values[1])}
            onPointerLeave={() => setTooltip(null)}
          />
          {tooltip !== null && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[-30px] left-[50%] -translate-x-[50%] bg-gray-800 text-white text-xs px-2 py-1 rounded-md"
            >
              ৳{values[1]}
            </motion.div>
          )}
        </div>
      </div>

      {/* Price Display */}
      <p className="mt-3 text-gray-700 dark:text-gray-300 font-semibold text-center">
        Selected Range: <span className="text-blue-600 dark:text-blue-400">৳{values[0]} – ৳{values[1]}</span>
      </p>

      {/* Second Apply Button */}
      <Button className="mt-3 w-full bg-gray-800 text-white hover:bg-gray-900 transition-all" onClick={() => onApply?.(values)}>
        APPLY FILTER
      </Button>
    </div>
  );
};

export default RangeSlider;
