const parseCentsToDollars = (cents: number) => {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return USDollar.format(cents / 100);
};

export const CurrencyUtils = {
  parseCentsToDollars,
};
