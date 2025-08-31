import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const FeatureSection = () => {
  const features = [
    {
      icon: "Zap",
      title: "Lightning Fast Compression",
      description: "Advanced algorithms compress your videos in seconds, not minutes. Get results faster than any other tool.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: "Eye",
      title: "Quality Preservation",
      description: "Smart encoding maintains visual quality while dramatically reducing file size. Your videos look just as good.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: "Shield",
      title: "100% Private & Secure",
      description: "All processing happens in your browser. Your videos never leave your device. Complete privacy guaranteed.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: "Infinity",
      title: "Unlimited & Free",
      description: "Compress as many videos as you want, completely free. No registration, no watermarks, no hidden costs.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: "Smartphone",
      title: "Works Everywhere",
      description: "Use on any device - desktop, tablet, or mobile. Responsive design ensures perfect experience anywhere.",
      gradient: "from-red-400 to-rose-500"
    },
    {
      icon: "Layers",
      title: "Multiple Formats",
      description: "Support for MP4, MOV, AVI, WebM, and more. Convert and compress any video format with ease.",
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CompressKit?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The most advanced video compression technology, wrapped in a simple, beautiful interface. 
            Everything you need, nothing you don't.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <ApperIcon name={feature.icon} className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;