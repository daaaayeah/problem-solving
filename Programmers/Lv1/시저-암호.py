def solution(s, n):
    s = list(s)
    
    for i in range(len(s)):
        if s[i] == ' ':
            continue
            
        if s[i].islower():
            if ord(s[i])+n > ord('z'):
                s[i] = chr(ord('a') + ((ord(s[i])+n) % ord('z')) - 1)
            else:
                s[i] = chr(ord(s[i])+n)
        elif s[i].isupper():
            if ord(s[i])+n > ord('Z'):
                s[i] = chr(ord('A') + ((ord(s[i])+n) % ord('Z')) - 1)
            else:
                s[i] = chr(ord(s[i])+n)
    
    return ''.join(s)