import React from 'react';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import {mount} from 'enzyme';
import '@testing-library/jest-dom';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startLogin, startRegister } from '../../../components/actions/auth';
import Swal from 'sweetalert2';


jest.mock('../../../components/actions/auth', () =>( {
    startLogin: jest.fn(),
    startRegister: jest.fn()
}));
jest.mock('sweetalert2', () =>( {
    fire: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};
const store = mockStore(initState);
store.dispatch = jest.fn();


const wrapper = mount(
    <Provider store = {store}>
        <LoginScreen/>
    </Provider>
)




describe('Pruebas en LoginScreen', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })
    
    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
   
    test('Debe de llamar el dispatch del login', () => {
        
        wrapper.find('input[name="lEmail"]').simulate('change',{
            target: {
                name: 'lEmail',
                value: 'juan@gmail.com'
            }
        });
        wrapper.find('input[name="lPassword"]').simulate('change',{
            target: {
                name: 'lPassword',
                value: '123456'
            }
        });

        wrapper.find('form').at(0).prop('onSubmit')({
            preventDefault(){}
        });

        expect(startLogin).toHaveBeenCalledWith("juan@gmail.com", "123456");


    });
    
    test('No hay registro si las contraseñas son diferenctes', () => {
        
        ///password
        wrapper.find('input[name="rPassword1"]').simulate('change',{
            target: {
                name: 'rPassword1',
                value: '123456'
            }
        });
        wrapper.find('input[name="rPassword2"]').simulate('change',{
            target: {
                name: 'rPassword2',
                value: '15345666'
            }
        });

        wrapper.find('form').at(1).prop('onSubmit')({
            preventDefault(){}
        });

        expect(startRegister).not.toHaveBeenCalled();
        expect(Swal.fire).toHaveBeenCalledWith("Error", "Las contraseñas debed de ser iguales", "error");
    });

    test('Registro con contraseñas iguales', () => {

        wrapper.find('input[name="rPassword1"]').simulate('change',{
            target: {
                name: 'rPassword1',
                value: '123456'
            }
        });
        wrapper.find('input[name="rPassword2"]').simulate('change',{
            target: {
                name: 'rPassword2',
                value: '123456'
            }
        });

        wrapper.find('form').at(1).prop('onSubmit')({
            preventDefault(){}
        });

        expect(Swal.fire).not.toHaveBeenCalled();
        expect(startRegister).toHaveBeenCalledWith("jose@gmail.com", "123456", "Jose");
        
    });
    
    
});
