const { generateText, validateInput, createElement } = require('../util.js');

describe('1er Modulo', () => {
    test('Salida con datos', () =>{
        const text = generateText('Daniel',30);
        expect(text).toBe('Daniel (30 years old)');
    });

    test('Salida con datos vacios', () =>{
        const text = generateText('',null);
        expect(text).toBe(' (null years old)');    
    });
})

describe('2do Modulo', () => {
    test('Verificar existencia de elemento', () =>{
        const text = createElement('li', 'usuario qcyo', 'user-item');
        expect(text).toBe("<li class='user-item'>usuario qcyo</li>");  
    })                  
    test('Verificar existencia de elemento', () =>{
        const text = createElement('li', 'usuario qcyo', 'user-perfil');
        expect(text).toBe('<li class="user-perfil">usuario qcyo</li>');  
    })
});


describe.only('3er Modulo', () => {
    
    test('Verificar booleano', () =>{
        const text = validateInput("Daniel", false, false );
        expect(text).toBeTruthy();    
    });

    test('Verificar booleano x3', () =>{
        const text = validateInput("Daniel", false, true );
        expect(text).toBeFalsy();    
    });

});


