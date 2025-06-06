
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmasBabulMaghfirahPage = () => {
  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const featureCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-16"
    >
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
  <Button asChild variant="outline" className="mb-8 group text-indigo-600 border-indigo-500 hover:bg-indigo-50 hover:text-indigo-800 transition-colors duration-300">
          <Link to="/sekolah-mitra">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Kembali ke Daftar Sekolah
          </Link>
        </Button>

        <header className="mb-10 md:mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 pb-2">
            SMAS Babul Maghfirah
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-2 max-w-2xl mx-auto">
            Membentuk generasi Qur'ani yang cerdas, berakhlak mulia, dan kompetitif.
          </p>
        </header>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start mb-12 md:mb-16">
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
          <img
            className="rounded-xl shadow-md w-full h-auto object-cover aspect-video md:aspect-[4/3]"
            alt="Gedung sekolah SMAS Babul Maghfirah"
           src="https://lh3.googleusercontent.com/p/AF1QipPfCiV_T-4x5PNENFVhQKKIEfruG8fauSM9NrGC=s680-w680-h510" />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="space-y-6">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Profil Sekolah</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            SMAS Babul Maghfirah adalah sekolah menengah atas swasta yang berlokasi strategis di Aceh Besar. Dengan fokus pada pendidikan Islam terpadu, sekolah ini berkomitmen untuk mencetak lulusan yang tidak hanya unggul dalam bidang akademik tetapi juga memiliki pemahaman agama yang kuat dan karakter yang terpuji.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Sebagai salah satu sekolah binaan Universitas Ubudiyah Indonesia, SMAS Babul Maghfirah mendapatkan pendampingan intensif dalam pengembangan kurikulum, peningkatan kualitas tenaga pendidik, dan integrasi teknologi dalam pembelajaran. Kolaborasi ini bertujuan untuk terus meningkatkan standar pendidikan dan relevansi sekolah di era modern.
          </p>
        </motion.div>
      </div>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl font-semibold text-pink-600 mb-8 text-center">Program Unggulan</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: <BookOpen className="h-8 w-8 text-white" />, title: "Tahfidz Al-Qur'an", description: "Program intensif menghafal Al-Qur'an dengan target hafalan yang terukur." },
            { icon: <Users className="h-8 w-8 text-white" />, title: "Kajian Kitab Kuning", description: "Pembelajaran kitab-kitab klasik Islam untuk memperdalam pemahaman keagamaan." },
            { icon: <Zap className="h-8 w-8 text-white" />, title: "Ekstrakurikuler Islami", description: "Beragam kegiatan penunjang bakat dan minat siswa dalam koridor nilai-nilai Islami." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={featureCardVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-md border border-indigo-100 transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="p-3 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="text-center">
        <p className="text-gray-700 mb-6 text-lg">
          Tertarik untuk mengetahui lebih lanjut tentang SMAS Babul Maghfirah?
        </p>
        <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          Kunjungi Website Sekolah
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default SmasBabulMaghfirahPage;
