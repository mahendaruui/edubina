// Update all school pages with bright theme changes

const schoolPages = [
  'SmaSwastaMaryamBintiIbrahimPage.jsx',
  'Smkn2BandaAcehPage.jsx',
  'MualamatSolidarityBoardingSchoolPage.jsx'
];

// For each school page, update:
// 1. Button styles: text-indigo-400 → text-indigo-600
// 2. Background: bg-slate-800/70 → bg-white
// 3. Text colors: text-gray-300/400 → text-gray-700/600
// 4. Add border-indigo-100 to cards
// 5. Change shadow-xl → shadow-md
// 6. Change hover effects
//
// Use these replacements as needed:
//
// Button:
// from: className="mb-8 group text-indigo-400 border-indigo-400 hover:bg-indigo-500 hover:text-slate-900
// to:   className="mb-8 group text-indigo-600 border-indigo-500 hover:bg-indigo-50 hover:text-indigo-800
//
// Cards:
// from: className="bg-slate-800/70 p-6 rounded-xl shadow-lg hover:shadow-color/20 ... glassmorphism-card"
// to:   className="bg-white p-6 rounded-xl shadow-md hover:shadow-md border border-indigo-100 ..."
//
// Text:
// from: text-gray-300/400
// to:   text-gray-700/600
//
// Headings:
// from: text-color-300/400
// to:   text-color-600
