def centered_average(nums):
  nums.sort()
  return sum(nums[1:len(nums)-1])//(len(nums)-2)