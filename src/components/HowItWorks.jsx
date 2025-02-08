import { School, Home, Users, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-6 text-center bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">
          🚀 How It Works – Get Started in 3 Simple Steps
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Colleges Section */}
          <div className="bg-[#BFDEFF] p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-black mb-6">For Colleges</h3>
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-4">
                <School className="text-black" size={28} />
                <p className="text-lg text-black">Sign Up Your College – Register your college and add hostels.</p>
              </div>
              <div className="flex items-center gap-4">
                <Home className="text-black" size={28} />
                <p className="text-lg text-black">Add Hostel & Rooms – Define room types and vacancies.</p>
              </div>
              <div className="flex items-center gap-4">
                <Users className="text-black" size={28} />
                <p className="text-lg text-black">Manage Everything – Track students, rooms, and availability.</p>
              </div>
            </div>
          </div>

          {/* Students Section */}
          <div className="bg-[#BFF5DC] p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-black mb-6">For Students</h3>
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-4">
                <Users className="text-black" size={28} />
                <p className="text-lg text-black">Sign Up & Select Your College – Choose from registered colleges.</p>
              </div>
              <div className="flex items-center gap-4">
                <Home className="text-black" size={28} />
                <p className="text-lg text-black">Pick Your Hostel & Room Type – Single, Double, or Triple sharing.</p>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="text-black" size={28} />
                <p className="text-lg text-black">Confirm & Move In – Secure your hostel accommodation hassle-free.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
