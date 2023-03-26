def make_chocolate(small, big, goal):
  a = goal//5
  if a > big:
    a = big
  goal -= a*5
  b = goal
  if b > small:
    b = small
  goal -= b
  return -1 if goal != 0 else b