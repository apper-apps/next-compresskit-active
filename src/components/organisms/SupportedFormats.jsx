import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const SupportedFormats = () => {
  const inputFormats = [
    { format: "MP4", description: "Most popular video format", icon: "PlayCircle" },
    { format: "MOV", description: "Apple QuickTime format", icon: "Smartphone" },
    { format: "AVI", description: "Windows video format", icon: "Monitor" },
    { format: "WebM", description: "Web-optimized format", icon: "Globe" },
    { format: "MKV", description: "High-quality container", icon: "Film" },
    { format: "FLV", description: "Flash video format", icon: "Zap" }
  ];

  const outputFormats = [
    { format: "MP4", description: "Best compatibility", recommended: true },
    { format: "WebM", description: "Smaller file sizes", recommended: false },
    { format: "MOV", description: "Mac-friendly format", recommended: false }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Supported Video Formats
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload any video format and compress it with ease. We support all major video formats 
            and convert them to web-friendly outputs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Formats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Input Formats</h3>
              <p className="text-gray-600">Upload any of these video formats</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {inputFormats.map((format, index) => (
                <motion.div
                  key={format.format}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <ApperIcon name={format.icon} className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">.{format.format}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{format.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Output Formats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Output Formats</h3>
              <p className="text-gray-600">Download your compressed video as</p>
            </div>
            
            <div className="space-y-4">
              {outputFormats.map((format, index) => (
                <motion.div
                  key={format.format}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    format.recommended
                      ? "bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-lg"
                      : "bg-white border-gray-200 hover:border-primary/30 shadow-md hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        format.recommended
                          ? "bg-gradient-to-br from-primary to-accent text-white"
                          : "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600"
                      }`}>
                        <ApperIcon name="Download" className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">.{format.format}</h4>
                        <p className="text-sm text-gray-600">{format.description}</p>
                      </div>
                    </div>
                    
                    {format.recommended && (
                      <span className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Recommended
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <ApperIcon name="Info" className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Need a different format?</h4>
              <p className="text-gray-700 leading-relaxed">
                CompressKit automatically optimizes your video for the best compression ratio while maintaining quality. 
                MP4 is recommended for maximum compatibility across all devices and platforms. If you need a specific 
                output format, our smart compression engine will handle the conversion seamlessly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportedFormats;