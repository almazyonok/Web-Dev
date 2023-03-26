def power(a, n):
    a = int(a)
    n = int(n)
    res = 1
    for i in range (n):
        res*=a
    return res

a, n = input().split()

print(power(a, n))