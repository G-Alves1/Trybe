# Dado um array de números, verifiquem se o array possui algum elemento duplicado.
# Sua função deve retornar True se algum valor aparece pelo menos duas vezes 
# no array e False caso todos os elementos sejam distintos.

def contains_duplicate(nums):
    nums.sort()
    for index in range(len(nums)-1):
        if nums[index] == nums[index+1]:
            return True
    return False


test1 = [1, 2, 3, 1]                          # saída: True
test2 = []                                    # saída: False
test3 = [1, 2, 3, 4]                          # saída: False
test4 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]        # saída: True

print(contains_duplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))