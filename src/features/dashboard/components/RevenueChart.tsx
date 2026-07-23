import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
}
from "recharts";


import {
revenueData
}
from "../data";


export function RevenueChart(){


return (

<div
className="
rounded-xl
border
bg-card
p-6
h-[350px]
"
>


<h2 className="
font-semibold
mb-5
">

Revenue Overview

</h2>


<ResponsiveContainer
width="100%"
height="90%"
>

<LineChart
data={revenueData}
>


<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>


<Line

type="monotone"

dataKey="revenue"

strokeWidth={3}

/>


</LineChart>


</ResponsiveContainer>


</div>

)

}