import { useState } from "react";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

interface WishlistButtonProps {
  initialState?: boolean; 
  size?: number; 
  onToggle?: (isInWishlist: boolean) => void; 
}

export default function WishlistButton({
  initialState = false,
  size = 24,
  onToggle
}: WishlistButtonProps) {
  const [isInWishlist, setIsInWishlist] = useState(initialState);

  const toggleWishlist = () => {
    const newState = !isInWishlist;
    setIsInWishlist(newState);
    onToggle?.(newState);
  };

  return (
    <button
      onClick={toggleWishlist}
      className="p-1 rounded-full transition-colors  duration-300 ease-in-out">
      {isInWishlist ? (
        <HeartSolid
          style={{ width: size, height: size }}
          className="text-primary"
        />
      ) : (
        <HeartOutline
          style={{ width: size, height: size }}
          className="text-primary hover:text-prhover"
        />
      )}
    </button>
  );
}
