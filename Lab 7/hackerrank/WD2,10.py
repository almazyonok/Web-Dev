fullName = input()
a = fullName.split()

fullNameNew = ''
buf = ''

for i in a:
    if i[0]>='a' and i[0]<='z': buf= i[0].upper()
    fullNameNew+= buf + i[1:] + ' '

print(fullNameNew)