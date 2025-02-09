import { useState } from "react";
import { Mail, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import {Link} from "react-router-dom";

export default function ResetPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleReset = async () => {
        if (!email) {
            toast.error("Please enter your registered email.");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success("Reset link sent! Check your email.");
        }, 2000);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#BFDEFF] px-4">
            <Card className="w-full max-w-md shadow-md bg-white">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-semibold text-gray-900">
                        🔐 Forgot Your Password?
                    </CardTitle>
                    <p className="text-gray-600 text-sm">
                        No worries! Enter your email, and we’ll send you a reset link.
                    </p>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <Input
                                type="email"
                                placeholder="Enter your registered email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <Button
                            onClick={handleReset}
                            className="w-full bg-[#FED5E3] text-black hover:bg-[#F8B8CD]"
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="animate-spin" size={18} /> : "Send Reset Link"}
                        </Button>

                        <Button variant="outline" className="w-full">
                            <Link to="/login">
                            Back to Login
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
