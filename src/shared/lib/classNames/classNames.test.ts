import { classNames } from 'shared/lib/classNames/classNames';

describe('Тестирование функции classNames', () => {
    test('Для одного класса', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('С модами', () => {
        expect(
            classNames(
                'someClass',
                { someClass1: true },
            ),
        ).toBe('someClass someClass1');
    });

    test('С модами и доп. параметрами', () => {
        const expected = 'someClass someClass2 someClass1';
        expect(
            classNames(
                'someClass',
                { someClass1: true },
                ['someClass2'],
            ),
        ).toBe(expected);
    });

    test('С отключенными модами', () => {
        expect(
            classNames(
                'someClass',
                { someClass1: false, someClass2: undefined },
            ),
        ).toBe('someClass');
    });

    test('С undefined парамтерами', () => {
        expect(
            classNames(
                'someClass',
                {},
                [undefined, null],
            ),
        ).toBe('someClass');
    });
});
