import React from 'react';

export default function App() {
  const waNumber = "6285156852637"; 
  const waLink = `https://wa.me/${waNumber}?text=Halo%20Bundly%2C%20saya%20mau%20order%20Silicon%20Feeding%20Set`;

  return (
    <div className="bg-[#F9FBF9] min-h-screen font-sans text-slate-800">
      <nav className="p-5 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">B</div>
          <span className="text-xl font-bold tracking-tight text-emerald-800">BUNDLY</span>
        </div>
        <a href={waLink} className="bg-emerald-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase">Chat Admin</a>
      </nav>

      <header className="px-6 py-16 text-center max-w-2xl mx-auto">
        <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Premium Baby Gear</span>
        <h1 className="text-3xl font-extrabold mt-4 mb-6 leading-tight text-slate-900">Makan Lahap <span className="text-emerald-600">Tanpa Drama</span> Berantakan.</h1>
        <p className="text-slate-500 text-sm mb-8">Piring silikon suction super kuat. Nempel di meja, anti-tumpah, dan aman (BPA Free).</p>
        <a href="#katalog" className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold text-md shadow-lg shadow-orange-100 inline-block transition-transform hover:scale-105">Cek Katalog</a>
      </header>

      <section id="katalog" className="p-6 max-w-4xl mx-auto">
        <div className="bg-white p-5 rounded-3xl shadow-xl shadow-slate-100 border border-slate-50">
          <div className="bg-slate-100 aspect-square rounded-2xl mb-5 flex items-center justify-center text-slate-400 italic text-xs text-center p-4">
            [Tempel URL Foto Supplier Di Sini]
          </div>
          <h3 className="text-lg font-bold">Silicon Feeding Set (4-in-1)</h3>
          <p className="text-slate-400 text-xs mb-4">Piring + Mangkuk + Sendok + Bib</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-black text-emerald-700">Rp 89.000</span>
            <a href={waLink} className="bg-slate-900 text-white px-5 py-2 rounded-lg text-xs font-bold">Beli Sekarang</a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-[10px]">
        &copy; 2026 Bundly Official. Sahabat Bunda, Kebahagiaan Si Kecil.
      </footer>
    </div>
  );
}
