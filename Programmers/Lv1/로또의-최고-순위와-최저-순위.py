def solution(lottos, win_nums):
    highest = lowest = 6
    
    for i in lottos:
        if (i in win_nums):
            highest -= 1
            lowest -= 1
        elif (i == 0):
            highest -= 1
    
    if (lowest < 6):
        lowest += 1
        
    if (highest < 6):
        highest += 1
    
    return [highest, lowest]