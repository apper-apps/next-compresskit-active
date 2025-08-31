import { motion } from "framer-motion";

const Loading = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <motion.div
        className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="mt-4 text-gray-600 font-medium">Processing video...</p>
      <p className="text-sm text-gray-400 mt-1">This may take a few moments</p>
    </div>
  );
};

export default Loading;