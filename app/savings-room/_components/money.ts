const cad = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});

/** Formats like the app does for a Canadian user: $4,500.00. */
export function money(amount: number): string {
  return cad.format(amount);
}
