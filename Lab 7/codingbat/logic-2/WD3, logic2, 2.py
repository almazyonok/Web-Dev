def lone_sum(a, b, c):
  num = a
  if num == b:
    a = b = 0
  if num == c:
    a = c = 0
  if b == c:
    b = c = 0
  return a + b + c