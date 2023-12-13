export interface Instance {
  prices: {
    spot: number;
    on_demand: number;
    reserved: number;
  };
  family: string;
  type: string;
  instance_resources: {
    vcpu: number;
    ram: number;
  };
  allocatable_pods: number;
  system_reservation: {
    vcpu: number;
    ram: number;
  };
}
