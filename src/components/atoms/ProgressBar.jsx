import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const ProgressBar = ({ 
  progress = 0, 
  className = "", 
  showPercentage = true,
  size = "md" 
}) => {
  const sizes = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4"
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div className={cn("bg-gray-200 rounded-full overflow-hidden", sizes[size])}>
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-white mix-blend-difference">
            {Math.round(progress)}%
          </span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;