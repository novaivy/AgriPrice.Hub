import { DashboardLayout } from "@/components/DashboardLayout";
import { TrendingUp, TrendingDown } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "Jan", maize: 3100, wheat: 4400, rice: 6500 },
  { month: "Feb", maize: 3050, wheat: 4350, rice: 6400 },
  { month: "Mar", maize: 3200, wheat: 4300, rice: 6550 },
  { month: "Apr", maize: 3300, wheat: 4250, rice: 6700 },
  { month: "May", maize: 3280, wheat: 4100, rice: 6650 },
  { month: "Jun", maize: 3350, wheat: 4150, rice: 6800 },
  { month: "Jul", maize: 3400, wheat: 4200, rice: 6750 },
  { month: "Aug", maize: 3450, wheat: 4200, rice: 6800 },
];

const commodities = [
  { name: "Maize", price: "KES 3,450/bag", change: "+5.2%", up: true },
  { name: "Wheat", price: "KES 4,200/bag", change: "-2.1%", up: false },
  { name: "Rice", price: "KES 6,800/bag", change: "+3.8%", up: true },
  { name: "Beans", price: "KES 8,100/bag", change: "+1.4%", up: true },
  { name: "Sorghum", price: "KES 2,900/bag", change: "-0.7%", up: false },
  { name: "Millet", price: "KES 3,600/bag", change: "+2.3%", up: true },
];

export default function MarketTrends() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Market Trends</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Track commodity price movements over time
          </p>
        </div>

        {/* Chart */}
        <div className="bg-card rounded-lg border shadow-sm p-5">
          <h2 className="font-semibold text-card-foreground mb-4">Price Trends (KES per bag)</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(140 15% 88%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(150 5% 45%)" }} />
                <YAxis tick={{ fontSize: 12, fill: "hsl(150 5% 45%)" }} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(0 0% 100%)",
                    border: "1px solid hsl(140 15% 88%)",
                    borderRadius: "8px",
                    fontSize: 13,
                  }}
                />
                <Area type="monotone" dataKey="maize" stroke="hsl(142 64% 32%)" fill="hsl(142 64% 32% / 0.15)" strokeWidth={2} />
                <Area type="monotone" dataKey="wheat" stroke="hsl(38 92% 50%)" fill="hsl(38 92% 50% / 0.1)" strokeWidth={2} />
                <Area type="monotone" dataKey="rice" stroke="hsl(200 70% 50%)" fill="hsl(200 70% 50% / 0.1)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-6 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-primary inline-block" /> Maize</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-warning inline-block" /> Wheat</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full inline-block" style={{ background: "hsl(200 70% 50%)" }} /> Rice</span>
          </div>
        </div>

        {/* Commodity cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {commodities.map((c) => (
            <div key={c.name} className="bg-card rounded-lg border p-5 shadow-sm flex items-center justify-between">
              <div>
                <p className="font-semibold text-card-foreground">{c.name}</p>
                <p className="text-lg font-bold text-card-foreground mt-1">{c.price}</p>
              </div>
              <div className={`flex items-center gap-1 text-sm font-semibold ${c.up ? "text-primary" : "text-chart-red"}`}>
                {c.up ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                {c.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
