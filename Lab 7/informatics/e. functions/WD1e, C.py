def xor(x, y):
    x = bool(int(x))
    y = bool(int(y))

    return bool((x and not y) or (not x and y))

x, y = input().split()

print(xor(x,y))