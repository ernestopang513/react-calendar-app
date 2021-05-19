import { authReducer } from "../../../components/reducers/authReducer"
import { types } from "../../../components/types/types";

const initialState = {
    checking: true,
}

describe('Pruebas en el authReducer', () => {
    
    test('Debe retornar el estado por defecto', () => {
        
        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('Debe retornar checken: false y lo del payload', () => {
        const action = {
            type: types.authLogin,
            payload: {
                uid: '123',
                name: 'Fernando'
            }
        }

        const state = authReducer(initialState, action);
        expect(state).toEqual({ checking: false, uid: '123', name: 'Fernando' })
    })
    
    
})
