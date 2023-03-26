def alarm_clock(day, vacation):
  return "7:00" if day > 0 and day < 6 and not vacation else 'off' if (day == 0 or day == 6) and vacation else "10:00"