a = []
a = input().split()
k = 0

for i in range(1, len(a)):
    a[i-1]=int(a[i-1])
    a[i]=int(a[i])
    if a[i]>a[i-1]: k+=1

print(k)