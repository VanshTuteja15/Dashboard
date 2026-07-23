import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";


interface Props {

children: ReactNode;

}


export function DashboardLayout({
children
}:Props){

return (

<div className="
flex
min-h-screen
bg-background
">


<Sidebar/>


<div className="
flex-1
">

<Navbar/>


<main className="
p-6
">

{children}

</main>


</div>


</div>

)

}