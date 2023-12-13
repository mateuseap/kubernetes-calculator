import { useState } from "react";

function RangeSliders() {
  const [memoryRequest, setMemoryRequest] = useState(64);
  const [cpuRequest, setCpuRequest] = useState(11);
  const [memoryLimit, setMemoryLimit] = useState(64);
  const [cpuLimit, setCpuLimit] = useState(11);
  const [memoryDaemonsets, setMemoryDaemonsets] = useState(64);
  const [cpuDaemonsets, setCpuDaemonsets] = useState(11);

  const sliders = [
    {
      name: "Pod requests",
      memoryId: "memoryRequest",
      cpuId: "cpuRequest",
      memoryValue: memoryRequest,
      cpuValue: cpuRequest,
      onMemoryChange: (e: any) => setMemoryRequest(Number(e.target.value)),
      onCpuChange: (e: any) => setCpuRequest(Number(e.target.value)),
    },
    {
      name: "Pod limits",
      memoryId: "memoryLimit",
      cpuId: "cpuLimit",
      memoryValue: memoryLimit,
      cpuValue: cpuLimit,
      onMemoryChange: (e: any) => setMemoryLimit(Number(e.target.value)),
      onCpuChange: (e: any) => setCpuLimit(Number(e.target.value)),
    },
    {
      name: "Daemonsets & agents",
      memoryId: "memoryDaemonsets",
      cpuId: "cpuDaemonsets",
      memoryValue: memoryDaemonsets,
      cpuValue: cpuDaemonsets,
      onMemoryChange: (e: any) => setMemoryDaemonsets(Number(e.target.value)),
      onCpuChange: (e: any) => setCpuDaemonsets(Number(e.target.value)),
    },
  ];

  return (
    <div className="flex flex-col gap-y-6 xl:flex-row xl:gap-x-14 justify-center items-center">
      {sliders.map((slider) => (
        <div className="flex flex-col gap-y-4 w-full xl:w-1/2 shadow-md p-4">
          <h2 className="font-bold text-sm">{slider.name}</h2>
          <label
            className="flex justify-between items-center"
            htmlFor={slider.memoryId}
          >
            <span className="text-sm font-medium">Memory</span>
            <input
              type="number"
              min="64"
              max="16000"
              step="1"
              value={slider.memoryValue}
              onChange={(e) => slider.onMemoryChange(e)}
              className="px-2 py-1 border rounded text-sm w-20 text-black"
            />
          </label>
          <input
            type="range"
            id={slider.memoryId}
            min="11"
            max="4000"
            step="1"
            defaultValue="11"
            value={slider.memoryValue}
            onChange={slider.onMemoryChange}
          />
          <div className="border-b border-white" />
          <label
            className="flex justify-between items-center"
            htmlFor={slider.cpuId}
          >
            <span className="text-sm font-medium">CPU</span>
            <input
              type="number"
              min="11"
              max="4000"
              step="1"
              value={slider.cpuValue}
              onChange={(e) => slider.onCpuChange(e)}
              className="px-2 py-1 border rounded text-sm w-20 text-black"
            />
          </label>
          <input
            type="range"
            id={slider.cpuId}
            min="11"
            max="4000"
            step="1"
            defaultValue="11"
            value={slider.cpuValue}
            onChange={slider.onCpuChange}
          />
        </div>
      ))}
    </div>
  );
}

export default RangeSliders;
