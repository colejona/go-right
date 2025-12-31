import foo from "../src/foo";

describe('foo', () => {
    it('adds numbers', () => {
        expect(foo(2, 1)).toBe(3);
    });
});
