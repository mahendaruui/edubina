import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Users2, ShieldCheck, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmaSwastaMaryamBintiIbrahimPage = () => {
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
  <Button asChild variant="outline" className="mb-8 group text-indigo-100 border-indigo-300 hover:bg-indigo-50 hover:text-indigo-800 transition-colors duration-300">
          <Link to="/sekolah-mitra">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Kembali ke Daftar Sekolah
          </Link>
        </Button>

        <header className="mb-10 md:mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-600 to-sky-600 pb-2">
            SMA Swasta Maryam Binti Ibrahim
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-2 max-w-2xl mx-auto">
            Mencetak generasi perempuan tangguh, cerdas, dan berakhlak Islami.
          </p>
        </header>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start mb-12 md:mb-16">
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
          <img
            className="rounded-xl shadow-md w-full h-auto object-cover aspect-video md:aspect-[4/3]"
            alt="Gedung sekolah SMA Swasta Maryam Binti Ibrahim"
           src="https://i.ytimg.com/vi/x-l0QAzTScQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBBq8oLJ0hMbsDIrxqzqc9zMan8KA3" />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="space-y-6">
          <h2 className="text-3xl font-semibold text-teal-600 mb-4">Profil Sekolah</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            SMA Swasta Maryam Binti Ibrahim adalah lembaga pendidikan khusus perempuan yang didedikasikan untuk memberikan pendidikan berkualitas dengan landasan nilai-nilai Islam. Sekolah ini berfokus pada pengembangan potensi siswi secara holistik, baik dalam aspek akademik, spiritual, maupun keterampilan hidup.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Sebagai bagian dari jaringan sekolah binaan Universitas Ubudiyah Indonesia, SMA Swasta Maryam Binti Ibrahim terus berinovasi dalam metode pengajaran dan pengembangan kurikulum. Dukungan dari UUI mencakup pelatihan guru, integrasi teknologi pendidikan, dan program-program peningkatan mutu lainnya untuk memastikan siswi mendapatkan pengalaman belajar terbaik.
          </p>
        </motion.div>
      </div>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl font-semibold text-cyan-600 mb-8 text-center">Program Unggulan</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: <Heart className="h-8 w-8 text-white" />, title: "Pendidikan Karakter Feminin Islami", description: "Pembentukan kepribadian muslimah yang kuat, cerdas, dan berdaya." },
            { icon: <Users2 className="h-8 w-8 text-white" />, title: "Program Kepemimpinan Siswi", description: "Mengembangkan potensi kepemimpinan dan kemandirian pada setiap siswi." },
            { icon: <ShieldCheck className="h-8 w-8 text-white" />, title: "Keterampilan Kewirausahaan", description: "Membekali siswi dengan dasar-dasar kewirausahaan untuk masa depan." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={featureCardVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-md border border-indigo-100 transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-full mb-4 shadow-sm">
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
          Ingin tahu lebih banyak tentang SMA Swasta Maryam Binti Ibrahim?
        </p>
        <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          Hubungi Sekolah
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default SmaSwastaMaryamBintiIbrahimPage;
