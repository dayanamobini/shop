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
      aria-label={`Rated ${rating} out of 5${count ? ` from ${count} reviews` : ''}`}
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
          {rating.toFixed(1)}
          {count !== undefined && <span className="rating__count"> ({count})</span>}
        </span>
      )}
    </span>
  )
}
