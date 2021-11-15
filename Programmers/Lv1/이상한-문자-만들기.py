def solution(s):
    result = []
    idx = 0
    
    for i in s:
        if (i == ' '):
            result.append(i)
            idx = 0
            continue

        if (idx % 2):
            result.append(i.lower())
        else:
            result.append(i.upper())
        idx += 1
    
    return ''.join(result)