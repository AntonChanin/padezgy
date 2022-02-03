import toCase from './utils';

test('окончание на -а', () => {
  expect(toCase('ваза', 'р')).toBe('вазы');
  expect(toCase('ваза', 'д')).toBe('вазе');
  expect(toCase('ваза', 'в')).toBe('вазу');
  expect(toCase('ваза', 'т')).toBe('вазой');
  expect(toCase('ваза', 'п')).toBe('вазе');
});

test('окончание на -(ш/ж/к/ч)а', () => {
  expect(toCase('крыша', 'р')).toBe('крыши');
  expect(toCase('крыша', 'д')).toBe('крыше');
  expect(toCase('крыша', 'в')).toBe('крышу');
  expect(toCase('крыша', 'т')).toBe('крышой');
  expect(toCase('крыша', 'п')).toBe('крыше');
});

test('окончание на -б/в/м/г/д/л/ж/з/к/н/п/т/ф/ч/ц/щ/р/х', () => {
  expect(toCase('боб', 'р')).toBe('боба');
  expect(toCase('боб', 'д')).toBe('бобу');
  expect(toCase('боб', 'в')).toBe('боба');
  expect(toCase('боб', 'т')).toBe('бобом');
  expect(toCase('боб', 'п')).toBe('бобе');
});

test('окончание на -и/е', () => {
  expect(toCase('поле', 'р')).toBe('полей');
  expect(toCase('поле', 'д')).toBe('полям');
  expect(toCase('поле', 'в')).toBe('поле');
  expect(toCase('поле', 'т')).toBe('полями');
  expect(toCase('поле', 'п')).toBe('полях');
});

test('окончание на -ый', () => {
  expect(toCase('пятый', 'р')).toBe('пятого');
  expect(toCase('пятый', 'д')).toBe('пятому');
  expect(toCase('пятый', 'в')).toBe('пятый');
  expect(toCase('пятый', 'т')).toBe('пятым');
  expect(toCase('пятый', 'п')).toBe('пятом');
});

test('окончание на -й', () => {
  expect(toCase('вой', 'р')).toBe('воя');
  expect(toCase('вой', 'д')).toBe('вою');
  expect(toCase('вой', 'в')).toBe('воя');
  expect(toCase('вой', 'т')).toBe('воем');
  expect(toCase('вой', 'п')).toBe('вое');
});

test('окончание на -о', () => {
  expect(toCase('войлоко', 'р')).toBe('войлока');
  expect(toCase('войлоко', 'д')).toBe('войлоку');
  expect(toCase('войлоко', 'в')).toBe('войлоко');
  expect(toCase('войлоко', 'т')).toBe('войлоком');
  expect(toCase('войлоко', 'п')).toBe('войлоке');
});

test('окончание на -с/ш', () => {
  expect(toCase('квас', 'р')).toBe('кваса');
  expect(toCase('квас', 'д')).toBe('квасу');
  expect(toCase('квас', 'в')).toBe('квас');
  expect(toCase('квас', 'т')).toBe('квасом');
  expect(toCase('квас', 'п')).toBe('квасе');
});

test('окончание на -ы', () => {
  expect(toCase('коты', 'р')).toBe('котов');
  expect(toCase('коты', 'д')).toBe('котам');
  expect(toCase('коты', 'в')).toBe('коты');
  expect(toCase('коты', 'т')).toBe('котами');
  expect(toCase('коты', 'п')).toBe('котах');
});

test('окончание на -ь', () => {
  expect(toCase('тень', 'р')).toBe('тени');
  expect(toCase('тень', 'д')).toBe('тени');
  expect(toCase('тень', 'в')).toBe('тень');
  expect(toCase('тень', 'т')).toBe('тенью');
  expect(toCase('тень', 'п')).toBe('тени');
});

test('окончание на -уль', () => {
  expect(toCase('куль', 'р')).toBe('кули');
  expect(toCase('куль', 'д')).toBe('куле');
  expect(toCase('куль', 'в')).toBe('кулю');
  expect(toCase('куль', 'т')).toBe('кулей');
  expect(toCase('куль', 'п')).toBe('куле');
});

test('окончание на -(ч/ш/д/т)ь', () => {
  expect(toCase('сечь', 'р')).toBe('сечи');
  expect(toCase('сечь', 'д')).toBe('сечи');
  expect(toCase('сечь', 'в')).toBe('сечь');
  expect(toCase('сечь', 'т')).toBe('сечью');
  expect(toCase('сечь', 'п')).toBe('сечи');
});

test('окончание на -я', () => {
  expect(toCase('зоря', 'р')).toBe('зори');
  expect(toCase('зоря', 'д')).toBe('зоре');
  expect(toCase('зоря', 'в')).toBe('зорю');
  expect(toCase('зоря', 'т')).toBe('зорей');
  expect(toCase('зоря', 'п')).toBe('зоре');
});