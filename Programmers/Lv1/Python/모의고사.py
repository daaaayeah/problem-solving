def solution(answers):
    supo1 = [1, 2, 3, 4, 5]
    supo2 = [2, 1, 2, 3, 2, 4, 2, 5]
    supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    cnt = [0, 0, 0]
    
    for i in range(len(answers)):
        if answers[i] == supo1[i % len(supo1)]:
            cnt[0] += 1
        if answers[i] == supo2[i % len(supo2)]:
            cnt[1] += 1
        if answers[i] == supo3[i % len(supo3)]:
            cnt[2] += 1

    answer = []
    
    for i, v in enumerate(cnt):
        if v == max(cnt):
            answer.append(i + 1)

    return answer