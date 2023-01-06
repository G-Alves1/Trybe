## Dada uma lista de numeros, retorne os numeros duplicados

def get_repeated(nums):
    seen_before = set()
    repeated = set()

    for num in nums:
        if num in seen_before:
            repeated.add(num)
        else:
          seen_before.add(num)
    
    return repeated

if __name__ == '__main__':
    nums = [ 1, 6, 3, 9, 6, 6, 3, -1, 4, 5, 7, 1 ]
  
    print(get_repeated(nums))
