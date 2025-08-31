import { motion } from "framer-motion";
import Slider from "@/components/atoms/Slider";
import ApperIcon from "@/components/ApperIcon";

const CompressionSettings = ({ 
  quality, 
  onQualityChange, 
  estimatedSize,
  originalSize 
}) => {
  const compressionRatio = originalSize > 0 ? ((originalSize - estimatedSize) / originalSize * 100) : 0;

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getQualityLabel = (quality) => {
    if (quality >= 90) return "Maximum";
    if (quality >= 70) return "High";
    if (quality >= 50) return "Medium";
    if (quality >= 30) return "Low";
    return "Minimum";
  };

  const getQualityColor = (quality) => {
    if (quality >= 70) return "text-green-600";
    if (quality >= 50) return "text-yellow-600";
    return "text-orange-600";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
          <ApperIcon name="Settings" className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Compression Settings</h3>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="text-sm font-semibold text-gray-700">Quality Level</label>
            <span className={`text-sm font-bold ${getQualityColor(quality)}`}>
              {getQualityLabel(quality)} ({quality}%)
            </span>
          </div>
          
          <Slider
            value={quality}
            onChange={(e) => onQualityChange(parseInt(e.target.value))}
            min={30}
            max={100}
            step={1}
          />
          
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Smaller file</span>
            <span>Better quality</span>
          </div>
        </div>

        {originalSize > 0 && (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <ApperIcon name="FileVideo" className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Original Size</span>
              </div>
              <p className="text-lg font-bold text-gray-900">{formatFileSize(originalSize)}</p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <ApperIcon name="Zap" className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Estimated Size</span>
              </div>
              <p className="text-lg font-bold text-primary">{formatFileSize(estimatedSize)}</p>
            </div>
          </div>
        )}

        {compressionRatio > 0 && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ApperIcon name="TrendingDown" className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Size Reduction</span>
              </div>
              <span className="text-xl font-bold text-green-600">
                {compressionRatio.toFixed(1)}%
              </span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CompressionSettings;