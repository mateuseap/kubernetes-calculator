from aws.resource_reservation import *
from data.resource_convertion import *

class Instances:
    def __init__(self):
        self.instances = []
    
    def add_instance(self, instance):
        self.instances.append(instance)

class Instance:
    def __init__(self, prices, family, type, instance_resources, allocatable_pods):
        self.prices = prices
        self.family = family
        self.type = type
        self.instance_resources = instance_resources
        self.allocatable_pods = allocatable_pods
        self.system_reservation = Resources(node_vcpu_reservation(self.instance_resources.vcpu), node_memory_reservation(self.allocatable_pods, 0))
        self.instance_resources.convert()

class Resources:
    def __init__(self, vcpu, ram):
        self.vcpu = vcpu
        self.ram = ram

    def convert(self):
        self.vcpu = vcpu_to_millicpu(self.vcpu)
        self.ram = gigabyte_to_mebibyte(self.ram)

class Prices:
    def __init__(self, spot, on_demand, reserved):
        self.spot = spot
        self.on_demand = on_demand
        self.reserved = reserved