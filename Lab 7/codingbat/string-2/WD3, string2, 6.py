def xyz_there(str):
  
  for i in range(3, len(str)):
    if str[i-3]!='.' and str[i-2]=='x' and str[i-1]=='y' and str[i]=='z': 
      return True
  
  if str[:3]=='xyz': return True
  
  return False