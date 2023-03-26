def cat_dog(str):
  kc=0
  kd=0
  for i in range(2, len(str)):
    if str[i-2] == 'c' and str[i-1] == 'a' and str[i] == 't':
      kc+=1
      continue
    
    if str[i-2] == 'd' and str[i-1] == 'o' and str[i] == 'g':
      kd+=1
      continue
      
  return kc==kd
    