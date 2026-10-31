export function money(value: number): string {
  return `$${value.toFixed(2)}`
}

export function titleCase(value: string): string {
  return value.replace(/(^|\s)\S/g, (letter) => letter.toUpperCase())
}
