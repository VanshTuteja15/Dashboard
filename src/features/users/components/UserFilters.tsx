interface Props {

search:string;

setSearch:(value:string)=>void;

}


export function UserFilters({
search,
setSearch
}:Props){


return (

<div className="
flex
gap-4
mb-6
">


<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search users..."

className="
border
rounded-lg
px-4
py-2
w-full
max-w-md
"

/>


</div>

)

}