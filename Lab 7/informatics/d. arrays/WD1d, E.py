a = []
a = input().split()

for i in range(1, len(a)):
    a[i-1]=int(a[i-1])
    a[i]=int(a[i])
    if a[i]>0 and a[i-1]>0: 
        print(a[i-1], a[i])
        break
    elif a[i]<0 and a[i-1]<0:
        print(a[i-1], a[i])
        break