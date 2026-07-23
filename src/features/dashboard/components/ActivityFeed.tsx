const activities=[
"New user registered",
"Payment received",
"Project created",
"Report generated"
];


export function ActivityFeed(){

return (

<div className="
border
rounded-xl
p-5
bg-card
">


<h2 className="
font-semibold
mb-4
">

Recent Activity

</h2>


<div className="space-y-3">

{
activities.map((item,index)=>(

<div
key={index}
className="
text-sm
border-b
pb-2
"
>

{item}

</div>

))
}

</div>


</div>

)

}