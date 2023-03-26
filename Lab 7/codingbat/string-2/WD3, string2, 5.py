def end_other(a, b):
  a = a.lower()
  b = b.lower()
  n = len(a) if len(a) < len(b) else len(b)
  for x in range(n):
    if a[-1-x] != b[-1-x]:
      return False
  return True