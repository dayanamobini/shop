import { srcSet, unsplash } from '../../data/images'

type ImgProps = {
  photo: string
  alt: string
  sizes?: string
  className?: string
  eager?: boolean
  ratio?: [number, number]
  widths?: number[]
}

/**
 * Responsive Unsplash image with intrinsic dimensions so nothing shifts while
 * loading. The wrapper controls the crop via CSS `object-fit`.
 */
export function Img({
  photo,
  alt,
  sizes = '(max-width: 767px) 100vw, 50vw',
  className,
  eager = false,
  ratio = [4, 5],
  widths = [480, 768, 1024, 1440, 1920],
}: ImgProps) {
  return (
    <img
      className={className}
      src={unsplash(photo, 1200)}
      srcSet={srcSet(photo, widths)}
      sizes={sizes}
      width={ratio[0] * 300}
      height={ratio[1] * 300}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : 'auto'}
    />
  )
}
