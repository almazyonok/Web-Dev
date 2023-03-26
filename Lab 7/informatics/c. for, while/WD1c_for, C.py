a = int(input())
b = int(input())

for i in range(a, b+1):
    c = i**0.5
    if c%1 == 0: print(i, end=' ')