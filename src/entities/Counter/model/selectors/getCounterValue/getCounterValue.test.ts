import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('10', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
    test('11', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 11 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(11);
    });
    test('0', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 0 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(0);
    });
    test('null', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: null },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(null);
    });
    test('undefined', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: undefined },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(undefined);
    });
    test('-1000', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: -1000 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(-1000);
    });
    test('1000', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 1000 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(1000);
    });
    test('1000000', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 1000000 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(1000000);
    });
});
