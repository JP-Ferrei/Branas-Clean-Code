import Cpf from '../src/Cpf';

describe('Validade Cpf', () => {

  test('when cpf is valid then assign to cpf field', () => {
    const cpfInput = '771.393.720-04';
    const cpf = new Cpf(cpfInput);
    expect(cpf.getValue()).toBe('771.393.720-04');
  });


  test('when cpf is not valid then thow error', () => {
    const value = '771.323.290-04';
    

    expect( () => new Cpf(value)).toThrow(new Error("CPF Inválido"));
  });
});