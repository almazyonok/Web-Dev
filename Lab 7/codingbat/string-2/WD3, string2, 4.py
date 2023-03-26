def count_code(str):
  cnt = 0
  for x in range(len(str)-3):
    if str[x] == 'c' and str[x+1] == 'o' and str[x+3] == 'e':
      cnt += 1
  return cnt