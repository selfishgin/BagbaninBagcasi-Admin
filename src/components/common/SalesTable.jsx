import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table/index";
import UserIcon from'../../icons/user-circle.svg'
const tableData = [
  {
    id: 1,
    customer: {
      image: UserIcon,
      name: "Aybeniz Memmedova",
    },
    dateTime: "18:03",
    totalPrice: "103",
    totalCount: "3",
    more: "button",
  },
  {
    id: 2,
    customer: {
      image: UserIcon,
      name: "Magaza Daxili",
    },
    dateTime: "12:05",
    totalPrice: "28.96",
    totalCount: "5",
    more: "button",
  },

];

export default function BasicTableOne() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Customer
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Time
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Total Price 
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Total Count
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                More
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={order.customer.image}
                        alt={order.customer.name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-18px dark:text-white/90">
                        {order.customer.name}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-18px dark:text-gray-400">
                  {order.dateTime}
                </TableCell>
                <TableCell className="px-4 py-3 text-red-500 text-start text-18px dark:text-red-400">
                  {order.totalPrice} ₼
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-18px dark:text-gray-400">
                  {order.totalCount} pieces
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-18px dark:text-gray-400">
                  <button className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                    See All
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
