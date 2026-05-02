import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// ------------------ isPhoneNumber ------------------

test('valid phone number format 1', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number format 2', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('invalid phone number short', () => {
  expect(isPhoneNumber('123-45')).toBe(false);
});


// ------------------ isEmail ------------------

test('valid email 1', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email 2', () => {
  expect(isEmail('hello123@gmail.com')).toBe(true);
});

test('invalid email missing @', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

test('invalid email missing domain', () => {
  expect(isEmail('test@')).toBe(false);
});


// ------------------ isStrongPassword ------------------

test('valid strong password 1', () => {
  expect(isStrongPassword('Abc12345')).toBe(true);
});

test('valid strong password 2', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});

test('invalid password too short', () => {
  expect(isStrongPassword('Ab1')).toBe(false);
});

test('invalid password too short 2', () => {
  expect(isStrongPassword('abcdefg')).toBe(false);
});

// ------------------ isDate ------------------

test('valid date 1', () => {
  expect(isDate('10/05/2023')).toBe(true);
});

test('valid date 2', () => {
  expect(isDate('01/01/1999')).toBe(true);
});

test('invalid date wrong format', () => {
  expect(isDate('2023-10-05')).toBe(false);
});

test('invalid date letters', () => {
  expect(isDate('abcd-ef-gh')).toBe(false);
});


// ------------------ isHexColor ------------------

test('valid hex color 1', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('valid hex color 2', () => {
  expect(isHexColor('123abc')).toBe(true);
});

test('invalid hex color wrong length', () => {
  expect(isHexColor('123ab')).toBe(false);
});

test('invalid hex color wrong chars', () => {
  expect(isHexColor('#ZZZZZZ')).toBe(false);
});