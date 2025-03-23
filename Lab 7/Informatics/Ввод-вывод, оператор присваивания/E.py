v = int(input())
t = int(input())

x = v*t

if x > 0:
    while x > 109:
        x -= 109
    print(x)

if x < 0:
    while x < 0:
        x += 109
    print(x)
