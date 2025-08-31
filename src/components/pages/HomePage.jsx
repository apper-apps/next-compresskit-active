import { motion } from "framer-motion";
import Header from "@/components/organisms/Header";
import VideoProcessor from "@/components/organisms/VideoProcessor";
import FeatureSection from "@/components/organisms/FeatureSection";
import SupportedFormats from "@/components/organisms/SupportedFormats";
import Footer from "@/components/organisms/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-gray-50">
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
      >
        <Header />
        <VideoProcessor />
      </motion.main>

      {/* Feature Sections */}
      <FeatureSection />
      <SupportedFormats />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;