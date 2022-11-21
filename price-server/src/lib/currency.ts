export function getBaseCurrency(symbol: string): string {
  let splitter = symbol.includes('/') ? "/" : "-";
  return symbol.split(splitter)[0]
}

export function getQuoteCurrency(symbol: string): string {
  let splitter = symbol.includes('/') ? "/" : "-";
  return symbol.split(splitter)[1]
}
