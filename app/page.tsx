import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  BarChart3, 
  Search, 
  Zap, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Award, 
  Briefcase 
} from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";

// --- Components ---

const TrustBadge = ({ icon: Icon, label, sublabel }: { icon: any, label: string, sublabel: string }) => (
  <div className="flex flex-col items-center p-4 text-center">
    <div className="bg-orange-100 p-3 rounded-full mb-3 text-orange">
      <Icon size={24} />
    </div>
    <span className="text-navy font-bold text-lg">{label}</span>
    <span className="text-slate-500 text-sm">{sublabel}</span>
  </div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100">
      <Analytics />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-navy font-black text-2xl tracking-tighter">
            SYREETA<span className="text-orange">.AI</span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-navy/70">
            <a href="#approach" className="hover:text-orange transition-colors">The Pivot</a>
            <a href="#diagnostic" className="hover:text-orange transition-colors">Diagnostic</a>
            <a href="#about" className="hover:text-orange transition-colors">Experience</a>
            <button className="bg-navy text-white px-5 py-2.5 rounded-full hover:bg-orange transition-all">
              Book the C-Suite
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden grid-bg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
            <Award size={14} /> 25+ Years of Fortune 500 Expertise
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-navy leading-[0.9] mb-8 tracking-tight">
            C-Suite Strategy.<br />
            <span className="text-orange">Accessible to Everyone.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
            I spent two decades in the corner offices of the world's largest firms. Now, I'm bringing those billion-dollar sourcing and AI frameworks to you.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-orange text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange/20 hover:scale-105 transition-all flex items-center justify-center gap-2">
              Get Your Executive Audit <ArrowRight size={20} />
            </button>
            <button className="bg-white border-2 border-navy text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* The "Trust Bar" */}
      <section className="border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <TrustBadge icon={Briefcase} label="25+ Years" sublabel="Sourcing & Procurement" />
          <TrustBadge icon={ShieldCheck} label="Prosci®" sublabel="Certified Change Lead" />
          <TrustBadge icon={BarChart3} label="$10B+" sublabel="Managed Spend" />
          <TrustBadge icon={Users} label="C-Suite Ally" sublabel="Fortune 500 Veteran" />
        </div>
      </section>

      {/* The Pivot Section */}
      <section id="approach" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-navy mb-6 tracking-tight">
              Why the "Masses" need <br /><span className="text-orange">C-Suite Intelligence.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              For years, elite procurement strategy was gated behind massive consulting fees. In the AI era, that gap is a liability. I’ve stepped out of the corporate world to democratize the frameworks that win.
            </p>
            <ul className="space-y-4">
              {[
                "Fortune 500 Forensic Audits for Mid-Market firms.",
                "AI Change Management (Prosci® Certified).",
                "Supply Chain integrity that scales with your growth."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-navy font-semibold">
                  <CheckCircle2 className="text-orange" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-navy rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Search size={200} />
            </div>
            <h3 className="text-2xl font-bold mb-4">The "Syreeta" Advantage</h3>
            <p className="text-slate-300 mb-6 italic">
              "I don't just find gaps; I build bridges. My goal is to make your business run with the same precision I demanded at Capital One."
            </p>
            <div className="h-1 w-20 bg-orange mb-6"></div>
            <div className="text-sm font-medium uppercase tracking-widest text-orange">Founder & CEO</div>
          </div>
        </div>
      </section>

      {/* Capital Diagnostic Tool (Remains as a Product for all) */}
      <section id="diagnostic" className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">The Executive Diagnostic</h2>
          <p className="text-slate-400 mb-12">The same forensic tool used at the highest levels, now available for your audit.</p>
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs font-mono text-slate-500">SYSTEM READY: V1.0.4</div>
            </div>
            <div className="space-y-6 text-left">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between">
                <span>AI Sourcing Forensic Audit</span>
                <span className="text-orange text-sm font-bold">READY</span>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between">
                <span>Contract Integrity Scan</span>
                <span className="text-orange text-sm font-bold">READY</span>
              </div>
              <button className="w-full bg-orange text-white py-4 rounded-xl font-black text-xl hover:scale-[1.02] transition-all">
                RUN DIAGNOSTIC NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400 text-sm">
        <div className="mb-6 text-navy font-bold text-xl tracking-tighter">
          SYREETA<span className="text-orange">.AI</span>
        </div>
        © 2026 Syreeta AI LLC. All rights reserved. <br />
        Built with C-Suite Precision.
      </footer>
    </div>
  );
}
