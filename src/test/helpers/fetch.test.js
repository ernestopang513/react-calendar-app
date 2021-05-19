import { fetchConToken, fetchSinToken } from "../../helpers/fetch"



describe('Pruebas en el helper fetch', () => {
    
    let token = '';

    test('fetchSinToken debe de funcionar', async() => {
        
        const resp = await fetchSinToken('auth', {email: 'ernesto@gmail.com', password: '123456'}, 'POST');
        expect(resp instanceof Response).toBe(true);
        const body = await resp.json();
        expect(body.ok).toBe(true);


        token = body.token;

    });


    test('fetchConToken debe de funcionar', async() => {
        
        localStorage.setItem('token', token);

        const resp = await fetchConToken('events/609b116f05f3a7262c93d1c7', {
            "title": "Trabajo cruel",
            "start": 1000000000,
            "end": 400000000,
            "notes": "Hola mundo.....cruel"
        },'PUT');
        const body = await resp.json();

        expect(body.ok).toBe(true)

    });
    
});
