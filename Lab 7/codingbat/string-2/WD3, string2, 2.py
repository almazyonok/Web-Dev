def count_hi(str):
  k=0
  for i in range(1, len(str)):
    if str[i-1] == 'h' and str[i] == 'i':
      k+=1
      continue
  return k