import * as React from "react"; import { cn } from "../utils";
export function Badge({className,children,variant="default",...p}:{className?:string;children:React.ReactNode;variant?:"default"|"secondary"} & React.HTMLAttributes<HTMLSpanElement>){
  const styles=variant==="secondary"?"bg-slate-100 text-slate-700 border border-slate-200":"bg-slate-900 text-white";
  return <span {...p} className={cn("inline-flex items-center px-2.5 py-1 rounded-xl text-xs font-medium",styles,className)}>{children}</span>
}
