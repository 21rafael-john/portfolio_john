import Link from "next/link";
import { projects } from "@/app/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateStaticParams(){ return projects.map(p=>({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }){
  const p = projects.find(x=>x.slug===params.slug); return { title: p ? `${p.title} — Project` : "Project" };
}

export default function ProjectPage({ params }: { params: { slug: string } }){
  const p = projects.find(x=>x.slug===params.slug);
  if(!p) return <div className="p-6">Project not found.</div>;

  return(<div className="mx-auto max-w-3xl px-4 py-10">
    <Link href="/projects" className="text-sm text-slate-600 hover:underline">← All projects</Link>
    <h1 className="mt-3 text-3xl font-bold tracking-tight">{p.title}</h1>
    <p className="text-slate-500">{p.year}</p>
    {p.image && <img src={p.image} alt={p.title} className="mt-6 w-full h-64 object-cover rounded-2xl" />}

    <div className="mt-6 flex flex-wrap gap-2">
      {p.role && <span className="px-2.5 py-1 rounded-xl text-xs bg-slate-900 text-white">{p.role}</span>}
      {p.methodology && <span className="px-2.5 py-1 rounded-xl text-xs bg-slate-100 border border-slate-200">Methodology: {p.methodology}</span>}
    </div>

    {p.tools?.length ? <div className="mt-4 flex flex-wrap gap-2">{p.tools.map(t=>(<span key={t} className="px-2.5 py-1 rounded-xl text-xs bg-slate-50 border border-slate-200">{t}</span>))}</div> : null}

    {(p.overview || p.description) && (
      <Card className="mt-8 rounded-2xl"><CardHeader><CardTitle>Overview</CardTitle></CardHeader>
        <CardContent className="text-slate-700 leading-relaxed"><p>{p.overview ?? p.description}</p></CardContent>
      </Card>
    )}

    {p.contributions?.length ? (
      <Card className="mt-6 rounded-2xl"><CardHeader><CardTitle>Key Contributions</CardTitle></CardHeader>
        <CardContent><ul className="list-disc ml-5 space-y-2 text-slate-700">{p.contributions.map((it,i)=>(<li key={i}>{it}</li>))}</ul></CardContent>
      </Card>
    ) : null}

    {p.visuals?.length ? (
      <Card className="mt-6 rounded-2xl"><CardHeader><CardTitle>Visualization & Reporting</CardTitle></CardHeader>
        <CardContent><ul className="list-disc ml-5 space-y-2 text-slate-700">{p.visuals.map((it,i)=>(<li key={i}>{it}</li>))}</ul></CardContent>
      </Card>
    ) : null}

    {p.insights?.length ? (
      <Card className="mt-6 rounded-2xl"><CardHeader><CardTitle>Insights & Recommendations</CardTitle></CardHeader>
        <CardContent><ul className="list-disc ml-5 space-y-2 text-slate-700">{p.insights.map((it,i)=>(<li key={i}>{it}</li>))}</ul></CardContent>
      </Card>
    ) : null}

    {p.outcomes?.length ? (
      <Card className="mt-6 rounded-2xl"><CardHeader><CardTitle>Outcomes</CardTitle></CardHeader>
        <CardContent><ul className="list-disc ml-5 space-y-2 text-slate-700">{p.outcomes.map((it,i)=>(<li key={i}>{it}</li>))}</ul></CardContent>
      </Card>
    ) : null}

    {(p.links?.demo || p.links?.repo) && (
      <div className="mt-8 flex gap-4 text-sm">
        {p.links?.demo && <a href={p.links.demo} className="underline">Demo</a>}
        {p.links?.repo && <a href={p.links.repo} className="underline">Code</a>}
      </div>
    )}
  </div>);
}
