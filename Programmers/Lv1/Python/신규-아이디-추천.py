import re

def solution(new_id):
    second = ["-", "_", "."]
    
    # 1
    new_id = new_id.lower()
    
    # 2
    for i in new_id:
        if (i not in second and not i.isalnum()):
            new_id = new_id.replace(i, "")
            
    # 3
    new_id = re.sub("[.]{2,}", ".", new_id)
    
    # 4
    new_id = new_id.strip(".")
            
    # 5
    if (not new_id):
        new_id = "a"
    
    # 6
    if (len(new_id) >= 16):
        new_id = new_id[:15]
        if (new_id[-1] == "."):
            new_id = new_id.rstrip(".")
    
    # 7
    while (len(new_id) < 3):
        new_id += new_id[-1]
    
    return new_id