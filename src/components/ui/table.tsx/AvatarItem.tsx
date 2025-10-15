type UserProps = {
  firstName:string;
  avatarUrl?: string;
};

export default function AvatarItem({ firstName, avatarUrl }: UserProps) {
    const initials = firstName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={`flex items-center gap-2`}>
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={firstName}
          className="w-8 h-8 rounded-full object-cover"
        />
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">
          {initials}
        </div>
      )}
      <span className="font-medium text-gray-800">{firstName}</span>
    </div>
  );
}
