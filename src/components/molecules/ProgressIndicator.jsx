import { motion } from "framer-motion";
import ProgressBar from "@/components/atoms/ProgressBar";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const ProgressIndicator = ({ 
  progress, 
  status, 
  timeRemaining, 
  onCancel,
  fileName 
}) => {
  const formatTime = (seconds) => {
    if (!seconds || seconds <= 0) return "--:--";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getStatusMessage = () => {
    switch (status) {
      case "processing":
        return "Compressing your video...";
      case "completed":
        return "Compression completed!";
      case "error":
        return "Compression failed";
      default:
        return "Preparing...";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "processing":
        return "Loader2";
      case "completed":
        return "CheckCircle";
      case "error":
        return "AlertCircle";
      default:
        return "Clock";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <motion.div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              status === "completed" 
                ? "bg-green-100" 
                : status === "error" 
                ? "bg-red-100" 
                : "bg-gradient-to-br from-primary/10 to-accent/10"
            }`}
            animate={status === "processing" ? { rotate: 360 } : {}}
            transition={status === "processing" ? { duration: 2, repeat: Infinity, ease: "linear" } : {}}
          >
            <ApperIcon 
              name={getStatusIcon()} 
              className={`w-5 h-5 ${
                status === "completed" 
                  ? "text-green-600" 
                  : status === "error" 
                  ? "text-red-600" 
                  : "text-primary"
              }`} 
            />
          </motion.div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{getStatusMessage()}</h3>
            {fileName && <p className="text-sm text-gray-600 truncate max-w-xs">{fileName}</p>}
          </div>
        </div>

        {status === "processing" && onCancel && (
          <Button variant="ghost" size="sm" onClick={onCancel}>
            <ApperIcon name="X" size={16} className="mr-1" />
            Cancel
          </Button>
        )}
      </div>

      {status === "processing" && (
        <div className="space-y-4">
          <ProgressBar progress={progress} size="lg" />
          
          <div className="flex justify-between text-sm text-gray-600">
            <span>Progress: {Math.round(progress)}%</span>
            <span>Time remaining: {formatTime(timeRemaining)}</span>
          </div>
        </div>
      )}

      {status === "completed" && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
          <div className="flex items-center space-x-2">
            <ApperIcon name="CheckCircle" className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-green-800">
              Your video has been compressed successfully!
            </span>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="bg-gradient-to-r from-red-50 to-rose-50 p-4 rounded-xl border border-red-100">
          <div className="flex items-center space-x-2">
            <ApperIcon name="AlertCircle" className="w-5 h-5 text-red-600" />
            <span className="font-semibold text-red-800">
              Something went wrong during compression. Please try again.
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProgressIndicator;