import React from 'react';
import { 
  ShieldCheck, 
  BarChart3, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Briefcase,
  Lock,
  Cpu,
  Globe
} from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";

// --- Simple helper components to make the code run ---
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-orange font-black text-xs uppercase tracking-[0.3em] mb-4">{children}</div>
);

const CTAButton = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-orange transition-all mt-6">
    {children} <ArrowRight size={18} />
  </a>
);

const TrustBadge = ({ icon: Icon, label, sublabel }: { icon: any, label: string, sublabel: string }) => (
  <div className="flex flex-col items-center p-4 text-center">
    <div className="text-orange mb-3">
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <span className="text-navy font-bold text-lg">{label}</span>
    <span className="text-slate-500 text-sm">{sublabel}</span>
  </div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100 text-slate-900">
      <Analytics />
      
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-navy font-black text-2xl tracking-tighter uppercase">
            SYREETA<span className="text-orange">.AI</span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-xs font-bold uppercase tracking-widest">
            <a href="#opportunity" className="hover:text-orange transition-colors">Opportunity</a>
            <a href="#approach" className="hover:text-orange transition-colors">Strategy</a>
            <a href="#about" className="hover:text-orange transition-colors">About</a>
            <button className="bg-navy text-white px-6 py-2 rounded-full hover:bg-orange transition-all font-bold">Inquire</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <Briefcase size={14} /> Global Procurement Authority
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-navy leading-[0.85] mb-8 tracking-tighter">
            CFO-Level Oversight.<br />
            <span className="text-orange">CPO-Level Agility.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed font-medium">
            Twenty-five years of Fortune 100 expertise and Prosci® change leadership, now available as your on-demand executive partner.
          </p>
          <div className="flex justify-center">
            <button className="bg-orange text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-orange/30 hover:scale-105 transition-all flex items-center gap-2">
              Start Your Assessment <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
          <TrustBadge icon={Award} label="25+ Years" sublabel="Fortune 100 Veteran" />
          <TrustBadge icon={ShieldCheck} label="Prosci®" sublabel="Certified Change Lead" />
          <TrustBadge icon={BarChart3} label="$10B+" sublabel="Managed Spend" />
          <TrustBadge icon={Cpu} label="AI Native" sublabel="Digital Workforce" />
        </div>
      </section>

      {/* Opportunity Section */}
      <section id="opportunity" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tighter">Unlock Systemic Efficiency</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Every enterprise has recoverable capital. Leaders who quantify it gain a permanent advantage.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "8–12%", title: "Recoverable Spend", source: "Gartner", url: "https://www.gartner.com" },
              { stat: "34%", title: "Data Accuracy", source: "Deloitte", url: "https://www.deloitte.com" },
              { stat: "$1.4T", title: "Integrity Gap", source: "KPMG", url: "https://www.kpmg.com" },
              { stat: "61%", title: "Behavioral ROI", source: "EY", url: "https://www.ey.com" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-4xl font-black text-orange mb-2">{item.stat}</div>
                <div className="text-navy font-bold text-xs uppercase tracking-widest mb-4">{item.title}</div>
                <a href={item.url} target="_blank" className="text-[10px] font-bold text-slate-400 uppercase">View {item.source} Study</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Forensic Procurement Authority</SectionLabel>
            <h2 className="text-5xl font-black text-navy mb-6 tracking-tighter">Decision-Ready Intelligence.</h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Syreeta.ai deploys a proprietary diagnostic engine calibrated on hundreds of millions of transactions.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-slate-700 font-semibold"><CheckCircle2 className="text-orange" /> Effortless integration — connect and scan.</li>
              <li className="flex items-center gap-3 text-slate-700 font-semibold"><CheckCircle2 className="text-orange" /> Works with SAP, Oracle, and Coupa.</li>
              <li className="flex items-center gap-3 text-slate-700 font-semibold text-orange"><Lock /> Zero-Cloud: Localized processing support.</li>
            </ul>
            <CTAButton href="#audit">Start the Diagnostic</CTAButton>
          </div>
          <div className="bg-navy rounded-3xl p-10 text-white shadow-2xl shadow-navy/20">
            <div className="flex justify-between mb-8">
              <span className="font-bold">Leakage Exposure Summary</span>
              <span className="text-xs bg-orange/20 text-orange px-3 py-1 rounded-full">LIVE ANALYSIS</span>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-center"><span>Misclassified Spend</span><span className="font-bold text-orange">$4.2M</span></div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-orange w-[72%]" /></div>
              <div className="flex justify-between items-center pt-6 border-t border-white/10">
                <div><div className="text-[10px] uppercase text-slate-400">Total Leakage</div><div className="text-4xl font-black">$10.0M</div></div>
                <div className="text-right"><div className="text-[10px] uppercase text-slate-400">Recovery</div><div className="text-2xl font-black text-orange">80–95%</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white aspect-square rounded-[3rem] shadow-inner flex items-center justify-center p-12">
             <div className="text-center">
                <div className="text-navy font-black text-5xl mb-2 italic">"One Executive."</div>
                <div className="text-orange font-black text-2xl uppercase tracking-[0.3em]">Infinite Scale.</div>
             </div>
          </div>
          <div>
            <h2 className="text-5xl font-black text-navy mb-8 tracking-tighter uppercase">About the Founder</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              I am a solo executive consultant. I don't maintain a bloated staff. When you hire me, you get direct access to 25 years of Fortune 100 leadership.
            </p>
            <div className="p-6 bg-navy text-white rounded-2xl flex items-center gap-4">
               <Lock className="text-orange" size={24} />
               <span className="text-sm font-bold">Security: All forensic work is processed on secure, local hardware.</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-100">
        <div className="text-navy font-black text-2xl mb-4 tracking-tighter uppercase">SYREETA<span className="text-orange">.AI</span></div>
        <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">© 2026 Syreeta AI LLC | Richmond, VA</div>
      </footer>
    </div>
  );
}
