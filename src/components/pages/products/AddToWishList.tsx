import { useState } from "react";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

interface WishlistButtonProps {
  initialState?: boolean;
  size?: number;
  onToggle?: (isInWishlist: boolean) => void;
  variant?: "primary" | "default";
}

export default function WishlistButton({
  initialState = false,
  size = 24,
  onToggle,
  variant = "primary",
}: WishlistButtonProps) {
  const [isInWishlist, setIsInWishlist] = useState(initialState);

  const toggleWishlist = () => {
    const newState = !isInWishlist;
    setIsInWishlist(newState);
    onToggle?.(newState);
  };

  const variantStyles = {
    primary: {
      filled: "text-primary",
      outline: "text-primary hover:text-prhover",
    },
    default: {
      filled: "text-gray-800",
      outline: "text-gray-600 hover:text-gray-800",
    },
  };

  const currentStyle = variantStyles[variant];

  return (
    <button
      onClick={toggleWishlist}
      className="rounded-full transition-colors duration-300 ease-in-out"
    >
      {isInWishlist ? (
        <HeartSolid
          style={{ width: size, height: size }}
          className={currentStyle.filled}
        />
      ) : (
        <HeartOutline
          style={{ width: size, height: size }}
          className={currentStyle.outline}
        />
      )}
    </button>
  );
}
