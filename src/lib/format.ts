const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export const money = (value: number) => currency.format(value)

export const plural = (count: number, singular: string, pluralForm?: string) =>
  `${count} ${count === 1 ? singular : pluralForm ?? `${singular}s`}`

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
