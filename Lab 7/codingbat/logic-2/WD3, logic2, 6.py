def close_far(a, b, c):
  return True if abs(b-c) > 1 and (abs(a-b) < 2 and abs(a-c) > 1 or abs(a-c) < 2 and abs(a-b) > 1) else False