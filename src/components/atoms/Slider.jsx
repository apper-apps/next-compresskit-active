import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Slider = forwardRef(({ 
  className,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  ...props 
}, ref) => {
  return (
    <div className="relative w-full">
      <input
        ref={ref}
        type="range"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className={cn(
          "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
          "focus:outline-none focus:ring-2 focus:ring-primary/50",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          // Webkit styles
          "[&::-webkit-slider-thumb]:appearance-none",
          "[&::-webkit-slider-thumb]:w-5",
          "[&::-webkit-slider-thumb]:h-5",
          "[&::-webkit-slider-thumb]:rounded-full",
          "[&::-webkit-slider-thumb]:bg-gradient-to-br",
          "[&::-webkit-slider-thumb]:from-primary",
          "[&::-webkit-slider-thumb]:to-accent",
          "[&::-webkit-slider-thumb]:cursor-pointer",
          "[&::-webkit-slider-thumb]:shadow-md",
          "[&::-webkit-slider-thumb]:border-2",
          "[&::-webkit-slider-thumb]:border-white",
          "[&::-webkit-slider-thumb]:transition-all",
          "[&::-webkit-slider-thumb]:duration-200",
          "[&::-webkit-slider-thumb]:hover:scale-110",
          // Firefox styles
          "[&::-moz-range-thumb]:w-5",
          "[&::-moz-range-thumb]:h-5",
          "[&::-moz-range-thumb]:rounded-full",
          "[&::-moz-range-thumb]:bg-gradient-to-br",
          "[&::-moz-range-thumb]:from-primary",
          "[&::-moz-range-thumb]:to-accent",
          "[&::-moz-range-thumb]:cursor-pointer",
          "[&::-moz-range-thumb]:shadow-md",
          "[&::-moz-range-thumb]:border-2",
          "[&::-moz-range-thumb]:border-white",
          "[&::-moz-range-thumb]:border-none",
          // Track styles
          "[&::-webkit-slider-runnable-track]:rounded-lg",
          "[&::-moz-range-track]:rounded-lg",
          "[&::-moz-range-track]:bg-gray-200",
          className
        )}
        style={{
          background: `linear-gradient(to right, #7C3AED 0%, #8B5CF6 ${((value - min) / (max - min)) * 100}%, #e5e7eb ${((value - min) / (max - min)) * 100}%, #e5e7eb 100%)`
        }}
        {...props}
      />
    </div>
  );
});

Slider.displayName = "Slider";

export default Slider;