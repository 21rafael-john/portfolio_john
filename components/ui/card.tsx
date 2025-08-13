import * as React from "react"; import { cn } from "../utils";
export function Card(p:React.HTMLAttributes<HTMLDivElement>){return <div {...p} className={cn("bg-white border border-slate-200 rounded-2xl shadow-sm",p.className)} />}
export function CardHeader(p:React.HTMLAttributes<HTMLDivElement>){return <div {...p} className={cn("px-6 pt-4",p.className)} />}
export function CardTitle(p:React.HTMLAttributes<HTMLHeadingElement>){return <h3 {...p} className={cn("text-lg font-semibold",p.className)} />}
export function CardContent(p:React.HTMLAttributes<HTMLDivElement>){return <div {...p} className={cn("px-6 pb-6",p.className)} />}
