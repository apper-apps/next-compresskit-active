import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const FileComparisonCard = ({ 
  originalFile, 
  compressedFile, 
  onDownload, 
  onStartOver 
}) => {
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const compressionRatio = ((originalFile.size - compressedFile.size) / originalFile.size * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
          <ApperIcon name="CheckCircle" className="w-5 h-5 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Compression Complete!</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Original File */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
          <div className="flex items-center space-x-3 mb-4">
            <ApperIcon name="FileVideo" className="w-5 h-5 text-gray-600" />
            <span className="font-semibold text-gray-700">Original Video</span>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 mb-1">File Size</p>
              <p className="text-lg font-bold text-gray-900">{formatFileSize(originalFile.size)}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-1">Duration</p>
              <p className="font-semibold text-gray-700">{formatDuration(originalFile.duration || 0)}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-1">Resolution</p>
              <p className="font-semibold text-gray-700">{originalFile.resolution || "1920x1080"}</p>
            </div>
          </div>
        </div>

        {/* Compressed File */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/20">
          <div className="flex items-center space-x-3 mb-4">
            <ApperIcon name="Zap" className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Compressed Video</span>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-primary/70 mb-1">File Size</p>
              <p className="text-lg font-bold text-primary">{formatFileSize(compressedFile.size)}</p>
            </div>
            
            <div>
              <p className="text-sm text-primary/70 mb-1">Duration</p>
              <p className="font-semibold text-primary">{formatDuration(compressedFile.duration || originalFile.duration || 0)}</p>
            </div>
            
            <div>
              <p className="text-sm text-primary/70 mb-1">Resolution</p>
              <p className="font-semibold text-primary">{compressedFile.resolution || originalFile.resolution || "1920x1080"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Size Reduction Display */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ApperIcon name="TrendingDown" className="w-6 h-6 text-green-600" />
            <div>
              <p className="font-semibold text-green-800">Size Reduced By</p>
              <p className="text-sm text-green-600">
                Saved {formatFileSize(originalFile.size - compressedFile.size)}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-green-600">
              {compressionRatio.toFixed(1)}%
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={onDownload} className="flex-1" size="lg">
          <ApperIcon name="Download" size={20} className="mr-2" />
          Download Compressed Video
        </Button>
        
        <Button onClick={onStartOver} variant="outline" size="lg">
          <ApperIcon name="RotateCcw" size={20} className="mr-2" />
          Compress Another
        </Button>
      </div>
    </motion.div>
  );
};

export default FileComparisonCard;