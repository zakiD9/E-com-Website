import { useEffect } from "react";

interface AlertMessageProps {
  message: string | null;
  type?: "success" | "error";
  visible: boolean;
  onClose: () => void;
}

export default function AlertMessage({ message, type = "error", visible, onClose }: AlertMessageProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div
      className={`fixed bottom-6 z-50 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white text-sm font-medium transition-all duration-500 ease-in-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      ${type === "error" ? "bg-red-500" : "bg-green-500"}`}
    >
      {message}
    </div>
  );
}
