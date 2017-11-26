function timeDifference(current, previous) {

  const milliSecPerMin = 60 * 1000;
  const milliSecPerHour = milliSecPerMin * 60;
  const milliSecPerDay = milliSecPerHour * 24;
  const milliSecPerMonth = milliSecPerDay * 30; //an assumption to round numbers
  const milliSecPerYear = milliSecPerMonth * 12;

  const elapsed = current - previous;

  if(elapsed < milliSecPerMin / 3) {
    return 'just now'
  }

  if(elapsed < milliSecPerMin) {
    return 'less then a minute ago'
  }

  else if(elapsed < milliSecPerHour) {
    return `${Math.round(elapsed/milliSecPerMin)} min ago`
  }

  else if(elapsed < milliSecPerDay) {
    return `${Math.round(elapsed/milliSecPerHour)} h ago`
  }

  else if(elapsed < milliSecPerMonth) {
    return `${Math.round(elapsed/milliSecPerDay)} days ago`
  }

  else if(elapsed < milliSecPerYear) {
    return `${Math.round(elapsed/milliSecPerMonth)} month ago`
  }

  else {
    return `${Math.round(elapsed/milliSecPerYear)} years ago`
  }
}

export function timeDifferenceForDate(date) {
  const now = new Date().getTime();
  const updated = new Date(date).getTime();
  return timeDifference(now, updated)
}
