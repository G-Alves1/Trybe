def iterative_countdown(n):
    while n > 0:
        print(n)
        n = n - 1
    print("FIM!")

iterative_countdown(5)


def iterative_factorial(n):
    fact = 1

    for i in range(1, n + 1):
        fact = fact * i
        print(fact)

    return fact

iterative_factorial(5)


def fibonacci(num):
    if (num <= 1):
        return num
    else:
        return fibonacci(num - 2) + fibonacci(num - 1)

fibonacci(5)