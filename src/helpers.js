export function removeDecimal(number) {
  return Math.round(number);
}

export function convertToMeters(number) {
  return Math.round(number * 1000);
}

export function convertToThousands(number) {
  return Math.round(number).toLocaleString();
}

export function convertToMetersThousands(number) {
  return Math.round(number * 1000).toLocaleString();
}

export function removeParentheses(name) {
  return name.replace(/[)(]/g, '');
}
