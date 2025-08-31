import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Header = () => {
  const features = [
    { icon: "Zap", text: "Lightning Fast" },
    { icon: "Shield", text: "100% Secure" },
    { icon: "Download", text: "No Watermarks" },
    { icon: "Infinity", text: "Unlimited Use" }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-8 mb-16"
    >
      {/* Logo and Title */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
          <ApperIcon name="Video" className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            CompressKit
          </h1>
          <p className="text-lg text-gray-600 font-medium">Free Video Compressor</p>
        </div>
      </div>

      {/* Main Headline */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
          Compress Videos Without
          <span className="block bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
            Losing Quality
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Reduce video file sizes by up to 90% while maintaining stunning visual quality. 
          Fast, free, and completely private - no watermarks, no limits.
        </p>
      </div>

      {/* Feature Pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.text}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100"
          >
            <ApperIcon name={feature.icon} size={16} className="text-primary" />
            <span className="text-sm font-semibold text-gray-700">{feature.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.header>
  );
};

export default Header;