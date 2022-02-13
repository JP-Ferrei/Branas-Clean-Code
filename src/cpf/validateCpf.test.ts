import {CpfValidator} from './CpfValidator';

describe('Validade Cpf', () => {

  test('when cpf is valid then return true', () => {
    // const cpf = '771.393.720-04';
    const cpf = '152.129.937-41';
    const cpfValidator = new CpfValidator();
    const isValid = cpfValidator.isCpfvalid(cpf);

    expect(isValid).toBe(true);
  });


  test('when cpf is not valid then return false', () => {
    const cpf = '771.393.720-04';

    const cpfValidator = new CpfValidator()
    const isValid = cpfValidator.isCpfvalid(cpf);

    expect(isValid).toBe(true);
  });
});