import GroupIcon from '../../icons/group.svg?react';
import BoxIconLine from '../../icons/box-line.svg?react';
import FlowerProducts from '../../icons/flower-products.svg?react';

const metrics = [
  {
    title: "Orders",
    value: "5,359",
    icon: <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />,
  },
  {
    title: "Customers",
    value: "3,782",
    icon: <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />,
  },
  {
    title: "Products",
    value: "258",
    icon: <FlowerProducts className="text-gray-800 size-6 dark:text-white/90" />,
  } 
];

export default function EcommerceMetrics() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            {metric.icon}
          </div>

          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {metric.title}
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {metric.value}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
