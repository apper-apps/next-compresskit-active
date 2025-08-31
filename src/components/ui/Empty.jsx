import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No files yet", 
  message = "Upload a video to get started", 
  actionLabel = "Upload Video",
  onAction,
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex flex-col items-center justify-center p-12 text-center ${className}`}
    >
      <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-6">
        <ApperIcon name="Video" className="w-10 h-10 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-8 max-w-sm">{message}</p>
      {onAction && (
        <button
          onClick={onAction}
          className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:scale-105 transition-transform duration-200 font-semibold shadow-lg"
        >
          {actionLabel}
        </button>
      )}
    </motion.div>
  );
};

export default Empty;