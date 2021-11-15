def solution(s):
    st = list(s)
    st.sort(reverse=True)
    
    return ''.join(st)