import {
  LayoutDashboard,
  Users,
  BarChart3,
  Bot,
  Settings,
} from "lucide-react";


const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
  {
    title: "Users",
    icon: Users,
  },
  {
    title: "AI Insights",
    icon: Bot,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];


export function Sidebar() {

  return (

    <aside className="
      w-64
      min-h-screen
      border-r
      bg-background
      p-5
    ">

      <h1 className="
        text-2xl
        font-bold
        mb-8
      ">
        Nexus
      </h1>


      <nav className="space-y-2">

        {menuItems.map((item)=>{

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-lg
                px-3
                py-2
                text-sm
                hover:bg-accent
              "
            >

              <Icon size={18}/>

              {item.title}

            </button>

          );

        })}

      </nav>


    </aside>

  );

}