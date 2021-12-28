def solution(n):
    trit = []
    
    while n:
        trit.append(n % 3)
        n //= 3
    
    trit.reverse()
    
    answer = 0
    
    for i in range(len(trit)):
        answer += 3**i * trit[i] 
    
    return answer