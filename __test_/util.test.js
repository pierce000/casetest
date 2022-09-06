// Equipe 7
// Natali de souza 
// marcelo Alencar
// Diogo Moraes Cunha
// Luiz raphael Barros Moura
// Fernando Limões

const { generateText, validateInput, createElement } = require('../util.js');

test('devolução de nome com idade', ()=>{
    const text = generateText('Natali', 18);
    expect(text).toBe('Natali (18 years old)');

});

// teste Passou
test ("devolução de nome composto", ()=>{
    const text = generateText('Natali Souza', 18);
    expect(text).toBe('Natali Souza (18 years old)')
}); 
// foram aceitos Nomes compostos

// teste falhou
 test("Age aceitar apenas números", ()=>{
    const text = generateText('Natali Souza', "18test-");
    expect(text).toBe('Natali Souza (18test- years old)');
}); 
// foi aceito letras e caracteres especiais em Age
// erro linha 25

describe('Testes de saída de dados', () => {
    test('Saída com dados', () =>{
        const text = generateText('Houser',30);
        expect(text).toBe('Houser (30 years old)');
    });
      
    test('Saída com dados vazios', () =>{
        const text = generateText('',null);
        expect(text).toBe(' (null years old)');    
    });
    
    test('Saída sem dados', () =>{
        const text = generateText();
        expect(text).toBe('undefined (undefined years old)');    
    });
})