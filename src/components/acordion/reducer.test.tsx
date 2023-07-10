import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', () => {
     const state: StateType = {
        collapsed: false,
    }

    const NewState = reducer(state, {type: TOGGLE_COLLAPSED});

    expect(NewState.collapsed).toBe(true);
})


test('collapsed should be false', () => {
    const state: StateType = {
        collapsed: true,
    }

    const NewState = reducer(state, {type: TOGGLE_COLLAPSED});

    expect(NewState.collapsed).toBe(false);
})

test('reducer should return error', () => {
    const state: StateType = {
        collapsed: true,
    }

    expect(() => {
        reducer(state, {type:  'faketype'})
    }).toThrowError();


})