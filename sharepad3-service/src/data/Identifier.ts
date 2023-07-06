export function identifier(length: number): string {
  let result = '';
  for (let i = 0; i < length; ++i) {
    result += Math.floor(Math.random() * 9).toString();
  }
  return result;
}
