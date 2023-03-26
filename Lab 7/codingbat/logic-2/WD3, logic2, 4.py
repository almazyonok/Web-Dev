def fix_teen(a):
  return 0 if a >= 13 and a <= 19 and a != 15 and a != 16 else a
def no_teen_sum(a, b, c):
  a = fix_teen(a)
  b = fix_teen(b)
  c = fix_teen(c)
  return a + b + c