a = []
a = input().split()

for i in range(len(a)):
    a[i] = int(a[i])
    if a[i] % 2 == 0: print(a[i], end=' ')