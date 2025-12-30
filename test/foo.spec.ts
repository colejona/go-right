import foo from "../src/foo";

describe('foo', () => {
    it('adds numbers', () => {
        expect(foo(1, 2)).toBe(3);
    });
});
