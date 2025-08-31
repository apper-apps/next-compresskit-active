import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Slider = forwardRef(({ 
  className, 
  value, 
  onChange, 
  min = 0, 
  max = 100, 
  step = 1,
  ...props 
}, ref) => {
  return (
    <div className="relative">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb",
          "focus:outline-none focus:ring-2 focus:ring-primary/50",
          className
        )}
        style={{
          background: `linear-gradient(to right, #7C3AED 0%, #8B5CF6 ${(value - min) / (max - min) * 100}%, #E5E7EB ${(value - min) / (max - min) * 100}%, #E5E7EB 100%)`
        }}
        ref={ref}
        {...props}
      />
      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7C3AED, #8B5CF6);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border: 2px solid white;
        }
        
        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7C3AED, #8B5CF6);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
});

Slider.displayName = "Slider";

export default Slider;