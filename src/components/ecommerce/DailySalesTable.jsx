import ComponentCard from "../../components/common/ComponentCard";
import SalesTable from "../../components/common/SalesTable";

export default function BasicTables() {
  const today = new Date().toLocaleDateString("az-AZ"); 

  return (
    <>
      <div className="space-y-6">
        <ComponentCard title={`Daily Sales (${today})`}>
          <SalesTable />
        </ComponentCard>
      </div>
    </>
  );
}
