def solution(array, commands):
    answer = []
    sli = []
    
    for i in range(len(commands)):
        sli = array[commands[i][0]-1:commands[i][1]]
        sli.sort()
        answer.append(sli[commands[i][2]-1])
    
    return answer