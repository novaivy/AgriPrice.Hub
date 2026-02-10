import { AppSidebar } from "@/components/AppSidebar";
import { Leaf } from "lucide-react";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">{children}</main>
        <footer className="bg-primary text-primary-foreground text-center py-3 text-sm flex items-center justify-center gap-2">
          <Leaf className="h-4 w-4" />
          AgriPrice Hub &copy; {new Date().getFullYear()} — Empowering Farmers with Market Intelligence
        </footer>
      </div>
    </div>
  );
}
