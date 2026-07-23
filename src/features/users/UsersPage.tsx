import {useState} from "react";

import {users} from "./data";

import {UserFilters}
from "./components/UserFilters";

import {UserTable}
from "./components/UserTable";



export function UsersPage(){


const [search,setSearch]=useState("");



const filteredUsers =
users.filter(user=>

user.name
.toLowerCase()
.includes(search.toLowerCase())

);



return (

<div>


<h1 className="
text-3xl
font-bold
">

Users

</h1>


<p className="
text-muted-foreground
mb-6
">

Manage platform users

</p>


<UserFilters

search={search}

setSearch={setSearch}

/>


<UserTable

users={filteredUsers}

/>



</div>

)

}