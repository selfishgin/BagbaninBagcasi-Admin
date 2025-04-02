import ComponentCard from "../common/ComponentCard";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table/index";
import SeeAllProduct from "../product/SeeAllProduct";
import { useState } from "react";

export default function BasicTables({tableData}) {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSeeAll = (Product) => {
    setSelectedProduct(Product);
    setIsModalOpen(true);
    };


    return (
        <div className="space-y-6">
          <ComponentCard title="Products">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
              <div className="max-w-full overflow-x-auto">
                <Table>
                  <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                    <TableRow>
                      <TableCell
                        isHeader
                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                      >
                        Product
                      </TableCell>
                      <TableCell
                        isHeader
                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                      >
                        Debt History
                      </TableCell>
                      <TableCell
                        isHeader
                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                      >
                        Order History
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
                    {tableData.map((item, index) => (
                      <TableRow key={item.id}>
                        <TableCell className="px-5 py-4 sm:px-6 text-start">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500 dark:text-white/70">{index + 1}.</span>
                                <div className="w-9 h-9 overflow-hidden rounded-full">
                                    <img
                                        width={36}
                                        height={36}
                                        src={item.Product.image}
                                        alt={item.Product.fullName}
                                    />
                                </div>
                                <span className="block font-medium text-gray-800 text-16px dark:text-white/90">
                                {item.Product.fullName}
                                </span>
                            </div>
                        </TableCell>
    
                        <TableCell className="px-4 py-3 text-start">
                          <button className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                            Debts
                          </button>
                        </TableCell>
    
                        <TableCell className="px-4 py-3 text-start">
                          <button className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                            Orders
                          </button>
                        </TableCell>
    
                        <TableCell className="px-4 py-3 text-start">
                          <button onClick={() => handleSeeAll(item.Product)} 
                            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                            See All
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </ComponentCard>
          <SeeAllProduct isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} Product={selectedProduct} />
        </div>
    );
}
