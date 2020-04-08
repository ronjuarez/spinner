const lines = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  '];

/*
if new is cur or greater than return new + cur every 0050s*/
  for (const line in lines) {
    setTimeout(() => {
    process.stdout.write(lines[line]);
}, 150 * line)
  }
