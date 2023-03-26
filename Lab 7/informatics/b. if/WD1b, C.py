a = int(input())
r = int(input())
sym = False
if a//100 == (a%10*10 + (a%100)//10): sym = True

if sym and r==1: print('YES')
elif not(sym) and r!=1: print('YES')
else: print('NO')