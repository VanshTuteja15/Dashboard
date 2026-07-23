import {
  LayoutDashboard,
  Users,
  BarChart3,
  Bot,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";


const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Users",
    path: "/users",
    icon: Users,
  },
  {
    title: "AI Insights",
    path: "/ai-insights",
    icon: Bot,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];


export function Sidebar() {

  return (

    <aside
      className="
      w-64
      min-h-screen
      border-r
      bg-background
      p-5
      "
    >

      {/* Logo */}

      <h1
        className="
        text-2xl
        font-bold
        mb-8
        "
      >
        Nexus
      </h1>


      {/* Navigation */}

      <nav className="space-y-2">

        {
          menuItems.map((item)=>{

            const Icon = item.icon;


            return (

              <NavLink

                key={item.title}

                to={item.path}

                className={({isActive})=>

                  `
                  flex
                  items-center
                  gap-3
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  transition

                  ${
                    isActive
                    ?
                    "bg-primary text-primary-foreground"
                    :
                    "hover:bg-accent"
                  }

                  `

                }

              >

                <Icon size={18}/>

                {item.title}


              </NavLink>

            )

          })
        }


      </nav>


    </aside>

  );

}