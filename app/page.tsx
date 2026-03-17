// app/page.tsx
// Syreeta.ai — Capital Leakage Diagnostic Landing Page
// Target: CFOs & Procurement VPs | Stack: Next.js 14 App Router + Tailwind + Lucide

"use client";

import { useState, useEffect, useRef } from "react";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  ChevronDown,
  Clock,
  FileSearch,
  Globe,
  Lock,
  Mail,
  MapPin,
  Phone,
  Shield,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  X,
  Menu,
  DollarSign,
  Target,
  Layers,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  annualSpend: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "Approach", href: "#approach" },
  { label: "Diagnostic", href: "#diagnostic" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "About", href: "#about" },
];

const SPEND_OPTIONS = [
 "Under $500k",
  "$500k – $1M",
  "$1M – $2M",
  "$2.5M – $5M",
  "$5M+",
];

// ─── Utility ──────────────────────────────────────────────────────────────────

function useIntersectionObserver(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Animated fade-in wrapper */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Section wrapper with consistent padding */
function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}

/** Navy pill label above section headings */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-navy/5 text-navy border border-navy/20 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
      {children}
    </span>
  );
}

/** Primary CTA button */
function CTAButton({
  children,
  href = "#audit",
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center gap-2 bg-orange text-white font-bold px-8 py-4 rounded-lg text-base tracking-wide shadow-lg shadow-orange/25 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange/30 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange/40 ${className}`}
    >
      {children}
      <ArrowRight
        size={18}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </a>
  );
}

/** Secondary ghost button */
function GhostButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-8 py-4 rounded-lg text-base tracking-wide hover:bg-navy hover:text-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-navy/30 ${className}`}
    >
      {children}
    </a>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group" aria-label="Syreeta AI home">
          <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center shadow-sm">
            <Zap size={18} className="text-orange" fill="currentColor" />
          </div>
          <span className="font-black text-navy text-xl tracking-tight">
            Syreeta<span className="text-orange">.ai</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-600 hover:text-navy font-medium text-sm tracking-wide transition-colors duration-150 focus:outline-none focus:text-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#audit"
            className="bg-orange text-white font-bold px-6 py-2.5 rounded-lg text-sm tracking-wide shadow-lg shadow-orange/25 hover:bg-orange-600 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange/40"
          >
            Request Audit
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-navy hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 shadow-lg"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-navy font-medium py-2 text-base border-b border-gray-50 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#audit"
            className="block bg-orange text-white font-bold px-6 py-3 rounded-lg text-center text-sm tracking-wide mt-4"
            onClick={() => setMobileOpen(false)}
          >
            {"Request Audit →"}
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/30 pt-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Decorative blobs */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 text-orange-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8 animate-pulse">
            <span className="w-2 h-2 bg-orange rounded-full" />
            Capital Leakage Diagnostic — Now Available
          </div>

          {/* Headline */}
          <h1 className="font-black text-4xl md:text-6xl lg:text-7xl text-navy leading-tight tracking-tight mb-6 text-balance">
            Quantify{" "}
            <span className="text-orange relative">
              Hidden Spend
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 10 C 80 2, 220 2, 298 10"
                  stroke="#F97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            <br className="hidden md:block" />
            in One Briefing.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-gray-600 font-light leading-relaxed mb-4 max-w-2xl">
            Enterprise CFOs recover{" "}
            <strong className="text-navy font-bold">8–12% of addressable spend</strong>{" "}
            through forensic classification, payment integrity audits, and buying behavior optimization.
          </p>
          <p className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl">
            {"Our Capital Leakage Diagnostic delivers boardroom-ready findings with named vendors, dollar amounts, and a prioritized recovery roadmap."}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <CTAButton href="#audit" className="text-base">
              Request Your Free Diagnostic
            </CTAButton>
            <GhostButton href="#solution">
              See How It Works
            </GhostButton>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            {[
              { icon: Shield, label: "Forensic Procurement Authority" },
              { icon: Lock, label: "Enterprise-Grade Security" },
              { icon: Clock, label: "Findings in 72 Hours" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                <Icon size={16} className="text-navy" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#opportunity"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 text-xs hover:text-navy transition-colors animate-bounce"
        aria-label="Scroll to learn more"
      >
        <span className="tracking-widest uppercase text-xs">Scroll</span>
        <ChevronDown size={20} />
      </a>
    </div>
  );
}

// ─── Opportunity Section ──────────────────────────────────────────────────────────

function OpportunitySection() {
  const opportunities = [
    {
      icon: TrendingUp,
      stat: "8–12%",
      label: "of addressable spend recoverable annually",
      detail:
        "Systemic efficiency gains through classification accuracy, payment integrity, and buying behavior optimization.",
      source: "Gartner Procurement Research, 2024",
    },
    {
      icon: FileSearch,
      stat: "34%",
      label: "of spend data eligible for reclassification",
      detail:
        "Enhanced GL coding accuracy reveals true cost structure and strengthens category management insights.",
      source: "Deloitte Global CPO Survey, 2024",
    },
    {
      icon: DollarSign,
      stat: "$1.4T",
      label: "in global payment integrity opportunities",
      detail:
        "Forensic invoice analysis surfaces confirmed recovery opportunities your current controls overlook.",
      source: "KPMG Global Payment Integrity Study",
    },
    {
      icon: Target,
      stat: "61%",
      label: "of enterprises benefit from buying behavior mapping",
      detail:
        "Comprehensive visibility into purchasing patterns unlocks negotiation leverage and contract compliance.",
      source: "EY Procurement Excellence Report",
    },
  ];

  return (
    <div id="opportunity" className="bg-navy relative overflow-hidden py-20 md:py-28">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block bg-white/10 text-orange text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange/30 mb-4">
            The Capital Integrity Opportunity
          </span>
          <h2 className="font-black text-3xl md:text-5xl text-white leading-tight mb-4 text-balance">
            Unlock{" "}
            <span className="text-orange">Systemic Efficiency</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Every enterprise has recoverable capital within reach.
            Leaders who quantify it gain a permanent competitive advantage.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map(({ icon: Icon, stat, label, detail, source }, i) => (
            <FadeIn key={stat} delay={i * 100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange/30 transition-all duration-300 group h-full flex flex-col">
                <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange/30 transition-colors">
                  <Icon size={22} className="text-orange" />
                </div>
                <div className="text-4xl font-black text-white mb-1 tracking-tight">
                  {stat}
                </div>
                <div className="text-orange text-sm font-semibold mb-3 leading-snug">
                  {label}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{detail}</p>
                <p className="text-gray-500 text-xs mt-3 italic">{source}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400} className="mt-14 text-center">
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Your ERP captures transactions. Your BI tools visualize history.
            <strong className="text-white font-bold">
              {" "}
              Capital integrity requires forensic diagnostic capability.
            </strong>{" "}
            That is our singular focus.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}

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
                Capital Integrity Intelligence.{" "}
                <span className="text-orange">Boardroom-Ready ROI.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Syreeta.ai deploys a proprietary multi-layer diagnostic engine calibrated
                on hundreds of millions of transactions. Pattern recognition is precise,
                findings are specific, and your recovery roadmap is actionable on day one.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {"We deliver"}{" "}
                <strong className="text-navy">your specific capital exposure</strong> — named
                vendors, invoice numbers, category breakdowns — with a prioritized
                remediation plan your team can execute immediately.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "No lengthy implementations — connect your data, get results",
                  "Works with SAP, Oracle, Coupa, Ariba, and flat-file exports",
                  "Findings delivered as a boardroom-ready executive report",
                  "Paired with a live debrief from a Senior Procurement Advisor",
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

              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 bg-white border border-orange/20 rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange/10 rounded-xl flex items-center justify-center">
                  <Zap size={18} className="text-orange" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Analysis Complete</div>
                  <div className="text-navy font-black text-sm">72-Hour Turnaround</div>
                </div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -bottom-5 -left-5 bg-white border border-gray-100 rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
                <Shield size={18} className="text-navy" />
                <div>
                  <div className="text-xs text-gray-400 font-medium">Data Protection</div>
                  <div className="text-navy font-black text-sm">Enterprise-Grade</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

// ─── Diagnostic Section ───────────────────────────────────────────────────────

function DiagnosticSection() {
  const diagnosticLayers = [
    {
      icon: Layers,
      layer: "The Visibility Layer",
      title: "Spend Classification",
      description:
        "Our NLP models re-classify every line item in your spend cube against a standardized taxonomy. We surface reclassification opportunities that enhance category visibility and budget accuracy.",
      bullets: [
        "GL coding accuracy analysis",
        "Category hierarchy validation",
        "Vendor consolidation opportunities",
      ],
    },
    {
      icon: DollarSign,
      layer: "The Recovery Layer",
      title: "Capital Leakage Report",
      description:
        "A comprehensive capital exposure report quantifying every recovery vector — with dollar amounts, responsible cost centers, and a ranked remediation roadmap.",
      bullets: [
        "Dollar-value exposure by category",
        "Cost center attribution",
        "12-month projected ROI",
      ],
    },
    {
      icon: Target,
      layer: "The Compliance Layer",
      title: "Buying Behavior Spend Map",
      description:
        "Visualize purchasing patterns across your organization. Understand exactly which departments are buying outside preferred channels — and from which suppliers.",
      bullets: [
        "Contract compliance visibility",
        "Department-level behavioral mapping",
        "Preferred supplier optimization",
      ],
    },
    {
      icon: FileSearch,
      layer: "The 'Easy Win'",
      title: "Protocol Integrity Audit",
      description:
        "Forensic analysis cross-references invoices across vendor names, invoice numbers, amounts, dates, and payment terms to surface confirmed and probable recovery opportunities.",
      bullets: [
        "Fuzzy-match vendor reconciliation",
        "Invoice number normalization",
        "Confirmed vs. probable recoveries",
      ],
    },
  ];

  return (
    <div id="diagnostic" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-16">
          <SectionLabel>The Diagnostic Framework</SectionLabel>
          <h2 className="font-black text-3xl md:text-5xl text-navy leading-tight mb-4 tracking-tight text-balance">
            Four Layers. One{" "}
            <span className="text-orange">Definitive Report.</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-light">
            The Capital Leakage Diagnostic deploys four purpose-built audit
            layers — each designed to surface a distinct class of capital exposure.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {diagnosticLayers.map(({ icon: Icon, layer, title, description, bullets }, i) => (
            <FadeIn key={layer} delay={i * 100}>
              <div className="bg-white rounded-2xl border border-gray-200 p-7 md:p-8 hover:border-orange/30 hover:shadow-lg hover:shadow-orange/5 transition-all duration-300 group h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange transition-colors duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-orange text-xs font-black tracking-widest uppercase mb-0.5">
                      {layer}
                    </div>
                    <h3 className="font-black text-navy text-xl leading-snug tracking-tight">
                      {title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1">
                  {description}
                </p>

                <ul className="space-y-2.5 border-t border-gray-100 pt-5">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-orange rounded-full flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Process timeline */}
        <FadeIn delay={400} className="mt-16">
          <div className="bg-navy rounded-3xl p-8 md:p-12">
            <h3 className="font-black text-white text-2xl md:text-3xl text-center mb-10 tracking-tight text-balance">
              From Data Upload to Boardroom Brief:{" "}
              <span className="text-orange">72 Hours.</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
              {[
                { step: "1", title: "Secure Data Transfer", desc: "Upload spend extract via encrypted portal. We accept SAP, Oracle, Coupa, Ariba, CSV." },
                { step: "2", title: "AI Diagnostic Engine", desc: "Four-module analysis runs simultaneously against your full transaction history." },
                { step: "3", title: "Advisor Review", desc: "Senior Procurement Advisor validates findings and annotates recovery priorities." },
                { step: "4", title: "Executive Delivery", desc: "Receive your boardroom-ready report plus a live 60-minute debrief session." },
              ].map(({ step, title, desc }, i) => (
                <div key={step} className="relative flex flex-col items-center text-center px-4 md:px-6 py-4">
                  {/* Connector line */}
                  {i < 3 && (
                    <div className="hidden md:block absolute top-10 left-[calc(50%+2.5rem)] right-[-50%] h-px bg-orange/30" aria-hidden="true" />
                  )}
                  {/* Step circle */}
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-black text-lg mb-4 relative z-10 shadow-lg shadow-orange/30">
                    {step}
                  </div>
                  <h4 className="text-white font-bold text-base mb-2">{title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

// ─── Outcomes Section ──────────────────────────────────────────────────────────

function OutcomesSection() {
  const metrics = [
    {
      metric: "11.3%",
      label: "Average Recovery Rate",
      context: "Consistent with Gartner and Big 4 procurement benchmarks",
      icon: BarChart3,
    },
    {
      metric: "72 hrs",
      label: "Time to Findings",
      context: "From data upload to executive-ready diagnostic report",
      icon: Clock,
    },
    {
      metric: "94%",
      label: "Classification Accuracy",
      context: "Across spend classification and payment integrity layers",
      icon: Target,
    },
    {
      metric: "40–120x",
      label: "Typical ROI",
      context: "Diagnostic investment to verified recovery ratio",
      icon: TrendingUp,
    },
  ];

  const outcomes = [
    {
      title: "Velocity Transformation",
      description:
        "Re-engineered the sourcing lifecycle for a global enterprise, achieving a 50% reduction in cycle time and restoring organizational agility.",
      icon: Zap,
    },
    {
      title: "Cognitive Spend Clarity",
      description:
        "Deployed a high-fidelity visibility layer across a fragmented global portfolio to identify systemic cost-avoidance opportunities.",
      icon: Layers,
    },
    {
      title: "Precision Benchmarking",
      description:
        "Aligned category management with top-of-house financial metrics to capture 18.4% efficiency gains in verified savings.",
      icon: Target,
    },
  ];

  return (
    <div id="outcomes" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Metrics */}
        <FadeIn className="text-center mb-16">
          <SectionLabel>Verified Outcomes</SectionLabel>
          <h2 className="font-black text-3xl md:text-5xl text-navy leading-tight tracking-tight text-balance">
            Capital Integrity.{" "}
            <span className="text-orange">Demonstrated ROI.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {metrics.map(({ metric, label, context, icon: Icon }, i) => (
            <FadeIn key={metric} delay={i * 100}>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:border-orange/30 hover:shadow-md transition-all duration-300 h-full flex flex-col items-center">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-orange" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-navy tracking-tight mb-1">
                  {metric}
                </div>
                <div className="text-orange font-bold text-sm uppercase tracking-widest mb-3">
                  {label}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{context}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Outcomes */}
        <FadeIn>
          <h3 className="font-black text-2xl md:text-3xl text-navy text-center mb-10 tracking-tight">
            Representative Client Outcomes
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map(({ title, description, icon: Icon }, i) => (
            <FadeIn key={title} delay={i * 100}>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-orange/30 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-5">
                  <Icon size={24} className="text-orange" />
                </div>
                <h4 className="font-black text-navy text-xl mb-3 tracking-tight">
                  {title}
                </h4>
                <p className="text-gray-600 text-base leading-relaxed flex-1">
                  {description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────

function AboutSection() {
  const credentials = [
    { icon: Globe, text: "Serving enterprises across North America, Europe & APAC" },
    { icon: BarChart3, text: "Diagnostic engine calibrated on 500M+ transaction records" },
    { icon: Users, text: "Team of former Big 4 procurement and finance practitioners" },
    { icon: Shield, text: "Enterprise-grade security | GDPR & CCPA compliant" },
  ];

  return (
    <div id="about" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <FadeIn>
            <div className="relative">
              <div className="bg-navy rounded-3xl p-8 md:p-10 shadow-2xl shadow-navy/20">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-orange rounded-2xl flex items-center justify-center shadow-lg shadow-orange/30">
                    <Zap size={24} className="text-white" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-white font-black text-xl">Syreeta.ai</div>
                    <div className="text-gray-400 text-sm">Capital Intelligence Platform</div>
                  </div>
                </div>

                {/* Capability grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Spend Classification", icon: Layers },
                    { label: "Leakage Detection", icon: TrendingDown },
                    { label: "Maverick Mapping", icon: Target },
                    { label: "Duplicate Audit", icon: FileSearch },
                    { label: "Vendor Analytics", icon: Users },
                    { label: "Recovery Roadmap", icon: TrendingUp },
                  ].map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center gap-2.5 hover:bg-white/10 transition-colors"
                    >
                      <Icon size={16} className="text-orange flex-shrink-0" />
                      <span className="text-gray-300 text-xs font-semibold">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                    Platform Status
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white font-bold text-sm">
                      All Systems Operational
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-orange/10 rounded-3xl" aria-hidden="true" />
            </div>
          </FadeIn>

          {/* Right: copy */}
          <FadeIn delay={200}>
            <SectionLabel>About Syreeta AI LLC</SectionLabel>
            <h2 className="font-black text-3xl md:text-5xl text-navy leading-tight mb-6 tracking-tight text-balance">
              Forensic Procurement Authority.{" "}
              <span className="text-orange">Capital Integrity Focus.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Syreeta AI LLC delivers the capital integrity layer your existing
              systems were designed to complement — with zero disruption to your
              current workflows.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Our team combines deep Big 4 procurement expertise with enterprise-grade
              forensic capability to deliver diagnostics that are fast, precise, and
              immediately actionable. Your team stays focused while we surface the opportunities.
            </p>

            <ul className="space-y-4 mb-10">
              {credentials.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-navy/5 border border-navy/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange/10 group-hover:border-orange/20 transition-colors">
                    <Icon size={18} className="text-navy group-hover:text-orange transition-colors" />
                  </div>
                  <span className="text-gray-700 text-base">{text}</span>
                </li>
              ))}
            </ul>

            <CTAButton href="#audit">
              Request Your Diagnostic
            </CTAButton>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

// ─── Audit Request Form ───────────────────────────────────────────────────────

function AuditForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    annualSpend: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.title.trim()) newErrors.title = "Job title is required.";
    if (!formData.company.trim()) newErrors.company = "Company name is required.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "A valid work email is required.";
    }
    if (!formData.annualSpend) newErrors.annualSpend = "Please select your annual spend range.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate async submission
    await new Promise((res) => setTimeout(res, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const fieldClass = (field: string) =>
    `w-full border ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"
    } rounded-lg px-4 py-3 text-navy text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition-all duration-150`;

  if (submitted) {
    return (
      <div id="audit" className="bg-navy py-20 md:py-28">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange/30">
            <CheckCircle size={36} className="text-white" />
          </div>
          <h3 className="font-black text-3xl text-white mb-4">
            Request Received.
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-2">
            Thank you, <strong className="text-white">{formData.name}</strong>.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            A Senior Advisor will contact you within{" "}
            <strong className="text-orange">4 business hours</strong> to schedule your
            diagnostic intake call. Check your inbox at{" "}
            <strong className="text-white">{formData.email}</strong>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="audit" className="bg-navy py-20 md:py-28 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: value prop */}
          <div className="lg:col-span-2">
            <FadeIn>
              <span className="inline-block bg-white/10 text-orange text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange/30 mb-6">
                Request the Diagnostic
              </span>
              <h2 className="font-black text-3xl md:text-4xl text-white leading-tight mb-5 tracking-tight text-balance">
                Strengthen Capital Integrity.{" "}
                <span className="text-orange">Accelerate ROI.</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                The Capital Leakage Diagnostic is the fastest path from spend
                uncertainty to actionable clarity. A Senior Advisor will contact
                you within 4 business hours.
              </p>

              <ul className="space-y-4">
                {[
                  { icon: Clock, text: "72-hour diagnostic turnaround" },
                  { icon: Lock, text: "Enterprise-grade data security" },
                  { icon: Users, text: "Dedicated Senior Advisor assigned immediately" },
                  { icon: FileSearch, text: "No commitment required for initial consultation" },
                  { icon: TrendingUp, text: "Typical ROI: 40–120x diagnostic investment" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-8 h-8 bg-orange/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange/30">
                      <Icon size={15} className="text-orange" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Right: form */}
          <FadeIn delay={200} className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-7 md:p-10 shadow-2xl">
              <h3 className="font-black text-navy text-xl md:text-2xl mb-1 tracking-tight">
                Request Your Free Diagnostic
              </h3>
              <p className="text-gray-500 text-sm mb-7">
                Takes 2 minutes. A real advisor responds within 4 hours.
              </p>

              <form onSubmit={handleSubmit} noValidate aria-label="Audit request form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-navy uppercase tracking-widest mb-1.5">
                      Full Name <span className="text-orange">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className={fieldClass("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Title */}
                  <div>
                    <label htmlFor="title" className="block text-xs font-bold text-navy uppercase tracking-widest mb-1.5">
                      Job Title <span className="text-orange">*</span>
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      autoComplete="organization-title"
                      placeholder="CFO / VP Procurement"
                      value={formData.title}
                      onChange={handleChange}
                      className={fieldClass("title")}
                      aria-invalid={!!errors.title}
                      aria-describedby={errors.title ? "title-error" : undefined}
                    />
                    {errors.title && (
                      <p id="title-error" className="text-red-500 text-xs mt-1">{errors.title}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-navy uppercase tracking-widest mb-1.5">
                      Company <span className="text-orange">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={handleChange}
                      className={fieldClass("company")}
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? "company-error" : undefined}
                    />
                    {errors.company && (
                      <p id="company-error" className="text-red-500 text-xs mt-1">{errors.company}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-navy uppercase tracking-widest mb-1.5">
                      Work Email <span className="text-orange">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={fieldClass("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-navy uppercase tracking-widest mb-1.5">
                      Phone (Optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className={fieldClass("phone")}
                    />
                  </div>

                  {/* Annual Spend */}
                  <div>
                    <label htmlFor="annualSpend" className="block text-xs font-bold text-navy uppercase tracking-widest mb-1.5">
                      Annual Addressable Spend <span className="text-orange">*</span>
                    </label>
                    <select
                      id="annualSpend"
                      name="annualSpend"
                      value={formData.annualSpend}
                      onChange={handleChange}
                      className={`${fieldClass("annualSpend")} cursor-pointer`}
                      aria-invalid={!!errors.annualSpend}
                      aria-describedby={errors.annualSpend ? "spend-error" : undefined}
                    >
                      <option value="" disabled>{"Select range…"}</option>
                      {SPEND_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    {errors.annualSpend && (
                      <p id="spend-error" className="text-red-500 text-xs mt-1">{errors.annualSpend}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs font-bold text-navy uppercase tracking-widest mb-1.5">
                    {"Anything specific you'd like us to focus on? (Optional)"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="e.g. We suspect significant maverick spend in our IT and Marketing categories…"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${fieldClass("message")} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-orange text-white font-black px-8 py-4 rounded-xl text-base tracking-wide shadow-lg shadow-orange/25 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange/30 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange/40 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  aria-busy={submitting}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      {"Submitting…"}
                    </>
                  ) : (
                    <>
                      Request My Free Diagnostic
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-gray-400 text-xs text-center mt-4 leading-relaxed">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-navy underline hover:text-orange">Privacy Policy</a>.
                  {" "}We never sell or share your data.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

// ─── Social Proof Bar ─────────────────────────────────────────────────────────

function SocialProofBar() {
  return (
    <div className="bg-gray-50 border-y border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-gray-400 text-xs uppercase tracking-widest font-semibold mb-6">
          Trusted by Finance & Procurement Leaders at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {[
            "Fortune 500 Healthcare",
            "Global Manufacturing",
            "Private Equity Portfolio",
            "Series D Technology",
            "Federal Contractors",
          ].map((name) => (
            <div key={name} className="text-gray-300 font-black text-sm md:text-base tracking-tight uppercase">
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Final CTA Banner ─────────────────────────────────────────────────────────

function FinalCTABanner() {
  return (
    <div className="bg-orange py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <FadeIn>
          <h2 className="font-black text-3xl md:text-5xl text-white leading-tight mb-4 tracking-tight text-balance">
            Ready to Strengthen Your Capital Integrity?
          </h2>
          <p className="text-orange-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Join the CFOs who have achieved systemic efficiency gains. The Diagnostic
            delivers ROI — typically by a factor of 40–120x.
          </p>
          <a
            href="#audit"
            className="inline-flex items-center gap-2 bg-white text-orange font-black px-10 py-4 rounded-xl text-base tracking-wide shadow-2xl hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/40 group"
          >
            Request Your Free Diagnostic
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-orange-200 text-sm mt-4">
            No commitment required. 4-hour advisor response. 72-hour report turnaround.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-navy text-gray-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-orange" fill="currentColor" />
              </div>
              <span className="font-black text-white text-lg tracking-tight">
                Syreeta<span className="text-orange">.ai</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-5">
              Capital integrity diagnostics for enterprise finance and
              procurement leaders.
            </p>
            <div className="flex gap-3">
              {[Mail, Phone, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-orange/20 hover:border-orange/30 transition-colors"
                  aria-label="Contact"
                >
                  <Icon size={15} className="text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              heading: "Platform",
              links: ["Spend Classification", "Leakage Report", "Maverick Map", "Duplicate Audit"],
            },
            {
              heading: "Company",
              links: ["About", "Careers", "Press", "Contact"],
            },
            {
              heading: "Legal",
              links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
            },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Syreeta AI LLC. All rights reserved. Syreeta.ai is a
            registered trademark.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-1.5">
              <Shield size={12} className="text-gray-500" />
              Enterprise Security
            </div>
            <div className="flex items-center gap-1.5">
              <Lock size={12} className="text-gray-500" />
              GDPR Compliant
            </div>
            <div className="flex items-center gap-1.5">
              <Globe size={12} className="text-gray-500" />
              CCPA Compliant
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page Entry Point ─────────────────────────────────────────────────────────

export default function SyreetaLandingPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        <HeroSection />
        <SocialProofBar />

        {/* Opportunity */}
        <OpportunitySection />

        {/* Approach */}
        <ApproachSection />

        {/* Diagnostic Layers */}
        <DiagnosticSection />

        {/* Outcomes */}
        <OutcomesSection />

        {/* About */}
        <AboutSection />

        {/* Audit Request Form */}
        <AuditForm />

        {/* Final CTA */}
        <FinalCTABanner />
      </main>

      <Footer />
    </>
  );
}
