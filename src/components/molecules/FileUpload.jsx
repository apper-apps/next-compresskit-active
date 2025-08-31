import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const FileUpload = ({ onFileSelect, acceptedFormats = [".mp4", ".mov", ".avi", ".webm", ".mkv"] }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const videoFile = files.find(file => {
      const extension = `.${file.name.split('.').pop().toLowerCase()}`;
      return acceptedFormats.includes(extension);
    });
    
    if (videoFile) {
      onFileSelect(videoFile);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div
      className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
        isDragOver 
          ? "border-primary bg-gradient-to-br from-primary/5 to-accent/5 scale-105" 
          : "border-gray-300 hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-center space-y-6">
        <motion.div
          className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
            isDragOver 
              ? "bg-gradient-to-br from-primary to-accent text-white" 
              : "bg-gradient-to-br from-primary/10 to-accent/10 text-primary"
          }`}
          animate={{ scale: isDragOver ? 1.1 : 1 }}
        >
          <ApperIcon name="Upload" size={40} />
        </motion.div>
        
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-gray-900">
            {isDragOver ? "Drop your video here!" : "Upload Your Video"}
          </h3>
          <p className="text-gray-600 max-w-md">
            Drag and drop your video file here, or click browse to select from your device
          </p>
        </div>

        <Button onClick={handleBrowseClick} size="lg">
          <ApperIcon name="FolderOpen" size={20} className="mr-2" />
          Browse Files
        </Button>

        <div className="flex flex-wrap gap-2 justify-center">
          {acceptedFormats.map((format) => (
            <span
              key={format}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium"
            >
              {format.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedFormats.join(",")}
        onChange={handleFileInput}
        className="hidden"
      />
    </motion.div>
  );
};

export default FileUpload;