import { LayoutDashboard, TrendingUp, Users, Bell, Leaf, PanelLeftClose, PanelLeft } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Market Trends", url: "/market-trends", icon: TrendingUp },
  { title: "Suppliers", url: "/suppliers", icon: Users },
  { title: "Alerts", url: "/alerts", icon: Bell },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`${
        collapsed ? "w-16" : "w-60"
      } flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-200 min-h-screen`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 h-16 border-b border-sidebar-border">
        <Leaf className="h-7 w-7 text-sidebar-primary shrink-0" />
        {!collapsed && (
          <span className="font-bold text-lg tracking-tight text-sidebar-foreground">
            AgriPrice Hub
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 space-y-1 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <NavLink
              key={item.title}
              to={item.url}
              end
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary font-semibold"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
              }`}
              activeClassName=""
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center h-12 border-t border-sidebar-border text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors"
      >
        {collapsed ? <PanelLeft className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
      </button>
    </aside>
  );
}
