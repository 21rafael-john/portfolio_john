import * as React from "react"; import { cn } from "../utils";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default"|"outline"; className?: string; };
export function Button({ variant="default", className, children, ...props }: ButtonProps){
  const base="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition active:scale-[.99]";
  const styles=variant==="outline"?"border border-slate-300 bg-white hover:bg-slate-50":"bg-slate-900 text-white hover:bg-slate-800";
  return <button className={cn(base,styles,className)} {...props}>{children}</button>;
}
