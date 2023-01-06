from Cronometro import Cronometro
from random import shuffle

# Exercício 3
def selection_sort(array):
    length = len(array)

    for index in range(length - 1):
        min_element_index = index

        for search_index in range(index + 1, length):
            if array[search_index] < array[min_element_index]:
                min_element_index = search_index

        array[min_element_index], array[index] = array[index], array[min_element_index]

    return array


def insertion_sort(array):
    length = len(array)

    for index in range(1, length):
        key = array[index]
        new_position = index - 1

        while new_position >= 0 and array[new_position] > key:
            array[new_position + 1] = array[new_position]
            new_position = new_position - 1

        array[new_position + 1] = key

    return array


for algorithm in (insertion_sort, selection_sort):
    algorithm_name = algorithm.__name__

    sorted = list(range(10000))
    reversed_sorted = list(reversed(sorted))
    random = sorted[:]  # copia dos ordenados
    shuffle(random)  # embaralha eles

    print()
    
    with Cronometro(f"{algorithm_name} com entrada ordenada de {10000} números"):
        algorithm(sorted)

    with Cronometro(f"{algorithm_name} com entrada inversamente ordenada de {10000} números"):
        algorithm(reversed_sorted)

    with Cronometro(f"{algorithm_name} com entrada aleatória de {10000} números"):
        algorithm(random)

    print()


# Exercício 4
def bubble_sort(array):
    length = len(array)
    for ordered_elements in range(length - 1):
        for item in range(0, length - 1 - ordered_elements):
            if array[item] > array[item + 1]:
                array[item], array[item + 1] = array[item + 1], array[item]
    return array


def merge_sort(array, start=0, end=None):
    if end is None:
        end = len(array)
    if (end - start) > 1:
        mid = (start + end) // 2
        merge_sort(array, start, mid)
        merge_sort(array, mid, end)
        merge(array, start, mid, end)


def merge(array, start, mid, end):
    left = array[start:mid]
    right = array[mid:end]

    left_index, right_index = 0, 0

    for general_index in range(start, end):
        if left_index >= len(left):
            array[general_index] = right[right_index]
            right_index = right_index + 1
        elif right_index >= len(right):
            array[general_index] = left[left_index]
            left_index = left_index + 1
        elif left[left_index] < right[right_index]:
            array[general_index] = left[left_index]
            left_index = left_index + 1
        else:
            array[general_index] = right[right_index]
            right_index = right_index + 1


for algorithm in (bubble_sort, merge_sort):
    algorithm_name = algorithm.__name__

    sorted = list(range(10000))
    random = sorted[:]  # copia dos ordenados
    shuffle(random)  # embaralha eles

    print()

    with Cronometro(f"{algorithm_name} com entrada aleatória de {10000} números"):
        algorithm(random)

    print()


# Exercício 5
def binary_search(array, target):
    start = 0
    end = len(array) - 1

    while start <= end:
        mid = (start + end) // 2

        if array[mid] == target:
            return mid
        if target < array[mid]:
            end = mid - 1
        else:
            start = mid + 1

    raise ValueError(f"{target} is not in list")


array = [2, 3, 4, 10, 40]
target = 40

result = binary_search(array, target)
print(f"Elemento encontrado na posição: {result}")


# Exercício 6
def find_error_in_system(array, target):
    start = 0
    end = len(array) - 1

    while start <= end:
        mid = (start + end) // 2

        if array[mid] == target:
            end = mid - 1
        else:
            start = mid + 1

    return start


array1 = [True, True, True, True, False, False, False]
array2 = [True, True, False, False, False, False, False]
target = False

print("Saída array1:", find_error_in_system(array1))
print("Saída array2:", find_error_in_system(array2))
