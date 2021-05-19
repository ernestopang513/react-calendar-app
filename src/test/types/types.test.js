import { types } from "../../components/types/types"


describe('Pruebas en Types', () => {
    
    test('Los types deben de ser iguales', () => {
        
        expect(types).toEqual({
            uiOpenModal: '[ui] Open modal',
            uiCloseModal: '[ui] Close modal',
        
        
            eventStartAddNew: '[event] Start add new',
            eventSetActive: '[event] Set Active',
            eventAddNew: '[event] Add new',
            eventClearActiveEvent: '[event] Clear Active Event',
            eventUpdated: '[event] Event updated',
            eventDeleted: '[event] Event deleted',
            eventLoaded: '[event] Event loaded',
            eventLogout: '[event] Event logout',
        
            
        
        
        
            
            authCheckingFinish: '[auth] Finish checking login state', 
            authStartLogin: '[auth] Start login', 
            authLogin: '[auth] Login', 
            authStartRegister: '[auth] Start Reginster',
            authStartTokenRenew: '[auth] Start token renew', 
            authLogout: '[auth] Logout', 
            
        });
    });
    
});
