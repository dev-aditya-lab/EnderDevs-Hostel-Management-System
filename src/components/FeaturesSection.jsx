import { CheckCircle, Building2, Users, ShieldCheck, Bell, CloudLightning, LayoutDashboard, DoorOpen } from "lucide-react";

const features = [
  { icon: Building2, title: "Multi-College Support", desc: "Colleges can manage their own hostels independently." },
  { icon: DoorOpen, title: "Real-Time Room Availability", desc: "Check & update room vacancies effortlessly." },
  { icon: Users, title: "Easy Student Registration", desc: "Self-registration for students in a few clicks." },
  { icon: ShieldCheck, title: "Secure Authentication", desc: "College & student login via Firebase." },
  { icon: LayoutDashboard, title: "Admin Dashboard", desc: "Monitor hostels, rooms, and students in one place." },
  { icon: Bell, title: "Instant Notifications", desc: "Colleges & students stay updated in real-time." },
  { icon: CloudLightning, title: "Cloud-Based & Fast", desc: "Built with modern tech for seamless access." },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-[#F8FAFC] text-center px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">⚡ Powerful Features to Simplify Hostel Management</h2>
        <p className="text-lg text-gray-600 mt-4">Everything you need to manage hostels efficiently.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <feature.icon className="w-10 h-10 text-[#2563eb]" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mt-1">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
