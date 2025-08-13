"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ArrowUpRight, Download, ExternalLink, MapPin } from "lucide-react";
import { projects } from "@/app/data/projects";

const DonutChart = dynamic(() => import("@/components/DonutChart"), { ssr: false });

const profile = {
  name: "Rafael John",
  title: "Computer Science Student · Data Analytics Specialization",
  blurb: "Detail-oriented and motivated Computer Science student specializing in Data Analytics, seeking an internship to apply expertise in data cleaning, visualization, and statistical analysis. Skilled in Python, R, SQL, Power BI, and Tableau.",
  location: "Kuala Lumpur, MY",
  availability: "Open to internships & freelance",
  avatar: "/me.jpg",
  resumeUrl: "/resume.pdf",
  social: { github: "https://github.com/yourhandle", linkedin: "https://www.linkedin.com/in/your-handle/", email: "mailto:johnxjrafael@gmail.com" },
};

const skills = [
  { name: "Python", pct: 90 },
  { name: "R", pct: 85 },
  { name: "SQL", pct: 85 },
  { name: "Power BI", pct: 80 },
  { name: "Tableau", pct: 75 },
];

export default function Page() {
  const [open, setOpen] = React.useState<number | null>(null);
  const featured = projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{profile.name}</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/projects" className="hover:opacity-70">Projects</Link>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={profile.resumeUrl}><Button className="rounded-2xl"><Download className="w-4 h-4 mr-1"/> Resume</Button></a>
            <a href="#contact"><Button className="rounded-2xl">Hire me</Button></a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-[1.2fr_.8fr] gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{profile.title}</h1>
          <p className="mt-4 text-slate-600 max-w-2xl">{profile.blurb}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge className="px-3 py-1 rounded-xl flex items-center gap-1"><MapPin className="w-4 h-4"/> {profile.location}</Badge>
            <Badge variant="secondary" className="px-3 py-1 rounded-xl">{profile.availability}</Badge>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={profile.social.github} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-2xl"><Github className="w-4 h-4 mr-2"/> GitHub</Button></a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-2xl"><Linkedin className="w-4 h-4 mr-2"/> LinkedIn</Button></a>
            <a href={profile.social.email}><Button className="rounded-2xl"><Mail className="w-4 h-4 mr-2"/> Email me</Button></a>
          </div>
        </div>
        <Card className="rounded-2xl">
          <CardContent className="p-6 flex flex-col items-center">
            <img src={profile.avatar} alt="avatar" className="w-40 h-40 rounded-2xl object-cover shadow"/>
            <div className="mt-4 text-center">
              <h3 className="font-semibold text-lg">{profile.name}</h3>
              <p className="text-slate-500 text-sm">{profile.title}</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Projects</h2>
          <Link href="/projects" className="text-sm inline-flex items-center gap-1 hover:opacity-80">
            All projects <ArrowUpRight className="w-4 h-4"/>
          </Link>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, idx) => {
            const isOpen = open === idx;
            return (
              <motion.article key={p.slug} layout className="overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
                <button type="button" onClick={() => setOpen(isOpen ? null : idx)}
                  onKeyDown={(e)=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); setOpen(isOpen?null:idx); } }}
                  aria-expanded={isOpen} className="w-full text-left">
                  <img src={p.image} alt={p.title} className="h-40 w-full object-cover"/>
                  <div className="px-6 pt-4">
                    <div className="flex items-center justify-between"><h3 className="text-base font-semibold">{p.title}</h3><span className="text-xs font-medium text-slate-500">{p.year}</span></div>
                    <p className="mt-1 text-sm text-slate-600 min-h-[56px]">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">{p.tags.map(t=>(<Badge key={t} variant="secondary" className="rounded-xl">{t}</Badge>))}</div>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div key="details" initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.25}} className="px-6 pb-6">
                      <div className="mt-4 text-sm text-slate-700 leading-relaxed">{p.overview ?? p.description}</div>
                      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                        {p.links?.demo && (<a href={p.links.demo} className="inline-flex items-center gap-1 hover:opacity-80"><ArrowUpRight className="w-4 h-4" /> Demo</a>)}
                        {p.links?.repo && (<a href={p.links.repo} className="inline-flex items-center gap-1 hover:opacity-80"><Github className="w-4 h-4" /> Code</a>)}
                        <a href={`/projects/${p.slug}`} className="underline">Full details →</a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Skills (chart client-only) */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Skills Snapshot</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Tooling & Languages</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              {skills.map((s)=>(
                <div key={s.name} className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                  <div className="flex items-center justify-between text-sm font-medium"><span>{s.name}</span><span>{s.pct}%</span></div>
                  <div className="mt-2 h-2 rounded-full bg-slate-200"><div className="h-2 rounded-full bg-sky-500" style={{width:`${s.pct}%`}}/></div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Time Breakdown</CardTitle></CardHeader>
            <CardContent><DonutChart data={skills}/></CardContent>
          </Card>
        </div>
      </section>

      {/* About with UPDATED HIGHLIGHTS */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About</h2>
        <div className="mt-6 grid md:grid-cols-[1.2fr_.8fr] gap-6">
          <Card className="rounded-2xl"><CardContent className="p-6 text-slate-700 leading-relaxed">
            <p>I’m a data analyst who enjoys clean schemas, tidy notebooks, and dashboards that make sense at a glance. Recently I’ve been focusing on transportation analytics, pricing models, and lightweight ML for decision support.</p>
            <p className="mt-4">When I’m not crunching numbers, I’m learning more about cloud data stacks and better ways to communicate insights with stakeholders.</p>
          </CardContent></Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Highlights</CardTitle></CardHeader>
            <CardContent className="grid gap-2 text-sm">
              <div className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4"/> Delivered full-scale data analytics and BI projects, including Velocity Cycles BI and London Housing Analysis</div>
              <div className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4"/> Proficient in SQL, Power BI, Python, and R for data cleaning, modeling, and visualization</div>
              <div className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4"/> Experienced with multi-dimensional modeling (SSAS), MDX queries, and dashboard design</div>
              <div className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4"/> Strong focus on actionable insights for business growth and decision-making</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Contact</h2>
        <Card className="mt-6 rounded-2xl"><CardContent className="p-6 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-slate-600">Want a dashboard, an analysis, or help fixing messy data? Drop me a line and I’ll reply within a day.</p>
            <div className="mt-6 flex gap-3">
              <a href={profile.social.email}><Button className="rounded-2xl"><Mail className="w-4 h-4 mr-2"/> Email</Button></a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-2xl"><Linkedin className="w-4 h-4 mr-2"/> LinkedIn</Button></a>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm">
            <h3 className="font-semibold">What to include</h3>
            <ul className="mt-3 list-disc ml-5 text-slate-600 space-y-1">
              <li>Project scope & data sources</li>
              <li>Timeline and deliverables</li>
              <li>Preferred tools (SQL, Python, Power BI)</li>
            </ul>
          </div>
        </CardContent></Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={profile.social.github} className="hover:opacity-80 inline-flex items-center gap-1"><Github className="w-4 h-4"/> GitHub</a>
            <a href={profile.social.linkedin} className="hover:opacity-80 inline-flex items-center gap-1"><Linkedin className="w-4 h-4"/> LinkedIn</a>
            <a href={profile.social.email} className="hover:opacity-80 inline-flex items-center gap-1"><Mail className="w-4 h-4"/> Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
