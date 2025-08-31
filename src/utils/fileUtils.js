export const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

export const formatDuration = (seconds) => {
  if (!seconds || seconds <= 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export const getFileExtension = (filename) => {
  return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase();
};

export const isVideoFile = (file) => {
  const videoTypes = ["mp4", "mov", "avi", "webm", "mkv", "flv", "wmv", "m4v"];
  const extension = getFileExtension(file.name);
  return videoTypes.includes(extension) || file.type.startsWith("video/");
};

export const estimateCompressionTime = (fileSize, quality) => {
  // Estimate based on file size (rough calculation)
  const baseTimes = {
    small: 5,   // < 50MB
    medium: 15, // 50MB - 200MB  
    large: 30,  // 200MB - 500MB
    huge: 60    // > 500MB
  };
  
  const sizeMB = fileSize / (1024 * 1024);
  const qualityMultiplier = (100 - quality) / 100 * 0.3 + 0.7; // Quality affects time
  
  let baseTime;
  if (sizeMB < 50) baseTime = baseTimes.small;
  else if (sizeMB < 200) baseTime = baseTimes.medium;
  else if (sizeMB < 500) baseTime = baseTimes.large;
  else baseTime = baseTimes.huge;
  
  return Math.round(baseTime * qualityMultiplier);
};

export const downloadFile = (blob, filename) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};