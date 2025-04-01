import EcommerceMetrics from "../components/ecommerce/EcommerceMetrics";
import DailySalesTable from "../components/ecommerce/DailySalesTable"

import PageMeta from "../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="DashBoard"
        description="Bagbanin Bagcasi Dashboard"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        
        <div className="col-span-12 space-y-6 xl:col-span-12">
          <EcommerceMetrics />
          <DailySalesTable/>
        </div>
      </div>
    </>
  );
}
