import { Bell, Search } from "lucide-react";


export function Navbar(){

return (

<header className="
h-16
border-b
flex
items-center
justify-between
px-6
">

<div className="
flex
items-center
gap-3
border
rounded-lg
px-3
py-2
">

<Search size={18}/>

<input
placeholder="Search..."
className="
outline-none
bg-transparent
"
/>

</div>


<div>

<Bell size={20}/>

</div>


</header>

)

}