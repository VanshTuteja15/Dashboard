import { User } from "../types";


interface Props {

users:User[];

}


export function UserTable({
users
}:Props){


return (

<div className="
rounded-xl
border
overflow-hidden
">


<table className="w-full">


<thead className="bg-muted">

<tr>

<th className="p-3 text-left">
Name
</th>

<th className="p-3 text-left">
Email
</th>

<th className="p-3 text-left">
Role
</th>

<th className="p-3 text-left">
Status
</th>


</tr>

</thead>



<tbody>

{
users.map(user=>(

<tr
key={user.id}
className="
border-t
"
>


<td className="p-3">
{user.name}
</td>


<td className="p-3">
{user.email}
</td>


<td className="p-3">
{user.role}
</td>


<td className="p-3">

<span className="
rounded-full
bg-green-100
px-3
py-1
text-sm
">

{user.status}

</span>

</td>


</tr>


))
}


</tbody>


</table>


</div>

)

}