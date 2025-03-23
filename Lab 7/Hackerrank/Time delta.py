from datetime import datetime
import os

def time_delta(t1, t2):
    fmt = "%a %d %b %Y %H:%M:%S %z"
    dt1 = datetime.strptime(t1, fmt)
    dt2 = datetime.strptime(t2, fmt)
    return str(abs(int((dt1 - dt2).total_seconds())))

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    t = int(input())
    for _ in range(t):
        t1 = input()
        t2 = input()
        fptr.write(time_delta(t1, t2) + '\n')
    fptr.close()
