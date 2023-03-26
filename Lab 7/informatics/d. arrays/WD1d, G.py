a = []
a = input().split()
maxIndex = 0
max = -1000000

for i in range(1, len(a)):
    a[i]=int(a[i])
    if a[i] > max:
        max = a[i] 
        maxIndex = i

print(a[maxIndex], maxIndex)