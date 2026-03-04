type FormatCurrencyOptions = {
  fractionDigits?: number;
  fallbackZeros?: boolean;
};

const formatToCurrency = (value: string | number | null | undefined, options: FormatCurrencyOptions = {}): string => {
  const { fractionDigits = 2, fallbackZeros = true } = options;

  if (value == null || value === '') {
    return fallbackZeros ? `0,${'0'.repeat(fractionDigits)}` : '';
  }

  let numericValue: number;

  if (typeof value === 'string') {
    const cleaned = value.replace(/\./g, '').replace(',', '.');
    numericValue = parseFloat(cleaned);
  } else {
    numericValue = value;
  }

  if (isNaN(numericValue)) {
    return fallbackZeros ? `0,${'0'.repeat(fractionDigits)}` : '';
  }

  const formatted = numericValue.toLocaleString('en-US', {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });

  return formatted === `-0,${'0'.repeat(fractionDigits)}` ? `0,${'0'.repeat(fractionDigits)}` : formatted;
};

export default formatToCurrency;
