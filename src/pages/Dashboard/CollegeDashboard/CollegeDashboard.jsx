import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, ClipboardList, BarChart, Settings, LogOut } from "lucide-react";

export default function CollegeDashboard() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md p-5 space-y-6">
                <h2 className="text-xl font-bold">🏫 College Dashboard</h2>
                <nav className="space-y-4">
                    <NavItem icon={Home} text="Dashboard" />
                    <NavItem icon={Building} text="Hostels & Rooms" />
                    <NavItem icon={ClipboardList} text="Student Registrations" />
                    <NavItem icon={BarChart} text="Reports & Analytics" />
                    <NavItem icon={Settings} text="Settings" />
                    <NavItem icon={LogOut} text="Logout" className="text-red-600" />
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <h1 className="text-3xl font-bold">🏫 Welcome to Your College Dashboard</h1>
                <p className="text-gray-600 mt-2">Manage hostels, track room availability, and oversee student registrations in one place.</p>

                {/* Dashboard Widgets */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <DashboardCard title="Total Hostels" value="5" />
                    <DashboardCard title="Total Rooms" value="120" />
                    <DashboardCard title="Available Rooms" value="30" />
                    <DashboardCard title="Total Students" value="350" />
                    <DashboardCard title="Pending Requests" value="12" />
                </div>

                {/* Action Buttons */}
                <div className="mt-8 space-x-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">Add New Hostel</Button>
                    <Button className="bg-green-600 hover:bg-green-700">Add New Room</Button>
                    <Button className="bg-yellow-500 hover:bg-yellow-600">View Student Applications</Button>
                </div>
            </main>
        </div>
    );
}

// Reusable Sidebar Item
function NavItem({ icon: Icon, text, className }) {
    return (
        <button className={`flex items-center gap-3 w-full px-4 py-2 rounded-md hover:bg-gray-200 ${className}`}>
            <Icon className="w-5 h-5" />
            {text}
        </button>
    );
}

// Reusable Dashboard Card
function DashboardCard({ title, value }) {
    return (
        <Card className="bg-white shadow-md">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">{value}</CardContent>
        </Card>
    );
}
