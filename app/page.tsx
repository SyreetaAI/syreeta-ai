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
            CFO-Level Oversight. CPO-Level Agility.<br />
            <span className="text-orange">Accessible to All.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
            Twenty-five years of Fortune 100 procurement expertise and Prosci® change leadership, now available as your on-demand executive partner.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-orange text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-orange/30 hover:scale-105 transition-all flex items-center justify-center gap-2">
              Start Your Assessement <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
          <TrustBadge icon={Award} label="25+ Years" sublabel="Strategic Procurement Excellence" />
          <TrustBadge icon={ShieldCheck} label="Prosci®" sublabel="Certified Change Practitioner" />
          <TrustBadge icon={BarChart3} label="$10B+" sublabel="Managed Spend Portfolios" />
          <TrustBadge icon={Cpu} label="AI Native" sublabel="Intelligent Automation" />
        </div>
      </section>

    {/* The Opportunity: Systemic Efficiency & 2026 Forecast */}
<section id="opportunity" className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 tracking-tighter uppercase">
        Unlock Systemic Efficiency
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
        Every enterprise has recoverable capital within reach. My 2026 framework targets the gap between legacy procurement and agentic AI.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {[
        {
          stat: "8–12%",
          title: "Recoverable Spend",
          desc: "Annual addressable spend recoverable through classification and payment integrity.",
          source: "Gartner Procurement Research",
          url: "https://www.gartner.com/en/procurement"
        },
        {
          stat: "34%",
          title: "Data Reclassification",
          desc: "Spend data eligible for coding accuracy to reveal true cost structures.",
          source: "Deloitte Global CPO Survey",
          url: "https://www2.deloitte.com/us/en/pages/operations/articles/cpo-survey.html"
        },
        {
          stat: "$1.4T",
          title: "Integrity Gap",
          desc: "Confirmed recovery opportunities in global payments overlooked by standard controls.",
          source: "KPMG Operations Advisory",
          url: "https://advisory.kpmg.us/services/operations-consulting/procurement-advisory.html"
        },
        {
          stat: "61%",
          title: "Behavioral ROI",
          desc: "Enterprises seeing direct leverage from behavior mapping and contract compliance.",
          source: "EY Supply Chain Excellence",
          url: "https://www.ey.com/en_gl/supply-chain"
        }
      ].map((item, i) => (
        <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
          <div>
            <div className="text-4xl font-black text-orange mb-2">{item.stat}</div>
            <h4 className="text-navy font-bold mb-4 uppercase text-[10px] tracking-[0.2em]">{item.title}</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {item.desc}
            </p>
          </div>
          <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] font-black text-navy/40 hover:text-orange transition-colors uppercase tracking-widest flex items-center gap-1 mt-auto"
          >
            VIEW STUDY <ArrowRight size={10} />
          </a>
        </div>
      ))}
    </div>

    {/* 2026 Specific Forecast Block */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="p-10 bg-navy rounded-[2.5rem] text-white relative overflow-hidden group">
        <div className="relative z-10">
          <div className="text-orange font-black text-xs uppercase tracking-[0.3em] mb-4">2026 Agentic Outlook</div>
          <div className="text-5xl font-black mb-6">75%</div>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Of procurement leaders will deploy <strong>Autonomous AI Agents</strong> for tactical sourcing and real-time risk mitigation by end-of-year 2026.
          </p>
          <a href="https://www.gartner.com/en/newsroom" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-orange hover:text-white transition-colors uppercase tracking-widest">
            Reference: Gartner Strategic Roadmap <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden group">
        <div className="relative z-10">
          <div className="text-orange font-black text-xs uppercase tracking-[0.3em] mb-4">2025 Data Sovereignty</div>
          <div className="text-5xl font-black mb-6">70%</div>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Of CFOs identify <strong>Cloud Security and Data Sovereignty</strong> as the #1 barrier to scaling enterprise AI in 2025.
          </p>
          <a href="https://www.pwc.com/us/en/library/cfo-pulse-survey.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-orange hover:text-white transition-colors uppercase tracking-widest">
            Reference: PwC Global CFO Pulse <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      // ─── Approach Section ─────────────────────────────────────────────────────────

function ApproachSection() {
  return (
    <div id="approach" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <FadeIn>
              <SectionLabel>Forensic Procurement Authority</SectionLabel>
              <h2 className="font-black text-3xl md:text-5xl text-navy leading-tight mb-6 tracking-tight text-balance">
                Decision-Ready Intelligence.{" "}
                <span className="text-orange">Value-Driven Governance.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Syreeta.ai deploys a proprietary multi-layer diagnostic engine calibrated
                on hundreds of millions of transactions. Pattern recognition is precise,
                findings are specific, and the prioritized remediation plan is actionable on day one.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Effortless integration — connect your data, get results",
                  "Works with SAP, Oracle, Coupa, Ariba, and flat-file exports",
                  "Findings Executive Readout & debrief from a Senior Procurement Advisor",
  </p>
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
               <Lock className="text-orange" size={24} />
               <span className="text-sm font-bold text-navy">We support air-gapped or localized environments.</span>
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-base">
                    <CheckCircle
                      size={20}
                      className="text-orange mt-0.5 flex-shrink-0"
                      fill="currentColor"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <CTAButton href="#audit">
                Start the Diagnostic
              </CTAButton>
            </FadeIn>
          </div>

          {/* Right: visual card */}
          <FadeIn delay={200}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-navy rounded-3xl p-8 md:p-10 shadow-2xl shadow-navy/30">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-white font-bold text-lg">Leakage Exposure Summary</span>
                  <span className="bg-orange/20 text-orange text-xs font-bold px-3 py-1 rounded-full border border-orange/30">
                    LIVE ANALYSIS
                  </span>
                </div>

                {/* Metrics */}
                {[
                  { label: "Misclassified Spend", value: "$4.2M", pct: 72, color: "bg-orange" },
                  { label: "Duplicate Invoices", value: "$890K", pct: 45, color: "bg-orange-400" },
                  { label: "Maverick Purchases", value: "$3.1M", pct: 60, color: "bg-orange-300" },
                  { label: "Contract Leakage", value: "$1.8M", pct: 35, color: "bg-orange-200" },
                ].map(({ label, value, pct, color }) => (
                  <div key={label} className="mb-5 last:mb-0">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-300 font-medium">{label}</span>
                      <span className="text-white font-bold">{value}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${color} rounded-full transition-all duration-1000`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">
                      Total Identified Leakage
                    </div>
                    <div className="text-4xl font-black text-white">
                      $10.0M
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">
                      Recovery Potential
                    </div>
                    <div className="text-2xl font-black text-orange">
                      80–95%
                    </div>
                  </div>
                </div>
              </div>
 
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
              I bridge the gap between high-level executive strategy and autonomous AI execution. By acting as an independent partner, you gain direct access to my 25 years of Fortune 100 expertise.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              To deliver at scale, I pair human judgment with autonomous AI agents to offer you unparalleled speed, accuracy, and efficiency.
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
