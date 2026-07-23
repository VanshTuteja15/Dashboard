import {
stats
}
from "./data";

import {
StatCard
}
from "./components/StatCard";

import {
RevenueChart
}
from "./components/RevenueChart";

import {
ActivityFeed
}
from "./components/ActivityFeed";


export function DashboardPage(){


return (

<div className="space-y-6">


<div>

<h1 className="
text-3xl
font-bold
">

Welcome back 👋

</h1>


<p className="
text-muted-foreground
">

Here is your business overview.

</p>

</div>



<div className="
grid
gap-5
md:grid-cols-2
xl:grid-cols-4
">

{
stats.map((stat)=>(

<StatCard
key={stat.title}
{...stat}
/>

))
}

</div>



<RevenueChart/>


<div className="
grid
md:grid-cols-2
gap-5
">

<ActivityFeed/>


<div className="
border
rounded-xl
p-5
bg-card
">

<h2 className="font-semibold">

🤖 AI Insights

</h2>


<p className="
mt-3
text-muted-foreground
">

Revenue increased 18%.
Your best performing category is Electronics.

</p>


</div>


</div>


</div>

)

}