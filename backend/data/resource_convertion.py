def gigabyte_to_mebibyte(gigabyte):
    return int(gigabyte * 953.674)


def vcpu_to_millicpu(vcpu):
    return int(vcpu * 1000)


def mebibyte_to_gigabyte(mebibyte):
    return int(mebibyte / 953.674)


def millicpu_to_vcpu(millicpu):
    return int(millicpu / 1000)
