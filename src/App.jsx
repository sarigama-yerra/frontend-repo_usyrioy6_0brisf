import React from 'react'
import Spline from '@splinetool/react-spline'
import { ShieldCheck, PlayCircle, Users, CheckCircle2, ArrowDownRight, Laptop, Video, BadgeCheck, Lock, Server, Cloud, Shield, ChevronRight, Quote } from 'lucide-react'

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-extrabold text-white">{value}</div>
      <div className="text-sm text-white/60 mt-1">{label}</div>
    </div>
  )
}

function Card({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/[0.08]">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-[#00ff88]/10 p-2">
          <Icon className="h-5 w-5 text-[#00ff88]" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/70">{desc}</p>
    </div>
  )
}

export default function App() {
  const accent = '#00ff88'
  const deadline = new Date()
  deadline.setDate(deadline.getDate() + 14)
  const dateStr = deadline.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })

  return (
    <div className="min-h-screen w-full bg-[#0d0f12]">
      {/* Top Bar / Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="inline-flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-[#00ff88]" />
              <span className="text-white font-semibold tracking-tight">EHACK Academy</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              <a href="#offer" className="hover:text-white transition">Programs</a>
              <a href="#why" className="hover:text-white transition">Why Us</a>
              <a href="#curriculum" className="hover:text-white transition">Curriculum</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
              <a href="#enroll" title="30 days refund guarantee" className="ml-2 inline-flex items-center gap-2 rounded-md bg-[#00ff88] px-4 py-2 text-black font-semibold shadow-[0_0_0_3px_rgba(0,255,136,0.15)] hover:shadow-[0_0_0_6px_rgba(0,255,136,0.2)] transition">
                Enroll Now
              </a>
            </nav>
            <a href="#enroll" title="30 days refund guarantee" className="md:hidden inline-flex items-center gap-2 rounded-md bg-[#00ff88] px-3 py-1.5 text-black font-semibold">Enroll</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 right-1/3 h-72 w-72 rounded-full bg-[#00ff88]/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Master Ethical Hacking • Land Real Cyber Jobs
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl">
              Live instructor-led & self-paced labs. Zero experience needed. Certification included.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#enroll"
                title="30 days refund guarantee"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00ff88] px-6 py-3 text-black font-semibold shadow-[0_0_0_6px_rgba(0,255,136,0.15)] hover:shadow-[0_0_0_10px_rgba(0,255,136,0.2)] transition"
              >
                Enroll Now
                <ChevronRight className="h-5 w-5" />
              </a>
              <a href="#offer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                Explore programs
                <ArrowDownRight className="h-5 w-5 text-[#00ff88]" />
              </a>
            </div>
            <p className="mt-6 text-white/70">
              Every day, companies lose millions because of weak security. Are you ready to stop it?
            </p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#00ff88]" /> No prior coding required</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#00ff88]" /> Learn in 12 weeks</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#00ff88]" /> Real-world labs you’ll actually apply at work</li>
            </ul>
          </div>

          <div className="relative order-1 lg:order-2 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-2xl border border-white/10 bg-black/30">
            <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="offer" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Your Path from Beginner to Certified Ethical Hacker</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card icon={Users} title="Live Cohort Courses" desc="Small groups, live Q&A, and guided projects that build muscle memory." />
            <Card icon={Video} title="On-Demand Videos" desc="Bite-sized lessons so you can learn whenever it fits your schedule." />
            <Card icon={BadgeCheck} title="Career Support & Certification" desc="Interview prep, portfolio reviews, and industry-recognized certs." />
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section id="why" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Why Hundreds of Tech-Pros Choose EHACK</h2>
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-6 rounded-xl border border-white/10 bg-white/[0.03] p-6">
                {["ApexSec","CyGuard","NetShield","Cloudron","Vanta","SentryX"].map((logo) => (
                  <img key={logo} loading="lazy" alt={`${logo} logo`} src={`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='120' height='28'><rect width='120' height='28' fill='transparent'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' fill-opacity='0.7' font-family='Inter, sans-serif' font-size='14'>${logo}</text></svg>`)} }` className="h-7 opacity-70" />
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <Stat value="> 1,000" label="students trained" />
                <Stat value="90%" label="land jobs within 6 months" />
                <Stat value="4.9/5" label="average rating" />
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center gap-3">
                <img loading="lazy" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop" alt="Student" />
                <div>
                  <p className="text-white font-semibold">Aisha N.</p>
                  <p className="text-white/60 text-sm">Security Analyst @ Cloudron</p>
                </div>
              </div>
              <p className="mt-4 text-white/80">
                “I went from zero to reporting real vulnerabilities. The labs mirror what I do at work.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">What You’ll Learn</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card icon={Shield} title="Penetration Testing" desc="Recon, exploitation, post-exploitation, and reporting." />
            <Card icon={Lock} title="Web App Hacking" desc="OWASP Top 10, auth bypass, SSRF, IDOR, and more." />
            <Card icon={Cloud} title="Cloud Security" desc="AWS/Azure attack paths, IAM misconfig, container threats." />
            <Card icon={Server} title="Blue Team Defense" desc="SIEM, threat hunting, incident response playbooks." />
          </div>
        </div>
      </section>

      {/* Offer / Urgency */}
      <section id="enroll" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="rounded-2xl border border-[#00ff88]/30 bg-gradient-to-br from-[#00ff88]/10 to-transparent p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Limited Seats for the Next Live Batch</h2>
            <p className="mt-2 text-white/80">Register before {dateStr} to receive a free Hacker Toolkit & 0% interest payment plan.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                title="30 days refund guarantee"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00ff88] px-6 py-3 text-black font-semibold shadow-[0_0_0_6px_rgba(0,255,136,0.15)] hover:shadow-[0_0_0_10px_rgba(0,255,136,0.2)] transition"
              >
                Reserve My Seat
                <ChevronRight className="h-5 w-5" />
              </a>
              <p className="text-white/60 text-sm">Certified by top cyber firms • Hands-on labs used by real hackers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-[#00ff88]" />
                <span className="text-white font-semibold">EHACK Academy</span>
              </div>
              <p className="mt-3 text-sm text-white/60">Premium, results-focused ethical hacking training.</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-white/50">
                <span className="inline-flex items-center gap-1 rounded border border-white/15 px-2 py-1">
                  <Shield className="h-3.5 w-3.5 text-[#00ff88]" /> Secure payment
                </span>
                <span className="inline-flex items-center gap-1 rounded border border-white/15 px-2 py-1">
                  <BadgeCheck className="h-3.5 w-3.5 text-[#00ff88]" /> 30-day money-back
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold">Navigate</h4>
              <ul className="mt-3 space-y-2 text-white/70 text-sm">
                <li><a href="#offer" className="hover:text-white">Programs</a></li>
                <li><a href="#why" className="hover:text-white">Why Us</a></li>
                <li><a href="#curriculum" className="hover:text-white">Curriculum</a></li>
                <li><a href="#enroll" className="hover:text-white">Enroll</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold">Follow</h4>
              <ul className="mt-3 flex items-center gap-4 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold">Get a Demo</h4>
              <p className="mt-3 text-white/70 text-sm">Want to try a live lab? Request a 15‑minute walkthrough.</p>
              <a href="#" className="mt-3 inline-block text-[#00ff88] hover:opacity-90">Request a demo →</a>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} EHACK Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
