"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
type Datum={name:string;pct:number};
export default function DonutChart({data}:{data:Datum[]}){
  return(<div style={{width:"100%",height:260}}><ResponsiveContainer><PieChart>
    <Pie data={data} dataKey="pct" nameKey="name" innerRadius={60} outerRadius={100}>{data.map((_,i)=><Cell key={i}/>)}</Pie>
    <Tooltip/>
  </PieChart></ResponsiveContainer></div>);
}
