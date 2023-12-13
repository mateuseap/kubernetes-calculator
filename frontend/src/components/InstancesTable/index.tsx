import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Instance } from "../../types";

function InstanceTable() {
  const { data, isLoading } = useQuery<{ instances: Array<Instance> }>({
    queryKey: [`mock`, "GET"],
    retry: false,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const filteredInstances = data?.instances.filter((instance) =>
    instance.family.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 shadow-md">
      <h1 className="font-bold mb-4 text-center">
        AWS Kubernetes Instances
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Family"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded text-sm"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-sm bg-slate-500	text-white border">Family</th>
              <th className="px-4 py-2 text-sm bg-slate-500	text-white border">Type</th>
              <th className="px-4 py-2 text-sm bg-slate-500	text-white border">VCPU</th>
              <th className="px-4 py-2 text-sm bg-slate-500	text-white border">RAM</th>
              <th className="px-4 py-2 text-sm bg-slate-500	text-white border">Allocatable Pods</th>
              <th className="px-4 py-2 text-sm bg-slate-500	text-white border">Spot Price</th>
              <th className="px-4 py-2 text-sm bg-slate-500	text-white border">On Demand Price</th>
              <th className="px-4 py-2 text-sm bg-slate-500	text-white border">Reserved Price</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              filteredInstances &&
              filteredInstances.map((instance) => (
                <tr key={instance.type}>
                  <td className="border px-4 py-2 text-sm">{instance.family}</td>
                  <td className="border px-4 py-2 text-sm">{instance.type}</td>
                  <td className="border px-4 py-2 text-sm">
                    {instance.instance_resources.vcpu}
                  </td>
                  <td className="border px-4 py-2 text-sm">
                    {instance.instance_resources.ram}
                  </td>
                  <td className="border px-4 py-2 text-sm">
                    {instance.allocatable_pods}
                  </td>
                  <td className="border px-4 py-2 text-sm">{instance.prices.spot}</td>
                  <td className="border px-4 py-2 text-sm">
                    {instance.prices.on_demand}
                  </td>
                  <td className="border px-4 py-2 text-sm">
                    {instance.prices.reserved}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InstanceTable;
