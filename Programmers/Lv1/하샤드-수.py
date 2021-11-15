def solution(x):
    num = x
    sum = 0
    
    while (x):
        sum += x % 10
        x = x // 10
    
    return num % sum == 0