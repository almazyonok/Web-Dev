def min(a, b, c, d):
    a = int(a)
    b = int(b)
    c = int(c)
    d = int(d)
    if a <= b and a <= c and a <= d:
        return a
    if b <= a and b <= c and b <= d:
        return b
    if c <= a and c <= b and c <= d:
        return c
    return d

a, b, c, d = input().split()

print(min(a, b, c, d))