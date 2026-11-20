import { faDecimal, faNum } from '../../lib/format'
import { Icon } from './Icon'

type RatingProps = {
  rating: number
  count?: number
  showCount?: boolean
  size?: number
  label?: string
}

export function Rating({ rating, count, showCount = true, size = 13 }: RatingProps) {
  const rounded = Math.round(rating)
  return (
    <span
      className="rating"
      aria-label={`امتیاز ${faDecimal(rating)} از ۵${count ? ` بر اساس ${faNum(count)} نظر` : ''}`}
    >
      <span className="rating__stars" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <Icon
            key={index}
            name="star"
            size={size}
            className={index < rounded ? 'rating__star is-on' : 'rating__star'}
          />
        ))}
      </span>
      {showCount && (
        <span className="rating__meta">
          {faDecimal(rating)}
          {count !== undefined && <span className="rating__count"> ({faNum(count)})</span>}
        </span>
      )}
    </span>
  )
}
