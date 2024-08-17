
export function stringToCurrency(value: string) {
  value = value.replace(/[^0-9.]/g, '');

  if (value === '') return value;

  const dotCount = value.split('.').length - 1;
  if (dotCount > 0) {
    const parts = value.split('.');
    if (parts[0] === '') parts[0] = '0';
    if (parts[1].length > 2) {
      value = `${parts[0]}.${parts[1].substring(0, 2)}`;
    } else {
      value = `${parts[0]}.${parts[1]}`;
    }
  }

  if (parseFloat(value) > 99999) value = '99999.99';

  return value;
}
