
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Zap, BarChart, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-indigo-400" />,
      title: 'Bimbingan Akademik dan Manajerial',
      description: 'Dukungan komprehensif untuk meningkatkan kualitas akademik dan tata kelola sekolah.',
    },
    {
      icon: <Users className="h-10 w-10 text-purple-400" />,
      title: 'Pelatihan Tenaga Pendidik',
      description: 'Program pengembangan profesional untuk guru dan staf pengajar.',
    },
    {
      icon: <Zap className="h-10 w-10 text-pink-400" />,
      title: 'Integrasi Teknologi Pendidikan',
      description: 'Pemanfaatan teknologi terkini untuk mendukung proses belajar mengajar.',
    },
    {
      icon: <Settings className="h-10 w-10 text-green-400" />,
      title: 'Pendampingan Kurikulum dan Digitalisasi',
      description: 'Bantuan dalam pengembangan kurikulum yang relevan dan adaptasi digital.',
    },
    {
      icon: <BarChart className="h-10 w-10 text-yellow-400" />,
      title: 'Monitoring dan Evaluasi Peningkatan Mutu',
      description: 'Pemantauan berkala untuk memastikan peningkatan kualitas berkelanjutan.',
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="py-20 text-center bg-cover bg-center relative rounded-xl overflow-hidden"
        style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.85), rgba(240, 240, 255, 0.9)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')" }}
      >
        <div className="absolute inset-0 bg-blue-50/50 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            variants={itemVariants}
          >
            Sekolah Binaan Universitas Ubudiyah Indonesia
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Menjalin kemitraan strategis untuk meningkatkan mutu pendidikan, tata kelola, dan kapasitas SDM di sekolah mitra di Banda Aceh.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <Link to="/sekolah-mitra">
                Lihat Sekolah Mitra <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="tentang"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 bg-gradient-to-r from-white to-blue-50 rounded-xl my-8"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-indigo-600">Tentang Program</motion.h2>
            <motion.p variants={itemVariants} className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
              Portal resmi Sekolah Binaan Universitas Ubudiyah Indonesia (UUI), sebuah inisiatif strategis yang bertujuan untuk menjalin kemitraan yang erat antara UUI dan sekolah-sekolah di wilayah Banda Aceh.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <img
                className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
                alt="Universitas Ubudiyah Indonesia campus building"
               src="https://edunitas.com//assets/image/news/imgcover_1621838403578.jpg" />
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-justify">
                Melalui program ini, Universitas Ubudiyah Indonesia memberikan pembinaan, pendampingan, dan dukungan berkelanjutan dalam rangka meningkatkan mutu pendidikan, tata kelola, serta kapasitas SDM di sekolah mitra.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Dengan semangat kolaborasi dan transformasi, program ini menjadi wadah untuk mendorong kemajuan pendidikan yang berkelanjutan dan merata, sekaligus memperkuat peran UUI sebagai institusi pendidikan tinggi yang aktif berkontribusi bagi kemajuan pendidikan dasar dan menengah di Banda Aceh.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="kegiatan"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 bg-white rounded-xl shadow-sm my-8"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">Sinergi dan Kegiatan</motion.h2>
            <motion.p variants={itemVariants} className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
              Sinergi antara UUI dan sekolah-sekolah binaan diwujudkan dalam berbagai bentuk kegiatan yang transformatif.
            </motion.p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg border border-indigo-100 transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className="p-3 md:p-4 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full mb-4 md:mb-6 inline-block shadow-md">
                  {React.cloneElement(feature.icon, { className: "h-8 w-8 md:h-10 md:w-10 text-white" })}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl my-8"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-indigo-600">Bergabunglah dengan Kami</motion.h2>
          <motion.p variants={itemVariants} className="text-md md:text-lg text-gray-700 max-w-xl mx-auto mb-8">
            Mari bersama-sama memajukan pendidikan di Banda Aceh. Hubungi kami untuk informasi lebih lanjut mengenai program Sekolah Binaan UUI.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              Kontak UUI
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;
