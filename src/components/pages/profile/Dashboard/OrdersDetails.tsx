import { ArchiveBoxIcon, ClockIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    label: 'Total Orders',
    value: 66,
    icon: <ArchiveBoxIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    label: 'Pending Orders',
    value: 12,
    icon: <ClockIcon className="h-6 w-6 text-gray-500" />,
  },
  {
    label: 'Completed Orders',
    value: 34,
    icon: <ArchiveBoxIcon className="h-6 w-6 text-gray-500" />,
  },
];

export default function OrdersDetails() {
  return (
    <div className="flex gap-3 w-full">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex gap-5 items-center bg-gray-300 rounded-md px-5 py-3 min-w-[235px]"
        ><span className="bg-white rounded p-2">{stat.icon}</span>
          <div className="flex flex-col gap-2 mb-2">
            <span className="text-xl font-semibold text-gray-700">{stat.value}</span>
            <span className="text-sm text-gray-600">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}