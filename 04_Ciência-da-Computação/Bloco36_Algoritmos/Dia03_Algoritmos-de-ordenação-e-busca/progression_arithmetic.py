def progression(array):
    if len(array) <= 2:
        return False

    array.sort()
    
    difference = array[1] - array[0]

    for i in range(1, len(array)):
        if array[i] - array[i-1] != difference:
            return False
    return True

print(progression([1,3,5]))
print(progression([1,4,5]))