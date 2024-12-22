export const passwordValidation = {
  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  message: 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character'
};

export const validateRequired = (value: string): string | null => {
  return !value ? 'This field is required' : null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return 'Password is required';
  if (!passwordValidation.pattern.test(password)) {
    return passwordValidation.message;
  }
  return null;
};