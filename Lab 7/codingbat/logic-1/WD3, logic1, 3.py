def squirrel_play(temp, is_summer):
  if temp>=60 and temp<=90 and not(is_summer): return True
  if temp>=60 and temp<=100 and (is_summer): return True
  return False