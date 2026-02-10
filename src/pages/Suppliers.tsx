import { DashboardLayout } from "@/components/DashboardLayout";
import { Phone, MessageSquare, MapPin, Star } from "lucide-react";

const suppliers = [
  { name: "Kenya Seed Company", category: "Seeds", location: "Kitale, Kenya", phone: "+254 700 123 456", rating: 4.8 },
  { name: "East Africa Chemicals", category: "Fertilizers", location: "Nairobi, Kenya", phone: "+254 711 234 567", rating: 4.5 },
  { name: "AgroChem Ltd", category: "Pesticides", location: "Nakuru, Kenya", phone: "+254 722 345 678", rating: 4.3 },
  { name: "Farm Equipment Kenya", category: "Equipment", location: "Eldoret, Kenya", phone: "+254 733 456 789", rating: 4.6 },
  { name: "SoilCare Solutions", category: "Soil Testing", location: "Thika, Kenya", phone: "+254 744 567 890", rating: 4.7 },
  { name: "HarvestPro Supplies", category: "Seeds & Tools", location: "Mombasa, Kenya", phone: "+254 755 678 901", rating: 4.2 },
];

export default function Suppliers() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Input Suppliers</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Find and contact trusted agricultural input suppliers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {suppliers.map((s) => (
            <div key={s.name} className="bg-card rounded-lg border shadow-sm p-5 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-card-foreground">{s.name}</h3>
                  <span className="inline-block mt-1 text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                    {s.category}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-warning">
                  <Star className="h-4 w-4 fill-current" />
                  {s.rating}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                {s.location}
              </div>

              <div className="flex gap-2 pt-2 border-t">
                <a
                  href={`tel:${s.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-1.5 text-sm bg-primary text-primary-foreground px-3 py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a
                  href={`sms:${s.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-1.5 text-sm bg-secondary text-secondary-foreground px-3 py-2 rounded-md hover:bg-secondary/80 transition-colors"
                >
                  <MessageSquare className="h-4 w-4" /> Message
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(s.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm bg-secondary text-secondary-foreground px-3 py-2 rounded-md hover:bg-secondary/80 transition-colors"
                >
                  <MapPin className="h-4 w-4" /> Map
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
