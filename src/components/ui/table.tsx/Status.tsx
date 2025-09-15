type StatusProps = {
  status?: string;
  size?: "small" | "medium" | "large";
};

export default function Status({ status = "Active", size = "medium" }: StatusProps) {
  const isBlocked = status.toLowerCase() === "blocked";

  const sizeClasses = {
    small: "px-2 py-0.5 text-xs",  
    medium: "px-3 py-1 text-sm",   
    large: "px-4 py-2 text-base",  
  };

  return (
    <div
      className={`rounded-full w-fit ${sizeClasses[size]} ${
        isBlocked ? "bg-red-100" : "bg-blue-100"
      }`}
    >
      <span
        className={`font-semibold ${
          isBlocked ? "text-red-600" : "text-primary"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
