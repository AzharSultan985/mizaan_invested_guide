import {
  LayoutDashboard,
  Users,
  FileText,
} from "lucide-react";

export default function Sidebar({
  activePage,
  setActivePage,
}) {
  const menus = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "users",
      title: "Users",
      icon: Users,
    },
    {
      id: "articles",
      title: "Articles",
      icon: FileText,
    },
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 shadow-lg">

      {/* Logo */}

      <div className="h-24 flex items-center justify-center border-b border-slate-200">

        <div>

          <h2 className="text-3xl font-black tracking-wide">

            <span className="text-slate-900">
              MIZAAN
            </span>

            <span className="text-emerald-600">
              {" "}INVEST
            </span>

          </h2>

          <p className="text-xs text-slate-500 text-center mt-1 tracking-widest uppercase">

            Admin Panel

          </p>

        </div>

      </div>

      {/* Navigation */}

      <div className="p-5 space-y-3">

        {menus.map((menu) => {

          const Icon = menu.icon;

          return (
            <button
              key={menu.id}
              onClick={() => setActivePage(menu.id)}
              className={`w-full flex items-center gap-4 rounded-xl px-5 py-4 transition font-medium cursor-pointer

              ${
                activePage === menu.id
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-600"
              }`}
            >
              <Icon size={22} />

              {menu.title}
            </button>
          );
        })}
      </div>

    </aside>
  );
}