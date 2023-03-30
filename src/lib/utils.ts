export const sliceString = (str: string, fullStops: number) => {
  let count = 0;
  let index = -1;

  // Find the index of the fifth full stop
  while (count < fullStops && (index = str.indexOf(".", index + 1)) !== -1) {
    count++;
  }

  // If there are fewer than 5 full stops, return the original string
  if (count < fullStops) {
    return str;
  }

  // Otherwise, slice the string up to the fifth full stop
  return str.slice(0, index + 1);
};
