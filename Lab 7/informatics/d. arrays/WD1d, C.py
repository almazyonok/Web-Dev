a = []
a = input().split()
k = 0

for i in range(len(a)):
    a[i] = int(a[i])
    if a[i] > 0: k+=1

print(k)