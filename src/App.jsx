
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { Home, Briefcase, Users, MonitorPlay, ChevronDown, School as SchoolIconLucide } from 'lucide-react';
import HomePage from '@/pages/HomePage';
import SekolahMitraPage from '@/pages/SekolahMitraPage';
import SmasBabulMaghfirahPage from '@/pages/sekolah/SmasBabulMaghfirahPage';
import SmaSwastaMaryamBintiIbrahimPage from '@/pages/sekolah/SmaSwastaMaryamBintiIbrahimPage';
import SmaNegeri08BandaAcehPage from '@/pages/sekolah/SmaNegeri08BandaAcehPage';
import Smkn2BandaAcehPage from '@/pages/sekolah/Smkn2BandaAcehPage';
import MualamatSolidarityBoardingSchoolPage from '@/pages/sekolah/MualamatSolidarityBoardingSchoolPage';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const App = () => {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const navLinkClasses = "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700/50 transition-colors duration-200";
  const activeNavLinkClasses = "bg-indigo-600/80 text-white";


  const sekolahMitra = [
    { name: "SMAS Babul Maghfirah", path: "/sekolah/smas-babul-maghfirah", component: SmasBabulMaghfirahPage },
    { name: "SMA Swasta Maryam Binti Ibrahim", path: "/sekolah/sma-swasta-maryam-binti-ibrahim", component: SmaSwastaMaryamBintiIbrahimPage },
    { name: "SMA Neg. 08 Banda Aceh", path: "/sekolah/sma-negeri-08-banda-aceh", component: SmaNegeri08BandaAcehPage },
    { name: "SMKN 2 Banda Aceh", path: "/sekolah/smkn-2-banda-aceh", component: Smkn2BandaAcehPage },
    { name: "Mualamat Solidarity Boarding School", path: "/sekolah/mualamat-solidarity-boarding-school", component: MualamatSolidarityBoardingSchoolPage },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-100 flex flex-col">
      <header className="py-4 shadow-lg bg-slate-900/70 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <MonitorPlay className="h-8 w-8 text-indigo-400" />
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
              Sekolah Binaan UUI
            </span>
          </Link>
          <nav className="flex items-center space-x-2 md:space-x-4">
            <Link to="/" className={`${navLinkClasses} ${location.pathname === "/" ? activeNavLinkClasses : "text-gray-300"}`}>
              <Home className="h-5 w-5" />
              <span>Beranda</span>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`${navLinkClasses} ${location.pathname.startsWith("/sekolah") ? activeNavLinkClasses : "text-gray-300"}`}>
                  <SchoolIconLucide className="h-5 w-5" />
                  <span>Sekolah Mitra</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700 text-gray-200 w-64">
                <DropdownMenuItem asChild>
                  <Link to="/sekolah-mitra" className="w-full flex items-center space-x-2 px-3 py-2 hover:bg-slate-700/70 rounded-md">
                    <Briefcase className="h-5 w-5 text-indigo-400" />
                    <span>Semua Sekolah Mitra</span>
                  </Link>
                </DropdownMenuItem>
                {sekolahMitra.map((sekolah) => (
                  <DropdownMenuItem key={sekolah.path} asChild>
                    <Link to={sekolah.path} className="w-full flex items-center space-x-2 px-3 py-2 hover:bg-slate-700/70 rounded-md">
                       <SchoolIconLucide className="h-4 w-4 text-pink-400 mr-2" />
                      <span>{sekolah.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" className="text-indigo-400 border-indigo-400 hover:bg-indigo-500 hover:text-slate-900 transition-colors duration-300 text-sm px-3 py-1.5 md:px-4 md:py-2">
              <Users className="h-4 w-4 mr-0 md:mr-2"/> <span className="hidden md:inline">Hubungi Kami</span>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/sekolah-mitra" element={<SekolahMitraPage sekolahMitra={sekolahMitra} />} />
            {sekolahMitra.map((sekolah) => (
              <Route key={sekolah.path} path={sekolah.path} element={React.createElement(sekolah.component)} />
            ))}
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="py-8 bg-slate-900/70 backdrop-blur-md mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sekolah Binaan Universitas Ubudiyah Indonesia. Hak Cipta Dilindungi.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Didukung oleh Universitas Ubudiyah Indonesia, Banda Aceh.
          </p>
        </div>
      </footer>
      <Toaster />
    </div>
  );
};

export default App;
  