import { DashboardLayout } from "@/components/DashboardLayout";
import { AlertTriangle, TrendingUp, TrendingDown, Info } from "lucide-react";

const alerts = [
  { type: "critical", title: "Maize prices surging in Rift Valley", message: "Maize prices have risen 12% in the last 48 hours across Uasin Gishu and Trans Nzoia counties.", time: "2 hours ago", icon: AlertTriangle },
  { type: "warning", title: "Wheat price drop expected", message: "Analysts forecast a 5-8% decline in wheat prices over the next two weeks due to increased imports.", time: "5 hours ago", icon: TrendingDown },
  { type: "info", title: "New fertilizer supplier onboarded", message: "GreenGrow Fertilizers is now available in the suppliers directory with competitive DAP pricing.", time: "1 day ago", icon: Info },
  { type: "critical", title: "Bean shortage in Western Kenya", message: "Supply chain disruptions have caused bean prices to spike 18% in Kakamega and Bungoma.", time: "1 day ago", icon: AlertTriangle },
  { type: "info", title: "Rice prices stabilizing", message: "After weeks of volatility, Mwea rice prices have stabilized around KES 6,800/bag.", time: "2 days ago", icon: TrendingUp },
  { type: "warning", title: "Sorghum demand increasing", message: "Beverage companies are increasing sorghum procurement, which may push prices up 3-5%.", time: "3 days ago", icon: TrendingUp },
];

const typeStyles: Record<string, string> = {
  critical: "border-l-4 border-l-chart-red bg-chart-red/5",
  warning: "border-l-4 border-l-warning bg-warning/5",
  info: "border-l-4 border-l-primary bg-primary/5",
};

const iconStyles: Record<string, string> = {
  critical: "text-chart-red",
  warning: "text-warning",
  info: "text-primary",
};

export default function Alerts() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Price Alerts</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Stay informed about market changes that affect you
          </p>
        </div>

        <div className="space-y-3">
          {alerts.map((a, i) => (
            <div key={i} className={`bg-card rounded-lg border shadow-sm p-5 ${typeStyles[a.type]}`}>
              <div className="flex items-start gap-3">
                <a.icon className={`h-5 w-5 mt-0.5 shrink-0 ${iconStyles[a.type]}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-card-foreground text-sm">{a.title}</h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{a.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{a.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
