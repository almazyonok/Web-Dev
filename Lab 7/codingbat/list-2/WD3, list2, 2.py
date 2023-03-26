def big_diff(nums):
  mini = nums[0]
  maxi = nums[0]
  for x in nums:
    mini = min(mini, x)
    maxi = max(maxi, x)
  return maxi - mini