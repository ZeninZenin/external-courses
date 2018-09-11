const task = require('~utils').createTask('ex3_js-objects-part1');

describe('Ex3. JS Objects Part 1', () => {
    task('02', code => {
        beforeAll(() => spyOn(console, 'log'));

        const obj = {a: 1};

        test("should be called once for 'obj' object", () => {
            code(obj);
            expect(console.log.calls.count()).toBe(1);
        });
    });

    task('03', code => {
        const obj = {a: 1};

        test("should return 'true' if key exists in object", () =>
            expect(code('a', obj)).toBeTruthy());

        test("should return 'false' if key not exists in object", () =>
            expect(code('b', obj)).toBeFalsy());
    });

    task('04', code => {
        const obj = {a: 1};

        test('should leave property unchanged if it exists', () => {
            code('a', obj);
            expect(obj.a).toBe(1);
        });

        test("should set 'new' to property if it doesn't exist", () => {
            code('b', obj);
            expect(obj.b).toBe('new');
        });
    });

    task('05', code => {
        const obj = {a: 1};

        test('should return the same reference after cloning', () => {
            expect(obj === code(obj)).toBeFalsy();
        });
    });

    task('06', code => {
        const obj = {a: 1, b: {c: 0}, e: {f: [{g: 1}]}};
        const objCopy = code(obj);

        test('should create object with new references for non-primitive values', () => {
            expect(obj === objCopy).toBeFalsy();
            expect(obj.b === objCopy.b).toBeFalsy();
            expect(obj.e === objCopy.e).toBeFalsy();
            expect(obj.e.f === objCopy.e.f).toBeFalsy();
        });

        test('should copy all properties', () => {
            expect(obj).toEqual(objCopy);
        });
    });
});
