
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Medal, FlaskConical, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmaNegeri08BandaAcehPage = () => {
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
        <Button asChild variant="outline" className="mb-8 group text-indigo-400 border-indigo-400 hover:bg-indigo-500 hover:text-slate-900 transition-colors duration-300">
          <Link to="/sekolah-mitra">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Kembali ke Daftar Sekolah
          </Link>
        </Button>

        <header className="mb-10 md:mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 pb-2">
            SMA Negeri 08 Banda Aceh
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-2 max-w-2xl mx-auto">
            Unggul dalam Prestasi, Berkarakter, dan Berwawasan Global.
          </p>
        </header>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start mb-12 md:mb-16">
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
          <img  
            className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-video md:aspect-[4/3]" 
            alt="Gedung sekolah SMA Negeri 08 Banda Aceh"
           src="https://images.unsplash.com/photo-1616202317263-d088b9b49563" />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="space-y-6">
          <h2 className="text-3xl font-semibold text-green-300 mb-4">Profil Sekolah</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            SMA Negeri 08 Banda Aceh merupakan salah satu sekolah menengah atas negeri unggulan di Kota Banda Aceh. Dikenal dengan tradisi prestasi akademik dan non-akademik yang kuat, sekolah ini konsisten menghasilkan lulusan berkualitas yang diterima di berbagai perguruan tinggi ternama.
          </p>
          <p className="text-gray-300 leading-relaxed text-justify">
            Melalui kemitraan dengan Universitas Ubudiyah Indonesia, SMA Negeri 08 Banda Aceh mendapatkan dukungan dalam penguatan kapasitas guru, pengembangan program-program inovatif, dan peningkatan fasilitas pendukung pembelajaran. Kolaborasi ini bertujuan untuk memperkokoh posisi sekolah sebagai pusat pendidikan berkualitas yang relevan dengan tuntutan zaman.
          </p>
        </motion.div>
      </div>

      <motion.section 
        variants={sectionVariants} 
        initial="hidden" 
        animate="visible" 
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl font-semibold text-emerald-400 mb-8 text-center">Program Unggulan</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: <Medal className="h-8 w-8 text-white" />, title: "Kelas Olimpiade Sains", description: "Pembinaan intensif bagi siswa berpotensi untuk kompetisi sains tingkat nasional dan internasional." },
            { icon: <FlaskConical className="h-8 w-8 text-white" />, title: "Penelitian Ilmiah Remaja", description: "Mendorong budaya riset dan inovasi di kalangan siswa melalui berbagai proyek penelitian." },
            { icon: <Palette className="h-8 w-8 text-white" />, title: "Pengembangan Seni dan Budaya", description: "Fasilitasi beragam kegiatan seni dan budaya untuk menyalurkan bakat dan kreativitas siswa." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={featureCardVariants}
              className="bg-slate-800/70 p-6 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-shadow duration-300 flex flex-col items-center text-center glassmorphism-card"
            >
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mb-4 shadow-md">
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
          Dapatkan informasi lebih lanjut mengenai SMA Negeri 08 Banda Aceh.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          Lihat Prestasi Sekolah
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default SmaNegeri08BandaAcehPage;
  