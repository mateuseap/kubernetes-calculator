# https://docs.aws.amazon.com/batch/latest/userguide/memory-cpu-batch-eks.html#memory-cpu-batch-eks-node-cpu-reservations
def node_vcpu_reservation(vcpu):
    reservation = (1 * 60)
    if vcpu > 1:
        reservation = reservation + (1 * 10)
    if vcpu > 2:
        reservation = reservation + (1 * 5)
    if vcpu > 3:
        reservation = reservation + (1 * 5)
    if vcpu > 4:
        reservation = reservation + ((vcpu - 4) * 2.5)
    
    return reservation

# https://docs.aws.amazon.com/batch/latest/userguide/memory-cpu-batch-eks.html#memory-cpu-batch-eks-node-memory-reservations
def node_memory_reservation(allocatable_pods, hard_eviction_limit):
    return 255 + (11 * allocatable_pods) + hard_eviction_limit