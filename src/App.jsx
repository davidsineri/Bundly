import React from 'react';

export default function App() {
  // GANTI NOMOR DI BAWAH INI DENGAN NOMOR WHATSAPP KAMU (Gunakan awalan 62)
  const waNumber = "628xxxxxxxxxx"; 
  const waLink = `https://wa.me/${waNumber}?text=Halo%20Bundly%2C%20saya%20tertarik%20pesan%20Feeding%20Set-nya`;

  return (
    <div className="bg-[#F9FBF9] min-h-screen font-sans text-slate-800">
      {/* Header / Navbar */}
      <nav className="p-5 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          {/* Logo Sederhana */}
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">B</div>
          <span className="text-xl font-bold tracking-tight text-emerald-800 uppercase">BUNDLY</span>
        </div>
        <a href={waLink} className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-emerald-700 transition-all">
          Chat Admin
        </a>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-16 text-center max-w-2xl mx-auto">
        <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          Premium Baby Gear
        </span>
        <h1 className="text-4xl font-extrabold mt-4 mb-6 leading-tight text-slate-900">
          Makan Lahap <span className="text-emerald-600">Tanpa Drama</span> Berantakan.
        </h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Satu set alat makan silikon food-grade dengan suction super kuat. Nempel di meja, anti-tumpah, dan sangat mudah dicuci.
        </p>
        <a href="#katalog" className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-200 hover:scale-105 transition-transform inline-block">
          Cek Koleksi Warna
        </a>
      </header>

      {/* Katalog Produk */}
      <section id="katalog" className="p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-3xl shadow-xl shadow-slate-100 border border-slate-50 group">
          <div className="bg-slate-100 aspect-square rounded-2xl mb-5 flex items-center justify-center overflow-hidden">
             {/* Kamu bisa ganti teks di bawah dengan <img src="URL_FOTO_SUPPLIER" /> nanti */}
             <p className="text-slate-400 italic text-sm p-4 text-center">
               (Masukkan foto estetik Silicon Feeding Set dari supplier di sini)
             </p>
          </div>
          <h3 className="text-xl font-bold mb-1">Silicon Feeding Set (4-in-1)</h3>
          <p className="text-slate-500 text-sm mb-4">Piring Suction + Mangkuk + Sendok + Bib</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-black text-emerald-700">Rp 89.000</span>
            <a href={waLink} className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold">
              Pesan Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400 text-xs mt-10">
        &copy; 2026 Bundly Official. Sahabat Bunda, Kebahagiaan Si Kecil.
      </footer>
    </div>
  );
}
