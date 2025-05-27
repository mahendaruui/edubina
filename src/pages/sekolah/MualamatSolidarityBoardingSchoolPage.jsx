
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Leaf, Globe, HeartHandshake as Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const MualamatSolidarityBoardingSchoolPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-lime-500 via-green-600 to-emerald-700 pb-2">
            Mualamat Solidarity Boarding School
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-2 max-w-2xl mx-auto">
            Pendidikan Holistik Berbasis Solidaritas dan Kemanusiaan.
          </p>
        </header>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start mb-12 md:mb-16">
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
          <img
            className="rounded-xl shadow-md w-full h-auto object-cover aspect-video md:aspect-[4/3]"
            alt="Kawasan Mualamat Solidarity Boarding School"
           src="https://i.ytimg.com/vi/v84oFv5vI7I/maxresdefault.jpg" />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="space-y-6">
          <h2 className="text-3xl font-semibold text-lime-600 mb-4">Profil Sekolah</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Mualamat Solidarity Boarding School (MSBS) adalah sekolah berasrama yang unik, mengedepankan pendidikan karakter berbasis nilai-nilai solidaritas, kemanusiaan, dan kepedulian sosial. Sekolah ini bertujuan membentuk pribadi yang tidak hanya cerdas secara akademis, tetapi juga memiliki kepekaan sosial yang tinggi dan siap berkontribusi bagi masyarakat.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Dalam kemitraannya dengan Universitas Ubudiyah Indonesia, MSBS mendapatkan penguatan dalam pengembangan kurikulum yang integratif, program-program pengabdian masyarakat, serta peningkatan kapasitas tenaga pengajar dalam pendidikan karakter. Kolaborasi ini mendukung visi MSBS untuk menjadi pusat pendidikan yang inspiratif dan transformatif.
          </p>
        </motion.div>
      </div>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl font-semibold text-green-400 mb-8 text-center">Program Unggulan</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: <Leaf className="h-8 w-8 text-white" />, title: "Pendidikan Lingkungan dan Ekologi", description: "Menanamkan kesadaran dan kecintaan terhadap lingkungan melalui pembelajaran dan aksi nyata." },
            { icon: <Globe className="h-8 w-8 text-white" />, title: "Program Pertukaran Budaya", description: "Memperluas wawasan global dan pemahaman lintas budaya bagi siswa." },
            { icon: <Handshake className="h-8 w-8 text-white" />, title: "Proyek Kemanusiaan dan Sosial", description: "Melibatkan siswa secara aktif dalam kegiatan sosial untuk menumbuhkan empati dan solidaritas." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={featureCardVariants}
              className="bg-slate-800/70 p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition-shadow duration-300 flex flex-col items-center text-center glassmorphism-card"
            >
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="text-center">
        <p className="text-gray-400 mb-6 text-lg">
          Jadilah bagian dari generasi yang peduli dan berdampak bersama MSBS.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          Pelajari Program Solidaritas
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default MualamatSolidarityBoardingSchoolPage;
