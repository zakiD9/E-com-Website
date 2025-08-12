import {
  TruckIcon,
  ArrowUturnLeftIcon,
  ShieldCheckIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

export default function ServicesSection() {
  return (
    <div className="max-w-7xl mx-auto ">

      <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center text-center py-6 bg-white hover:shadow-lg transition-shadow duration-500">
          <TruckIcon className="w-12 h-12 text-gray-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Fast & Reliable Delivery</h3>
          <p className="text-gray-600 text-sm">
            Delivery in 24H
          </p>
        </div>

        <div className="flex flex-col items-center text-center py-6 bg-white hover:shadow-lg transition-shadow duration-500">
          <ArrowUturnLeftIcon className="w-12 h-12 text-gray-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
          <p className="text-gray-600 text-sm">
           100% money-back guarantee
          </p>
        </div>

        <div className="flex flex-col items-center text-center py-6 bg-white  hover:shadow-lg transition-shadow duration-500">
          <ShieldCheckIcon className="w-12 h-12 text-gray-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
          <p className="text-gray-600 text-sm">
            Your money-is safe
          </p>
        </div>

        <div className="flex flex-col items-center text-center py-6 bg-white hover:shadow-lg transition-shadow duration-500">
          <LifebuoyIcon className="w-12 h-12 text-gray-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600 text-sm">
            Live contact/message
          </p>
        </div>
      </div>
    </div>
  );
}
