export default (phrase: string): string => {
  return phrase
    .toLowerCase()
    .replace(/[^\w ]/g, '')
    .split(' ')
    .join('-');
};
