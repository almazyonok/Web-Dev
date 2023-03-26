a = []
a = input().split()

for i in range(1, len(a)):
    a[i-1]=int(a[i-1])
    a[i]=int(a[i])
    if a[i]>a[i-1]: print(a[i], end=' ')