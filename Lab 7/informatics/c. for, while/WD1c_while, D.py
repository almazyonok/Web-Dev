a = int(input())
x = True

while a>=2:
    if a%2!=0: 
        x = False
        break
    a/=2

if x and a>=1: 
    print('YES') 
else: 
    print('NO')