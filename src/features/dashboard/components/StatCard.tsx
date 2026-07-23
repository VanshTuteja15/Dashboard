interface StatCardProps {

title:string;

value:string;

change:string;

}


export function StatCard({
title,
value,
change
}:StatCardProps){

return (

<div
className="
rounded-xl
border
bg-card
p-5
shadow-sm
"
>


<p className="text-sm text-muted-foreground">

{title}

</p>


<h2 className="
text-3xl
font-bold
mt-2
">

{value}

</h2>


<p className="
text-sm
text-green-600
mt-2
">

↑ {change}

</p>


</div>

)

}