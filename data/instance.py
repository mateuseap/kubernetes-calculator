class Instances:
    def __init__(self):
        self.instances = []
    
    def add_instance(self, instance):
        self.instances.append(instance)

class Instance:
    def __init__(self, prices, family, type, vcpu, ram):
        self.prices = prices
        self.family = family
        self.type = type
        self.vcpu = vcpu
        self.ram = ram

class Prices:
    def __init__(self, spot, on_demand, reserved):
        self.spot = spot
        self.on_demand = on_demand
        self.reserved = reserved