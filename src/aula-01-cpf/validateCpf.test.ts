import Cpf from './Cpf';

describe('Validade Cpf', () => {

  test('when cpf is valid then assign to cpf field', () => {
    const cpfInput = '771.393.720-04';
    const cpf = new Cpf(cpfInput);
    expect(cpf.value).toBe('771.393.720-04');
  });


  test('when cpf is not valid then thow error', () => {
    const value = '771.393.290-04';
    const cpf = new Cpf(value);

    expect(cpf).toThrowError();
  });
});