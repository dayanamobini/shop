const numberFormat = new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 0 })

const decimalFormat = new Intl.NumberFormat('fa-IR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
})

/** Groups a number with Persian digits. */
export const faNum = (value: number) => numberFormat.format(value)

/** One decimal place, Persian digits — used for ratings. */
export const faDecimal = (value: number) => decimalFormat.format(value)

/** Prices are stored in Toman and always shown with Persian digits. */
export const money = (value: number) =>
  `${numberFormat.format(Math.round(value))}\u00A0تومان`

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
