
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Wrench, Lightbulb, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Smkn2BandaAcehPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 pb-2">
            SMK Negeri 2 Banda Aceh
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-2 max-w-2xl mx-auto">
            Menyiapkan Tenaga Kerja Terampil, Profesional, dan Siap Bersaing.
          </p>
        </header>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start mb-12 md:mb-16">
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
          <img  
            className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-video md:aspect-[4/3]" 
            alt="Gedung sekolah SMKN 2 Banda Aceh"
           src="https://images.unsplash.com/photo-1693038897445-e635653e6eb0" />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="space-y-6">
          <h2 className="text-3xl font-semibold text-amber-300 mb-4">Profil Sekolah</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            SMK Negeri 2 Banda Aceh adalah lembaga pendidikan kejuruan terkemuka yang fokus pada penyiapan lulusan siap kerja di berbagai bidang teknis dan industri. Dengan fasilitas bengkel dan laboratorium yang lengkap, sekolah ini memberikan pengalaman belajar praktik yang mendalam kepada para siswanya.
          </p>
          <p className="text-gray-300 leading-relaxed text-justify">
            Sebagai sekolah binaan Universitas Ubudiyah Indonesia, SMK Negeri 2 Banda Aceh mendapatkan dukungan dalam sinkronisasi kurikulum dengan kebutuhan industri, pelatihan instruktur, serta pengembangan program kewirausahaan. Kemitraan ini bertujuan untuk memastikan lulusan SMK Negeri 2 Banda Aceh memiliki kompetensi yang relevan dan daya saing tinggi di pasar kerja.
          </p>
        </motion.div>
      </div>

      <motion.section 
        variants={sectionVariants} 
        initial="hidden" 
        animate="visible" 
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl font-semibold text-orange-400 mb-8 text-center">Program Keahlian Unggulan</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: <Wrench className="h-8 w-8 text-white" />, title: "Teknik Kendaraan Ringan", description: "Mempersiapkan ahli mekanik otomotif dengan standar industri terkini." },
            { icon: <Lightbulb className="h-8 w-8 text-white" />, title: "Teknik Instalasi Tenaga Listrik", description: "Menghasilkan tenaga teknis profesional di bidang kelistrikan dan instalasi." },
            { icon: <Briefcase className="h-8 w-8 text-white" />, title: "Akuntansi dan Keuangan Lembaga", description: "Mencetak tenaga ahli di bidang akuntansi dan administrasi keuangan." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={featureCardVariants}
              className="bg-slate-800/70 p-6 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-shadow duration-300 flex flex-col items-center text-center glassmorphism-card"
            >
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-4 shadow-md">
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
          Siap menjadi tenaga profesional? Pelajari lebih lanjut tentang SMKN 2 Banda Aceh.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          Info Pendaftaran
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Smkn2BandaAcehPage;
  