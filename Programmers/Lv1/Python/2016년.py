def solution(a, b):
    month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
    
    if a > 1:
        b += sum(month[:a-1])
    
    return day[b%7]