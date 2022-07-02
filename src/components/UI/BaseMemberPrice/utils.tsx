export function formatMemberPrice(price: number) {
  return `${price.toFixed(2)}`.split('.');
}