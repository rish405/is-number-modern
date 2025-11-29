export function isNumberModern(value: unknown): boolean {
  if (typeof value === 'number') return value === value;
  if (typeof value === 'string') {
    const s = value.trim();
    if (s.length === 0) return false;
    const n = Number(s);
    return n === n;
  }
  if (typeof value === 'object') {
    if (value === null) return false;
    if (value instanceof Number) {
      const n = value.valueOf();
      return n === n;
    }
    return false;
  }
  return false;
}

export { isNumberModern as isNumber };

