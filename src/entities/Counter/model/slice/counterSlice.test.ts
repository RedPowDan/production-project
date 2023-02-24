import { CounterSchema } from 'entities/Counter';
import { counterReducers, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducers(state, counterActions.decrement),
        ).toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducers(state, counterActions.increment),
        ).toEqual({ value: 11 });
    });
    test('пустой стейт increment', () => {
        expect(
            counterReducers(undefined, counterActions.increment),
        ).toEqual({ value: 1 });
    });
    test('пустой стейт decrement', () => {
        expect(
            counterReducers(undefined, counterActions.decrement),
        ).toEqual({ value: -1 });
    });
});
