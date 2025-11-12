export interface PasswordValidationResult {
  isValid: boolean;
  errors: string[];
}


export function validatePassword(password: string): PasswordValidationResult {
  const errors: string[] = [];

  if (!password) {
    return { isValid: false, errors: ['Senha não pode ser nula ou vazia'] };
  }

  if (password.length < 8) {
    errors.push('A senha deve ter pelo menos 8 caracteres');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('A senha deve conter pelo menos 1 letra minúscula');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('A senha deve conter pelo menos 1 letra maiúscula');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('A senha deve conter pelo menos 1 número');
  }

  if (!/[!@#$%^&*]/.test(password)) {
    errors.push('A senha deve conter pelo menos 1 caractere especial (!@#$%^&*)');
  }

  return {
    isValid: errors.length === 0,
    errors: errors,
  };
}