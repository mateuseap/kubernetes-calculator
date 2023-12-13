import InstancesTable from "../../components/InstancesTable";
import RangeSliders from "../../components/RangeSliders";

function Home() {
  return (
    <div className="h-screen w-full flex p-16 gap-x-12">
      <div className="w-full">
        <InstancesTable />
      </div>
      <div className="w-full">
        <RangeSliders />
      </div>
    </div>
  );
}

export default Home;
