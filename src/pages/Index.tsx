import { DashboardLayout } from "@/components/DashboardLayout";
import { TrendingUp, TrendingDown, Users, Bell, DollarSign, BarChart3 } from "lucide-react";

const stats = [
  { label: "Avg. Maize Price", value: "KES 3,450/bag", change: "+5.2%", up: true, icon: DollarSign },
  { label: "Active Suppliers", value: "124", change: "+12", up: true, icon: Users },
  { label: "Price Alerts", value: "8 new", change: "3 critical", up: false, icon: Bell },
  { label: "Commodities Tracked", value: "18", change: "6 rising", up: true, icon: BarChart3 },
];

const recentPrices = [
  { commodity: "Maize", price: "KES 3,450", trend: "up", change: "+5.2%" },
  { commodity: "Wheat", price: "KES 4,200", trend: "down", change: "-2.1%" },
  { commodity: "Rice", price: "KES 6,800", trend: "up", change: "+3.8%" },
  { commodity: "Beans", price: "KES 8,100", trend: "up", change: "+1.4%" },
  { commodity: "Sorghum", price: "KES 2,900", trend: "down", change: "-0.7%" },
];

export default function Index() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Market overview and latest intelligence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card rounded-lg border p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-muted-foreground text-sm">{s.label}</span>
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-2xl font-bold text-card-foreground">{s.value}</p>
              <p className={`text-xs mt-1 flex items-center gap-1 ${s.up ? "text-primary" : "text-chart-red"}`}>
                {s.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {s.change}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Prices Table */}
        <div className="bg-card rounded-lg border shadow-sm">
          <div className="p-5 border-b">
            <h2 className="font-semibold text-card-foreground">Latest Market Prices</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left py-3 px-5 font-medium text-muted-foreground">Commodity</th>
                  <th className="text-left py-3 px-5 font-medium text-muted-foreground">Price</th>
                  <th className="text-left py-3 px-5 font-medium text-muted-foreground">Change</th>
                  <th className="text-left py-3 px-5 font-medium text-muted-foreground">Trend</th>
                </tr>
              </thead>
              <tbody>
                {recentPrices.map((item) => (
                  <tr key={item.commodity} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-5 font-medium text-card-foreground">{item.commodity}</td>
                    <td className="py-3 px-5 text-card-foreground">{item.price}</td>
                    <td className={`py-3 px-5 font-medium ${item.trend === "up" ? "text-primary" : "text-chart-red"}`}>
                      {item.change}
                    </td>
                    <td className="py-3 px-5">
                      {item.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-primary" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-chart-red" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
