# Exercício 1
def calc_max_time(values):
    max_time = 0
    current_time = 0

    for index in values:
        if index == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time > max_time:
            max_time = current_time

    return max_time

print(calc_max_time([0, 1, 1, 1, 0, 0, 1, 1]))
print(calc_max_time([1, 1, 1, 1, 0, 0, 1, 1]))


# Exercício 2
def shuffle(items):
    answer = []
    piles_of_cards = len(items) // 2

    for index in range(0, piles_of_cards):
        answer.extend(items[index::piles_of_cards])

    return answer

print(shuffle([2, 6, 4, 5]))
print(shuffle([1, 4, 4, 7, 6, 6]))


# Exercício 3
def count_pair(numbers):
    quant = 0

    for index in range(0, len(numbers)):
        for index2 in range(index + 1, len(numbers)):
            if numbers[index] == numbers[index2]:
                quant += 1

    return quant

print(count_pair([1, 3, 1, 1, 2, 3]))
print(count_pair([1, 1, 2, 3]))


# Exercício 4
def students_in_instant(entry, leave, instant):
    result = 0
    for index in range(len(entry)):
        if entry[index] < instant < leave[index]:
            result += 1
    return result

# Exercício 5