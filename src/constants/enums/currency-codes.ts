export const CURRENCY_CODES = {
  TRY: "Türk Lirası",
  USD: "Amerikan Doları",
  EUR: "Avro",
  GBP: "İngiliz Sterlini",
};

export const CURRENCY_SHORT_CODES = {
  TRY: "TRY",
  USD: "USD",
  EUR: "EUR",
  GBP: "GBP",
};

export type CurrencyCode = keyof typeof CURRENCY_CODES;