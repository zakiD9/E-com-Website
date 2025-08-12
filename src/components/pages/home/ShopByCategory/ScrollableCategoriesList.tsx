import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import CategoryCard from "../../products/CategoryCard";

interface Category {
  id: number;
  name: string;
  image: string;
}

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475", // smartphone
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1520975618579-6ef1451eacb6", // clothing rack
  },
  {
    id: 3,
    name: "Home",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4", // cozy living room
  },
  {
    id: 4,
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1556228724-4b1a41a90de5", // beauty products
  },
  {
    id: 5,
    name: "Sports",
    image: "https://images.unsplash.com/photo-1526401485004-2e30b0e0b9e9", // athletic gear
  },
  {
    id: 6,
    name: "Books",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794", // open book stack
  },
  {
    id: 7,
    name: "Toys",
    image: "https://images.unsplash.com/photo-1587825140708-330ec1beef0d", // colorful toys
  },
  {
    id: 8,
    name: "Groceries",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af", // fruits and veggies
  },
  {
    id: 9,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1520975618579-6ef1451eacb6", // clothing rack
  },
  {
    id: 10,
    name: "Home",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4", // cozy living room
  },
  {
    id: 11,
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1556228724-4b1a41a90de5", // beauty products
  },
  {
    id: 12,
    name: "Sports",
    image: "https://images.unsplash.com/photo-1526401485004-2e30b0e0b9e9", // athletic gear
  },
  {
    id: 13,
    name: "Books",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794", // open book stack
  },
  {
    id: 14,
    name: "Toys",
    image: "https://images.unsplash.com/photo-1587825140708-330ec1beef0d", // colorful toys
  },
  {
    id: 15,
    name: "Groceries",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af", // fruits and veggies
  },
];


export default function CategorySlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10 hover:bg-gray-100"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide px-10"
      >
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat.name} image={cat.image}/>
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10 hover:bg-gray-100"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
