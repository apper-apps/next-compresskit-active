import { useState, useCallback } from "react";

const useVideoCompression = () => {
  const [isCompressing, setIsCompressing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const compressVideo = useCallback(async (file, quality = 70) => {
    setIsCompressing(true);
    setProgress(0);
    setError(null);

    try {
      // Simulate compression process
      const totalSteps = 100;
      const stepDelay = 80; // 80ms per step = 8 seconds total

      for (let i = 0; i <= totalSteps; i++) {
        await new Promise(resolve => setTimeout(resolve, stepDelay));
        setProgress(i);
      }

      // Calculate compressed size based on quality
      const compressionRatio = quality / 100;
      const baseReduction = 0.3; // Minimum 30% reduction
      const qualityAdjustment = compressionRatio * 0.7; // Quality affects remaining 70%
      const compressedSize = Math.round(file.size * (baseReduction + qualityAdjustment));

      // Create mock compressed file
      const compressedFile = {
        name: file.name.replace(/\.[^/.]+$/, "_compressed$&"),
        size: compressedSize,
        type: file.type,
        blob: new Blob(["mock compressed video data"], { type: file.type }),
        originalSize: file.size
      };

      setIsCompressing(false);
      return compressedFile;

    } catch (err) {
      setError(err.message);
      setIsCompressing(false);
      throw err;
    }
  }, []);

  const cancelCompression = useCallback(() => {
    setIsCompressing(false);
    setProgress(0);
    setError(null);
  }, []);

  return {
    compressVideo,
    cancelCompression,
    isCompressing,
    progress,
    error
  };
};

export default useVideoCompression;