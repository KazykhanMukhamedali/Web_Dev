n = int(input())

if n < 100 and n % 4 == 0:
    print("YES")
elif n > 100 and n < 400 and n % 4 == 0 and n % 100 != 0:
    print("YES")
elif n >= 400 and n % 4 == 0 and n % 100 != 0 or n % 400 == 0:
    print("YES")
else:
    print("NO")