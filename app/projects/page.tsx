import Link from "next/link";
import { projects } from "@/app/data/projects";
export const metadata = { title: "Projects — Rafael John" };
export default function ProjectsIndex(){
  return(<div className="mx-auto max-w-6xl px-4 py-12">
    <h1 className="text-3xl font-bold tracking-tight">All Projects</h1>
    <p className="mt-2 text-slate-600">A selection of my coursework and personal builds.</p>
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(p=>(
        <article key={p.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-md transition">
          <Link href={`/projects/${p.slug}`}>
            <img src={p.image} alt={p.title} className="h-40 w-full object-cover"/>
            <div className="px-6 pt-4">
              <div className="flex items-center justify-between"><h2 className="text-base font-semibold">{p.title}</h2><span className="text-xs text-slate-500">{p.year}</span></div>
              <p className="mt-1 text-sm text-slate-600 min-h-[56px]">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">{p.tags.map(t=>(<span key={t} className="px-2.5 py-1 rounded-xl text-xs bg-slate-100 border border-slate-200">{t}</span>))}</div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  </div>);
}
