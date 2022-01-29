import math

def solution(n):
    result = 0

    for i in range(2, n+1):
        check = 0
        
        for j in range(2, int(math.sqrt(i)) + 1):
            if not i % j:
                check = 1
                break

        if not check:
            result += 1

    return(result)