def parrot_trouble(talking, hour):
  return (talking and (hour < 7 or hour > 20))
  # Need extra parenthesis around the or clause
  # since and binds more tightly than or.
  # and is like arithmetic *, or is like arithmetic +