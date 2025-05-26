
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { School, ArrowRight } from 'lucide-react';

const SekolahMitraPage = ({ sekolahMitra }) => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-12 md:py-16"
    >
      <motion.h1 
        className="text-4xl md:text-5xl font-extrabold mb-10 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-500 to-orange-400"
        initial={{ opacity:0, y: -20 }}
        animate={{ opacity:1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sekolah Mitra Kami
      </motion.h1>
      
      <motion.p 
        className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 text-center"
        initial={{ opacity:0, y: -10 }}
        animate={{ opacity:1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Berikut adalah daftar sekolah yang telah berkolaborasi dengan Universitas Ubudiyah Indonesia dalam program sekolah binaan, berkomitmen untuk meningkatkan kualitas pendidikan.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {sekolahMitra.map((sekolah, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-slate-800/70 p-6 rounded-xl shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between glassmorphism-card"
          >
            <div>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg mr-4 shadow-md">
                  <School className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-100">{sekolah.name}</h2>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Informasi detail mengenai profil, program unggulan, dan kontribusi {sekolah.name} dalam kemitraan dengan UUI.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-auto w-full text-indigo-400 border-indigo-400 hover:bg-indigo-500 hover:text-slate-900 transition-colors duration-300 group">
              <Link to={sekolah.path}>
                Lihat Detail <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SekolahMitraPage;
  