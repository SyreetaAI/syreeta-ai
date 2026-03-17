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
  Cpu
} from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";

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
          <div className="text-navy font-black text-2xl tracking-tighter">
            SYREETA<span className="text-orange">.AI</span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            <a href="#opportunity" className="hover:text-orange transition-colors">Opportunity</a>
            <a href="#approach" className="hover:text-orange transition-colors">Strategy</a>
            <a href="#about" className="hover:text-orange transition-colors">About</a>
            <button className="bg-navy text-white px-6 py-2 rounded-full hover:bg-orange transition-all font-bold">
              Inquire
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden grid-bg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            <Briefcase size={14} /> Global Procurement Authority
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-navy leading-[0.85] mb-8 tracking-tighter">
            C-Suite Strategy.<br />
            <span className="text-orange">For the Masses.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
            Twenty-five years of Fortune 500 procurement expertise and Prosci® change leadership, now available as your on-demand executive partner.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-orange text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-orange/30 hover:scale-105 transition-all flex items-center justify-center gap-2">
              Start Your Audit <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
          <TrustBadge icon={Award} label="25+ Years" sublabel="Sourcing Excellence" />
          <TrustBadge icon={ShieldCheck} label="Prosci®" sublabel="Certified Change Lead" />
          <TrustBadge icon={BarChart3} label="$10B+" sublabel="Managed Spend" />
          <TrustBadge icon={Cpu} label="AI Native" sublabel="Digital Workforce" />
        </div>
      </section>

      {/* Opportunity - Exact References */}
      <section id="opportunity" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-navy mb-16 text-center">The Risk of Inaction</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "80%",
                text: "of organizations face significant AI integration hurdles due to poor data sourcing.",
                source: "Gartner 2024 Strategic Planning",
                url: "https://www.gartner.com"
              },
              {
                stat: "$4.45M",
                text: "Average cost of a data breach in 2024, often triggered by unvetted third-party tools.",
                source: "IBM Cost of a Data Breach",
                url: "https://www.ibm.com/reports/data-breach"
              },
              {
                stat: "30%",
                text: "Productivity gap between AI-enabled firms and legacy competitors by 2026.",
                source: "McKinsey Global Institute",
                url: "https://www.mckinsey.com/mgi"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200">
                <div className="text-4xl font-black text-orange mb-4">{item.stat}</div>
                <p className="text-slate-600 mb-6 font-medium">{item.text}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-navy hover:text-orange uppercase tracking-widest flex items-center gap-1">
                  Reference: {item.source} <ArrowRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy - Clean and Succinct */}
      <section id="approach" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black text-navy mb-8 tracking-tighter">The Strategy</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                I leverage a unique blend of human institutional knowledge and autonomous AI agents to audit, optimize, and secure your procurement pipeline.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-orange"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4 className="font-bold text-navy">Localized Processing</h4>
                    <p className="text-slate-500">I perform all forensic work outside the cloud, either on secure local hardware or directly within your environment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-orange"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4 className="font-bold text-navy">Prosci® Transitioning</h4>
                    <p className="text-slate-500">I lead the people through the change to ensure 100% adoption and long-term success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-navy rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">Verified Outcomes</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-3xl font-black text-orange">$10B+</div>
                  <div className="text-slate-400">Directly managed spend for Fortune 500 institutions.</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-orange">20-30%</div>
                  <div className="text-slate-400">Typical efficiency gains in procurement cycles post-audit.</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-orange">Zero-Leakage</div>
                  <div className="text-slate-400">Contract compliance standard for all forensic engagements.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic - Artifact Focused */}
      <section className="py-24 bg-navy text-white rounded-[4rem] mx-4 mb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-6 tracking-tighter">The Executive Diagnostic</h2>
          <p className="text-slate-400 text-lg mb-12">
            A high-level scan of your risk profile. Detailed modules and the forensic roadmap are provided as a custom artifact following our discovery call.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10 text-left">
              <span className="font-bold">AI Sourcing Forensic Audit</span>
              <span className="text-orange font-mono text-sm uppercase tracking-widest">Available</span>
            </div>
            <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10 text-left">
              <span className="font-bold">Contract Integrity Analysis</span>
              <span className="text-orange font-mono text-sm uppercase tracking-widest">Available</span>
            </div>
            <button className="w-full bg-orange py-6 rounded-2xl font-black text-2xl hover:bg-white hover:text-navy transition-all mt-8">
              REQUEST ACCESS
            </button>
          </div>
        </div>
      </section>

      {/* About - Honest Solo Branding */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-slate-100 aspect-square rounded-3xl flex items-center justify-center p-12">
             <div className="text-center">
                <div className="text-navy font-black text-4xl mb-2 italic">"One Executive."</div>
                <div className="text-orange font-bold text-xl uppercase tracking-widest">Infinite Scale.</div>
             </div>
          </div>
          <div>
            <h2 className="text-4xl font-black text-navy mb-6">About Me</h2>
            <p className="text-lg text-slate-600 mb-6">
              I am a solo executive consultant. I don't maintain a bloated staff or bill you for junior associates. When you hire me, you get 25 years of Fortune 500 experience directly.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              To deliver at scale, I deploy a custom-built digital workforce: autonomous AI agents with specialized personalities that handle data-heavy forensic tasks.
            </p>
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
               <Lock className="text-orange" size={24} />
               <span className="text-sm font-bold text-navy">Work is processed locally on secure hardware.</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center border-t border-slate-100">
        <div className="text-navy font-black text-2xl mb-4">SYREETA<span className="text-orange">.AI</span></div>
        <div className="text-slate-400 text-sm">© 2026 Syreeta AI LLC. All rights reserved.</div>
      </footer>
    </div>
  );
}
