def has22(nums):
  for x in range(len(nums)-1):
    if nums[x] == 2 and nums[x+1] == 2:
      return True
  return False