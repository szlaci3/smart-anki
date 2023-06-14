export const rand = (size, exclude = null) => {
  if (size === 1) {
    return 0;
  }
  let result;
  do {
    result = Math.floor(Math.random() * size);
  } while (result === exclude);
  return result;
};
