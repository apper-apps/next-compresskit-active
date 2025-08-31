import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import FileUpload from "@/components/molecules/FileUpload";
import CompressionSettings from "@/components/molecules/CompressionSettings";
import ProgressIndicator from "@/components/molecules/ProgressIndicator";
import FileComparisonCard from "@/components/molecules/FileComparisonCard";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const VideoProcessor = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [quality, setQuality] = useState(70);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [processedFile, setProcessedFile] = useState(null);
  const [status, setStatus] = useState("idle");

  // Estimate compressed file size based on quality
  const estimateCompressedSize = (originalSize, quality) => {
    const compressionFactor = quality / 100;
    const baseSizeReduction = 0.3; // Base 30% size reduction
    const qualityAdjustment = compressionFactor * 0.7; // Quality affects remaining 70%
    return Math.round(originalSize * (baseSizeReduction + qualityAdjustment));
  };

  const handleFileSelect = (file) => {
    setSelectedFile({
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
      duration: 120, // Mock duration
      resolution: "1920x1080" // Mock resolution
    });
    setProcessedFile(null);
    setStatus("ready");
    toast.success("Video uploaded successfully!");
  };

  const simulateCompression = async () => {
    setIsProcessing(true);
    setStatus("processing");
    setProgress(0);
    
    const totalTime = 8000; // 8 seconds for demo
    const interval = 100; // Update every 100ms
    const steps = totalTime / interval;
    const progressStep = 100 / steps;

    try {
      for (let i = 0; i <= steps; i++) {
        await new Promise(resolve => setTimeout(resolve, interval));
        const currentProgress = Math.min(i * progressStep, 100);
        setProgress(currentProgress);
        setTimeRemaining(Math.max(0, Math.round((totalTime - (i * interval)) / 1000)));
        
        if (currentProgress >= 100) break;
      }

      // Create mock processed file
      const compressedSize = estimateCompressedSize(selectedFile.size, quality);
      setProcessedFile({
        name: selectedFile.name.replace(/\.[^/.]+$/, "_compressed$&"),
        size: compressedSize,
        type: selectedFile.type,
        duration: selectedFile.duration,
        resolution: selectedFile.resolution,
        blob: new Blob(["mock compressed video data"], { type: selectedFile.type })
      });

      setStatus("completed");
      toast.success("Video compressed successfully!");
      
    } catch (error) {
      setStatus("error");
      toast.error("Compression failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleStartCompression = () => {
    if (!selectedFile) return;
    simulateCompression();
  };

  const handleCancelCompression = () => {
    setIsProcessing(false);
    setStatus("ready");
    setProgress(0);
    setTimeRemaining(0);
    toast.info("Compression cancelled");
  };

  const handleDownload = () => {
    if (!processedFile) return;
    
    const url = URL.createObjectURL(processedFile.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = processedFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("Download started!");
  };

  const handleStartOver = () => {
    setSelectedFile(null);
    setProcessedFile(null);
    setStatus("idle");
    setProgress(0);
    setQuality(70);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <AnimatePresence mode="wait">
        {!selectedFile && (
          <motion.div
            key="upload"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <FileUpload onFileSelect={handleFileSelect} />
          </motion.div>
        )}

        {selectedFile && status !== "completed" && (
          <motion.div
            key="processing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {/* File Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                    <ApperIcon name="FileVideo" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 truncate max-w-xs">{selectedFile.name}</h3>
                    <p className="text-sm text-gray-600">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • {selectedFile.resolution}
                    </p>
                  </div>
                </div>
                
                <Button variant="ghost" size="sm" onClick={handleStartOver}>
                  <ApperIcon name="X" size={16} />
                </Button>
              </div>
            </div>

            {/* Compression Settings */}
            {!isProcessing && (
              <CompressionSettings
                quality={quality}
                onQualityChange={setQuality}
                estimatedSize={estimateCompressedSize(selectedFile.size, quality)}
                originalSize={selectedFile.size}
              />
            )}

            {/* Start Compression Button */}
            {!isProcessing && (
              <div className="text-center">
                <Button onClick={handleStartCompression} size="lg" className="px-12">
                  <ApperIcon name="Zap" size={20} className="mr-2" />
                  Start Compression
                </Button>
              </div>
            )}

            {/* Progress Indicator */}
            {isProcessing && (
              <ProgressIndicator
                progress={progress}
                status={status}
                timeRemaining={timeRemaining}
                onCancel={handleCancelCompression}
                fileName={selectedFile.name}
              />
            )}
          </motion.div>
        )}

        {processedFile && status === "completed" && (
          <motion.div
            key="completed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FileComparisonCard
              originalFile={selectedFile}
              compressedFile={processedFile}
              onDownload={handleDownload}
              onStartOver={handleStartOver}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoProcessor;