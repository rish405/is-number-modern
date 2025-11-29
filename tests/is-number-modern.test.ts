import { describe, it, expect } from 'vitest';
import { isNumberModern } from '../src/index';

describe('isNumberModern', () => {
  it('accepts number literals', () => {
    expect(isNumberModern(0)).toBe(true);
    expect(isNumberModern(1)).toBe(true);
    expect(isNumberModern(-1)).toBe(true);
    expect(isNumberModern(3.14)).toBe(true);
    expect(isNumberModern(-3.14)).toBe(true);
  });

  it('rejects NaN', () => {
    expect(isNumberModern(NaN)).toBe(false);
    expect(isNumberModern(new Number(NaN))).toBe(false);
  });

  it('accepts Number objects', () => {
    expect(isNumberModern(new Number(42))).toBe(true);
  });

  it('accepts Infinity values', () => {
    expect(isNumberModern(Infinity)).toBe(true);
    expect(isNumberModern(-Infinity)).toBe(true);
  });

  it('accepts numeric strings', () => {
    expect(isNumberModern('42')).toBe(true);
    expect(isNumberModern(' 42 ')).toBe(true);
    expect(isNumberModern('-3.14')).toBe(true);
    expect(isNumberModern('1e3')).toBe(true);
  });

  it('rejects non-numeric strings', () => {
    expect(isNumberModern('')).toBe(false);
    expect(isNumberModern('   ')).toBe(false);
    expect(isNumberModern('foo')).toBe(false);
    expect(isNumberModern('42px')).toBe(false);
    expect(isNumberModern('12 34')).toBe(false);
  });

  it('rejects non-numeric types', () => {
    expect(isNumberModern(true)).toBe(false);
    expect(isNumberModern(false)).toBe(false);
    expect(isNumberModern(null)).toBe(false);
    expect(isNumberModern(undefined)).toBe(false);
    expect(isNumberModern(Symbol('x'))).toBe(false);
    expect(isNumberModern([])).toBe(false);
    expect(isNumberModern({})).toBe(false);
    expect(isNumberModern(() => 1)).toBe(false);
    expect(isNumberModern(1n)).toBe(false);
    expect(isNumberModern(new Date())).toBe(false);
    expect(isNumberModern(new String('42'))).toBe(false);
  });
});

