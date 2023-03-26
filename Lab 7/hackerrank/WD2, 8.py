n = int(input())
a = input().split()
max = -101
max2 = -101

for i in range(n):
    a[i]=int(a[i])
    if a[i]>max: max=a[i]

for i in range(n):
    if a[i]>max2 and a[i]<max: max2=a[i]

print(max2)