import { Award, Shield, Target, Lightbulb, Users, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Prestigious Group | Prestigious Consultancy",
  description:
    "Learn how Prestigious Group, formerly Prestigious Consultancy, helps people and organizations across Africa improve capability, performance, and spaces.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f1] pb-24 text-[#0d1b3d]">
      {/* Hero Section */}
      <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#08172f] px-5 py-12 text-white sm:min-h-[430px] sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-20 lg:py-24">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375b902?auto=format&fit=crop&q=85&w=2200')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,#08172f_15%,rgba(8,23,47,0.82),rgba(8,23,47,0.3))]" />
          <div className="relative z-10 flex min-h-[260px] flex-col justify-center sm:min-h-[300px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af6d]">The people behind the progress</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-7xl">Built on clarity.<br /><span className="text-[#d4af6d]">Driven by impact.</span></h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">We are a premier firm dedicated to elevating organizational excellence through specialized training and strategic consultancy.</p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200">
            <div className="w-14 h-14 bg-[#f7f0e4] text-[#0d1b3d] rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              To empower professionals and organizations by delivering transformative training, robust compliance frameworks, and actionable strategic insights that drive sustainable growth.
            </p>
          </div>
          
          <div className="bg-[#0d1b3d] rounded-3xl p-8 sm:p-10 shadow-lg text-white">
            <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/20">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-blue-100 leading-relaxed text-lg">
              To be the leading catalyst for corporate excellence and leadership development across Africa, recognized for uncompromising quality and measurable impact.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Excellence", desc: "We set the highest standards in everything we do.", icon: Award },
              { title: "Integrity", desc: "We act with honesty, transparency, and respect.", icon: Shield },
              { title: "Collaboration", desc: "We believe in the power of working together.", icon: Users },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f7f0e4] text-[#d4af6d] mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Badges */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Accreditations & Compliance</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We operate under strict regulatory standards to ensure our clients receive globally recognized and compliant training and consultancy services.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#d4af6d]" /> NITA Approved Training Provider
              </li>
            </ul>
          </div>
          <div className="shrink-0 flex items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 w-full md:w-auto h-48 md:h-auto">
            <div className="text-center">
              <Award className="w-16 h-16 text-[#0d1b3d] mx-auto mb-2 opacity-50" />
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">NITA Badge</span>
            </div>
          </div>
        </div>

        {/* Team Leadership Grid */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Guided by a team of seasoned industry experts with decades of combined experience in corporate strategy and organizational development.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Kimani", role: "Managing Director" },
              { name: "David Ochieng", role: "Head of Training" },
              { name: "Elena Ruto", role: "Lead HSE Consultant" },
            ].map((leader, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#f1e8d4]">
                  <div className="text-center text-[#8a6c45]" aria-label={`${leader.name} portrait placeholder`}>
                    <Users className="mx-auto h-16 w-16 opacity-60" strokeWidth={1.25} />
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em]">Portrait coming soon</p>
                  </div>
                </div>
                <div className="p-6 text-center border-t border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-[#0d1b3d] font-medium mt-1">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
