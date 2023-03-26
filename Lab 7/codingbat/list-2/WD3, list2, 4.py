def sum13(nums):
  sum = 0
  b = True
  for x in nums:
    if x == 13:
      b = False
    elif not b:
      b = True
    else:
      sum += x
  return sum