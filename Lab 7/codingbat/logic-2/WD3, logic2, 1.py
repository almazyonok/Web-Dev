def make_bricks(small, big, goal):
  
  # if big==0 and small>=goal: return True
  
  if big>0 and small>=goal%5 and big>=goal//5: return True
  
  if goal - small <= big*5 and ((goal - small) % 5==0): return True
  
  if goal - big*5 <= small and goal - big*5 >=0: return True
  
  return False
