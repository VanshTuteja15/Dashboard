import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";


import {DashboardLayout}
from "@/components/layout/DashboardLayout";


import {DashboardPage}
from "@/features/dashboard/DashboardPage";


import {UsersPage}
from "@/features/users/UsersPage";



function App(){


return (

<BrowserRouter>

<DashboardLayout>

<Routes>

<Route
path="/"
element={<DashboardPage/>}
/>


<Route
path="/users"
element={<UsersPage/>}
/>


</Routes>

</DashboardLayout>

</BrowserRouter>

)

}


export default App;