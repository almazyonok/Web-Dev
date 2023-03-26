def sum67(nums):
  b = True
  sum = 0
  for x in nums:
    if x == 6:
      b = False
    elif x == 7 and not b:
      b = True
    elif b:
      sum += x
  return sum