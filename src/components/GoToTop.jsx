import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <ArrowUp size={24} />
    </button>
  );
}
