import { validatePassword } from '../passwordValidator';

describe('validatePassword', () => {

  test('deve retornar válido para uma senha forte', () => {
    const result = validatePassword('Forte@123');
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('deve retornar erro para senha muito curta', () => {
    const result = validatePassword('Fraca1@');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('A senha deve ter pelo menos 8 caracteres');
  });

  test('deve retornar erro para senha sem letra maiúscula', () => {
    const result = validatePassword('forte@123');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('A senha deve conter pelo menos 1 letra maiúscula');
  });

  test('deve retornar erro para senha sem número', () => {
    const result = validatePassword('Forte@senha');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('A senha deve conter pelo menos 1 número');
  });

  test('deve retornar erro para senha sem caractere especial', () => {
    const result = validatePassword('Forte1234');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('A senha deve conter pelo menos 1 caractere especial (!@#$%^&*)');
  });

  test('deve retornar erro para senha nula ou vazia', () => {
    const result = validatePassword('');
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Senha não pode ser nula ou vazia');
  });

});