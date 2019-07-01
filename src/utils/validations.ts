/**
 * Regex
 */
const emailRegex = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

/**
 * Validations for export
 */
const isValidName = (name: string) =>
  !!name && typeof name === 'string' && name.length;

const isValidEmail = (email: string) => emailRegex.test(email);

export { isValidName, isValidEmail };
