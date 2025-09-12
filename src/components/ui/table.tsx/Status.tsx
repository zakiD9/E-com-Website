type StatusProps = {
  status?: string;
};

export default function Status({ status = "Active" }: StatusProps) {
  const isBlocked = status.toLowerCase() === "blocked";

  return (
    <div
      className={`rounded-full p-2 ${
        isBlocked ? "bg-red-100" : "bg-blue-100"
      }`}
    >
      <span
        className={`text-sm font-semibold ${
          isBlocked ? "text-red-600" : "text-primary"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
