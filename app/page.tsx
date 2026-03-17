import React from 'react';
import { Shield, Zap, Cpu, BarChart3, Search, Lock, ArrowRight, BrainCircuit } from 'lucide-react';

export default function Page() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-orange-100">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-xl z-50">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2 text-[#001F3F]">
          <div className="w-8 h-8 bg-[#001F3F] rounded-lg flex items-center justify-center">
            <span className="text-white text-xs">S</span>
          </div>
          SYREETA<span className="text-orange-600">.AI</span>
        </div>
        <div className="hidden md:flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
          <a href="#about" className="hover:text-orange-600 transition-colors">Strategy</a>
          <a href="#services" className="hover:text-orange-600 transition-colors">Diagnostics</a>
          <a href="#outcomes" className="hover:text-orange-600 transition-colors">Outcomes</a>
        </div>
        <button className="bg-orange-600 hover:bg-[#001F3F] text-white text-[10px] px-4 py-2 rounded uppercase font-bold tracking-widest transition-all">
          Contact
        </button>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-orange-200 rounded-full text-[10px] text-orange-600 mb-8 uppercase tracking-widest bg-orange-50">
          <Zap size={12} /> Capital Integrity Advisory
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-[#001F3F]">
          THE INTEGRITY LAYER <br/>
          <span className="text-orange-600">FOR THE AGENTIC ECONOMY.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mb-12 leading-relaxed mx-auto md:mx-0">
          High-velocity diagnostic auditing for enterprise-scale portfolios. We solve complex capital leakage at <span className="text-[#001F3F] font-bold">82nd percentile processing speed.</span>
        </p>
        <button className="group flex items-center gap-3 bg-[#001F3F] text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all mx-auto md:mx-0">
          Request a Diagnostic Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-t border-slate-100 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-orange-600 font-bold mb-4">The OS</h2>
            <h3 className="text-3xl font-bold mb-6 tracking-tight text-[#001F3F]">Expertise Powered by Velocity.</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              With over 25 years of global procurement experience, I utilize a forensic operating system that identifies structural logic failures in spend before they manifest as financial loss.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl text-center shadow-sm">
              <div className="text-3xl font-bold text-[#001F3F] mb-2">25+</div>
              <div className="text-[10px] uppercase text-slate-500 tracking-widest">Years Experience</div>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl text-center shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">82%</div>
              <div className="text-[10px] uppercase text-slate-500 tracking-widest">Processing Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-4">
          SYREETA AI LLC | EIN 41-4761481 | MOSELEY, VA
        </p>
        <div className="text-orange-600 font-bold text-xs">EST. 2026</div>
      </footer>
    </div>
  );
}
